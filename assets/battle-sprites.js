// Cache the current fighters' rasterized action cels, including alternate colors and forms.
const battleFrameCache = new Map();
const frameCacheLimit = 72;
let nextSpriteId = 0;
const spriteIds = new WeakMap();

function cachedCel(sprite,key,bake) {
  if(!spriteIds.has(sprite)) spriteIds.set(sprite,++nextSpriteId);
  const cacheKey=spriteIds.get(sprite)+'/'+key;
  const existing=battleFrameCache.get(cacheKey);
  if(existing){
    battleFrameCache.delete(cacheKey);
    battleFrameCache.set(cacheKey,existing);
    return existing;
  }
  const cel=bake();
  battleFrameCache.set(cacheKey,cel);
  if(battleFrameCache.size>frameCacheLimit) battleFrameCache.delete(battleFrameCache.keys().next().value);
  return cel;
}

function battleCel(f,sprite,height,animation) {
  const jump=f.y<floor;
  const jumpPhase=jump?(f.vy<-3?'rise':f.vy>3?'fall':'apex'):'ground';
  const hitAge=f.stun&&f.hitAt!=null?Math.min(13,tick-f.hitAt):-1;
  const move=f.move;
  const motion=move?move.animation+'/'+move.t+'/'+move.wind+'/'+move.live+'/'+move.rest+
    '/'+(move.signature?.beats.map(beat=>beat.at).join(',')??''):'';
  const key=[height,jumpPhase,f.guard,!!f.stun,hitAge,motion].join('/');
  return cachedCel(sprite,key,()=>{
    const surface=document.createElement('canvas');
    surface.width=Math.ceil(Math.max(340,height*sprite.w/sprite.h+176));
    surface.height=height+106;
    const pen=surface.getContext('2d');
    const pivot={x:surface.width/2,y:surface.height-44};
    pen.translate(pivot.x,pivot.y);
    paintAnimatedFighter(f,sprite,height,animation,pen);
    return {image:surface,pivot};
  });
}

// Each frame has a different body line from crown to feet. In the landing and
// rest cels the head lowers, the torso folds and the knees and feet settle.
const fallCels = [
  {from:0, spine:[[101,34],[115,70],[128,103],[140,140],[129,168],[124,199]], width:[.91,.93,.88,.8,.83,.81]},
  {from:.13,spine:[[57,51],[88,73],[117,96],[148,107],[150,148],[176,168]], width:[.87,.92,.83,.74,.75,.68]},
  {from:.32,spine:[[28,96],[63,104],[95,120],[129,134],[144,178],[174,186]], width:[.72,.84,.82,.72,.71,.69]},
  {from:.53,spine:[[19,156],[53,157],[90,163],[127,166],[146,143],[183,173]], width:[.67,.83,.84,.72,.72,.71]},
  {from:.72,spine:[[21,178],[55,172],[89,173],[124,177],[147,157],[185,180]], width:[.58,.71,.71,.65,.65,.63]}
];
const fallBands=[0,.19,.36,.56,.77,1];

function rasterDownCel(sprite,height,number) {
  return cachedCel(sprite,'fall/'+height+'/'+number,()=>{
    const surface=document.createElement('canvas');
    surface.width=360;
    surface.height=310;
    const pen=surface.getContext('2d',{willReadFrequently:true});
    const {spine,width:scales}=fallCels[number];
    const width=height*sprite.w/sprite.h;
    const scale=height/206;
    const columns=[0,.25,.5,.75,1];
    const vertices=fallBands.map((v,i)=>{
      const [x,y]=spine[i];
      const a=spine[Math.max(0,i-1)], b=spine[Math.min(spine.length-1,i+1)];
      const direction=Math.atan2(b[1]-a[1],b[0]-a[0]);
      return columns.map(u=>{
        const side=(u-.5)*Math.min(width,178)*scales[i];
        return {x:(u-.5)*width,y:(v-1)*height,
          tx:39+x*scale+Math.sin(direction)*side,ty:15+y*scale-Math.cos(direction)*side};
      });
    });
    for(let row=0;row<vertices.length-1;row++) for(let col=0;col<columns.length-1;col++){
      const upper=vertices[row],lower=vertices[row+1];
      paintPoseTriangle(pen,sprite,height,upper[col],upper[col+1],lower[col]);
      paintPoseTriangle(pen,sprite,height,lower[col+1],lower[col],upper[col+1]);
    }
    return trimSprite(surface,pen);
  });
}

function downPose(f,sprite,height,floorY) {
  const ko=f.knockout;
  const resting=ko.progress>=.72?roundArtwork(f,'loss',ko.height??height,ko.form):null;
  const number=Math.max(0,fallCels.findLastIndex(cel=>ko.progress>=cel.from));
  const cel=resting?.sprite??rasterDownCel(ko.sprite??sprite,ko.height??height,number);
  const drawHeight=resting?.height??cel.h, width=resting?.width??cel.w;
  const padding=8, halfWidth=width/2;
  const x=Math.max(padding+halfWidth,Math.min(battleWidth-padding-halfWidth,f.x));
  const y=Math.min(floorY,Math.max(padding+drawHeight,f.y));
  return {x,y,cel,height:drawHeight,width,face:resting?f.face:ko.fallDirection<0?1:-1};
}
