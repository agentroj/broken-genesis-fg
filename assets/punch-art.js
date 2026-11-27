const punchForms = [
  'jonneil','farrol','karl','bennedic','dice','hope','miguel','lynne','fallan','clephus','mohammad','denni',
  'chastity','alberto','aljo','robin','carlson','fred','ivanov','lovejoy','asmodeus','gensys','enigma',
  'pandemic','tyrone','bennedic-beast','tyrone-demon','enigma-rift','semmenelin'
];
const illustratedPunchSets = new Set(['jonneil','farrol']);
const punchMoveKinds = {lp:'lp',mp:'mp',hp:'hp',jab:'lp',hook:'mp',uppercut:'hp'};
const punchFrames = new Map();
const alternatePunchFrames = new WeakMap();

function loadPunchArtwork() {
  const files=punchForms.flatMap(id=>illustratedPunchSets.has(id)?
    ['ready','lp','mp','hp'].map(kind=>id+'-'+kind):[id]);
  return Promise.all(files.map(file=>loadImage('assets/punch/'+file+'.webp').then(image=>{
    punchFrames.set(file,groundedSprite(standaloneSprite(image)));
  })));
}

function groundedSprite(sprite,groundBand=.16) {
  const region=Math.max(1,Math.round(sprite.h*groundBand));
  const pen=sprite.image.getContext('2d');
  const pixels=pen.getImageData(sprite.x,sprite.y+sprite.h-region,sprite.w,region).data;
  let weight=0, horizontal=0;
  for(let i=3;i<pixels.length;i+=4){
    if(pixels[i]<96) continue;
    const column=((i-3)/4)%sprite.w;
    weight+=pixels[i];
    horizontal+=column*pixels[i];
  }
  sprite.groundOffset=weight?sprite.w/2-horizontal/weight:0;
  return sprite;
}

function battleForm(fighter) {
  if(fighter.awakened) return 'azazel-beast';
  if(fighter.giant) return fighter.id==='vankov'?'vankov-mega':'gensys-giant';
  if(fighter.ascended) return 'enigma-rift';
  if(fighter.id==='tyrone'&&(fighter.demon||fighter.beastUntil>tick)) return 'tyrone-demon';
  if(fighter.id==='bennedic'&&fighter.beastUntil>tick) return 'bennedic-beast';
  return costumeArtForm(fighter,fighter.id);
}

function punchCel(fighter,gear) {
  const move=fighter.move;
  if(!move||gear||move.shot||move.morph||move.signature?.beats.some(beat=>beat.shot)) return null;
  const kind=punchMoveKinds[move.type]??(move.type==='super'?punchMoveKinds[move.animation]:null);
  const id=battleForm(fighter);
  if(!kind||!punchForms.includes(id)) return null;
  const illustrated=illustratedPunchSets.has(id);
  const elapsed=move.t-move.wind;
  const beats=move.signature?.beats;
  const nearest=beats?.findLast(beat=>beat.at<=move.t+1)?.at??move.wind;
  const single=move.t>=move.wind-1&&elapsed<move.live+3;
  const repeated=beats?.length>1&&move.t>=nearest-1&&move.t<nearest+4;
  const contact=beats?.length>1?repeated:single;
  const ready=illustrated&&move.t>0&&move.t<move.wind+move.live+Math.ceil(move.rest*.56);
  const key=contact?(illustrated?id+'-'+kind:id):ready?id+'-ready':null;
  let sprite=key?punchFrames.get(key):null;
  if(sprite&&fighter.alternate){
    if(!alternatePunchFrames.has(sprite)){
      alternatePunchFrames.set(sprite,{...makeMirrorSprite(sprite),groundOffset:sprite.groundOffset});
    }
    sprite=alternatePunchFrames.get(sprite);
  }
  return {sprite,contact,power:kind, illustrated};
}

function drawPunchCel(fighter,standing,height,cel) {
  const {sprite,contact,power,illustrated}=cel;
  const move=fighter.move;
  const body=sprite??standing;
  if(!contact){
    // Anticipation and recovery use the original proportions and pivot on the feet.
    ctx.rotate(sprite?0:-Math.sin(Math.min(1,move.t/Math.max(1,move.wind))*Math.PI)*.085);
  }
  const reach=contact?{lp:3,mp:8,hp:12}[power]:0;
  const contactScale=illustrated?{lp:.94,mp:.94,hp:fighter.id==='farrol'?1.14:.99}[power]:.95;
  const scale=contact?poseHeightScale(battleForm(fighter),'punch',contactScale):(sprite?.h ? .91 : 1);
  const drawHeight=Math.min(height*scale,Math.max(1,fighter.y-5));
  const groundOffset=(body.groundOffset??0)*drawHeight/body.h;
  paintSprite(ctx,body,reach+groundOffset,0,drawHeight);
}
