const actionFrames = new Map();
const alternateActionFrames = new WeakMap();
const projectileIcons = {arrow:46,boomerang:36,star:28,card:28};
const kickHeightScale = {lk:.86,mk:.93,hk:.98};
// Gear held over the head adds height to these sprite bounds.
const guardHeightScale = {bryan:1.16,yokan:1.14,roj:1.16,miguel:1.04,semmenelin:.91};
// Keep the body at standing scale even when crouching, reaching or raising gear.
// Values are fractions of the standing sprite height, including the full pose bounds.
const poseHeightByFighter = {
  bryan:{guard:1.1,lk:.79,hk:1,win:1.03},
  ranelle:{guard:.89,lk:.75,mk:.89,low:.92,release:.96,win:1.02},
  yokan:{guard:1.12,lk:.71,mk:.86,hk:1,low:.9,win:1,loss:.61},
  dice:{guard:.8,lk:.69,mk:.79,hk:.84,low:.88,release:1.02,punch:.91,win:1.03},
  roj:{guard:1.12,lk:.74,mk:.86,hk:.93,low:.92,release:1.03},
  hope:{guard:.91,lk:.72,mk:.82,hk:.89,punch:.92,release:.96,loss:.52},
  miguel:{guard:.97,lk:.74,mk:.84,hk:.92,punch:.91,low:.92,win:1.02,loss:.61},
  bennedic:{guard:.89,lk:.74,mk:.86,hk:.92,win:1.04,loss:.61},
  fallan:{guard:.86,lk:.7,mk:.82,hk:.9,punch:.87,low:.9,release:1.03,win:1.02},
  lynne:{guard:.83,lk:.69,mk:.8,hk:.87,punch:.89,win:1.02},
  clephus:{guard:.86,lk:.73,mk:.84,hk:.91,punch:.9,release:1.03,win:1.02},
  karl:{guard:.96,lk:.82,hk:.96,punch:.91,win:1.02,loss:.53},
  farrol:{lk:.81,mk:.89,hk:.95,win:1.02,loss:.52},
  mohammad:{guard:.91,lk:.74,mk:.85,hk:.92,punch:.9,low:.92,win:1.02},
  denni:{guard:.91,lk:.74,mk:.83,hk:.9,punch:.92,low:.92,release:.96,win:1.02},
  chastity:{guard:.89,lk:.75,mk:.85,hk:.92,punch:.9,release:.96,follow:.96,win:1.04,loss:.59},
  alberto:{guard:.89,lk:.74,mk:.86,hk:.94,punch:.91,low:.88,win:1.02},
  aljo:{guard:.88,lk:.72,mk:.85,hk:.91,punch:.91,win:1.02,loss:.6},
  robin:{guard:.91,lk:.76,mk:.87,hk:.94,punch:.9,low:.92,win:1.03},
  carlson:{guard:.88,lk:.72,mk:.82,hk:.91,low:.93,win:1.01,loss:.54},
  fred:{guard:.88,lk:.71,mk:.82,hk:.9,punch:.91,low:.89,win:1.02,loss:.51},
  ivanov:{guard:.88,lk:.71,mk:.82,hk:.9,punch:.89,win:1.01,loss:.6},
  honey:{guard:.88,lk:.7,mk:.81,hk:.88,punch:.89,release:.95,win:1.01},
  lovejoy:{guard:.9,lk:.78,mk:.87,hk:.93,punch:.92,win:1.03},
  asmodeus:{guard:.92,lk:.77,mk:.88,hk:.95,win:1.04,loss:.65},
  gensys:{lk:.8,mk:.9,win:1.04,loss:.61},
  pandemic:{guard:.86,lk:.73,mk:.82,hk:.9,punch:.91,release:.95,win:1.03},
  "bennedic-beast":{lk:.83,win:1.04},
  "ranelle-grenade":{release:.94},
  "ranelle-missile":{release:.94},
};

function poseHeightScale(form,pose,fallback) {
  return poseHeightByFighter[form]?.[pose]??fallback;
}

const alignedProjectiles = new Set(['arrow','boomerang','bullet','missile','laser','beam','halo','piston']);

const lowMeleeNames = {
  ranelle:'Knife Slash',alberto:'Knife Slash',mohammad:'Staff Strike',robin:'Staff Strike',
  bryan:'Spear Thrust',yokan:'Ice Sword Slash',dice:'Shadow Strike',roj:'Holy Sword Slash',
  miguel:'Bow Bash',fallan:'Glowing Palm',denni:'Machine Crash',carlson:'Whip Crack',
  fred:'Robotic Fist',gensys:'Metal Fist'
};

const castGripsOnArt = {
  miguel:[.97,.24],chastity:[.93,.13],ranelle:[.995,.17],alberto:[.995,.17],
  'ranelle-grenade':[.24,.07],'ranelle-missile':[.995,.15],
  mohammad:[.96,.11],robin:[.90,.055],fallan:[.86,.07],dice:[.76,.14],
  denni:[.99,.14],fred:[.95,.13],ivanov:[.94,.18],gensys:[.98,.16],
  lynne:[.76,.16],hope:[.96,.12],clephus:[.94,.055],tyrone:[.91,.15],
  aljo:[.98,.08],honey:[.93,.12],lovejoy:[.92,.12],asmodeus:[.96,.07],
  enigma:[.95,.045],pandemic:[.95,.11],roj:[.96,.08],semmenelin:[.91,.09],
  'tyrone-demon':[.80,.08],'enigma-rift':[.88,.08],'gensys-giant':[.96,.23]
};

const seatedScale = {
  bryan:.66,jonneil:.66,ranelle:.57,yokan:.65,dice:.52,roj:.66,hope:.55,miguel:.65,
  bennedic:.66,fallan:.65,lynne:.56,clephus:.54,karl:.57,farrol:.55,mohammad:.64,
  denni:.53,chastity:.63,alberto:.56,aljo:.66,robin:.55,carlson:.56,fred:.55,ivanov:.65,
  honey:.51,lovejoy:.53,asmodeus:.7,gensys:.65,enigma:.68,pandemic:.57,tyrone:.55,
  'bennedic-beast':.57,'tyrone-demon':.69,'enigma-rift':.7,semmenelin:.52,'gensys-giant':.66
};

function loadActionArtwork() {
  return Promise.all(actionSpriteSheets.map(({file,frames})=>loadImage('assets/actions/'+file+'.webp').then(image=>{
    for(const [key,x,y,w,h,path] of frames){
      const clip=document.createElement('canvas');
      clip.width=Math.round(image.naturalWidth*w);
      clip.height=Math.round(image.naturalHeight*h);
      const pen=clip.getContext('2d',{willReadFrequently:true});
      if(path){
        pen.beginPath();
        path.forEach(([px,py])=>pen.lineTo(px*clip.width,py*clip.height));
        pen.closePath();pen.clip();
      }
      pen.drawImage(image,
        Math.round(x*image.naturalWidth),Math.round(y*image.naturalHeight),
        clip.width,clip.height,0,0,clip.width,clip.height);
      const sprite=trimSprite(clip,pen);
      const groundBand=key.startsWith('lk/')?.075:.16;
      actionFrames.set(key,key.startsWith('icon/')?sprite:groundedSprite(sprite,groundBand));
    }
  })));
}

function actionSprite(key,alternate) {
  const sprite=actionFrames.get(key);
  if(!sprite||!alternate) return sprite;
  if(!alternateActionFrames.has(sprite)){
    alternateActionFrames.set(sprite,{...makeMirrorSprite(sprite),groundOffset:sprite.groundOffset});
  }
  return alternateActionFrames.get(sprite);
}

function shotShape(move) {
  return move?.shot?.shape??move?.signature?.beats.find(beat=>beat.shot)?.shot;
}

function releaseArtwork(fighter) {
  const shape=shotShape(fighter.move);
  if(!shape) return null;
  const form=battleForm(fighter);
  const id=form==='ranelle'&&['grenade','missile'].includes(shape)?'ranelle-'+shape:form;
  const sprite=actionSprite('release/'+id,fighter.alternate);
  return sprite?{id,sprite}:null;
}

function kickArtwork(fighter,move) {
  const form=battleForm(fighter);
  const strike=actionSprite(move.type+'/'+form,fighter.alternate);
  if(!strike) return null;
  const elapsed=move.t-move.wind;
  if(elapsed>=-1&&elapsed<move.live+2){
    return {phase:'kick',sprite:strike,scale:poseHeightScale(form,move.type,kickHeightScale[move.type])};
  }
  const chamber=move.t>=Math.ceil(move.wind*.26)&&elapsed<move.live+Math.ceil(move.rest*.52);
  const brace=chamber&&actionSprite('guard/'+form,fighter.alternate);
  return {phase:'kick',sprite:brace||null,scale:guardPoseScale(form)};
}

function activeActionSprite(fighter) {
  const move=fighter.move;
  if(!move) return null;
  if(move.kick) return kickArtwork(fighter,move);
  if(move.type==='lp'&&move.t>=move.wind-1&&move.t<move.wind+move.live+2){
    const sprite=actionSprite('low/'+battleForm(fighter),fighter.alternate);
    if(sprite) return {phase:'low',sprite};
  }
  const release=releaseArtwork(fighter);
  if(release&&move.t>=Math.floor(move.wind*.46)&&move.t<move.wind+move.live+Math.ceil(move.rest*.52)){
    const follow=move.t>=move.wind&&actionSprite('follow/'+release.id,fighter.alternate);
    return {...release,sprite:follow||release.sprite,phase:'release',role:follow?'follow':'release'};
  }
  return null;
}

function releaseHeightScale(id) {
  return ['fallan','clephus','robin','dice','asmodeus','enigma','enigma-rift','tyrone-demon','roj'].includes(id)?1.07:.99;
}

function actionFootPose(fighter,height,cel) {
  const {sprite,phase,id}=cel;
  const form=id??battleForm(fighter);
  const fallback=phase==='low'?.96:releaseHeightScale(id);
  const size=height*(cel.scale??poseHeightScale(form,cel.role??phase,fallback));
  const drawHeight=Math.min(size,Math.max(1,fighter.y-5));
  const advance=phase==='low'?9:0;
  return {height:drawHeight,x:advance+(sprite.groundOffset??0)*drawHeight/sprite.h};
}

function actionReleasePoint(fighter,height,release,scale) {
  const {sprite,id}=release;
  const position=actionFootPose(fighter,height,{...release,phase:'release',scale});
  const [u,v]=castGripsOnArt[id]??[.84,.30];
  return {artX:fighter.x+fighter.face*(position.x+(u-.5)*position.height*sprite.w/sprite.h),
    artY:fighter.y+(v-1)*position.height};
}

function guardPoseScale(form) {
  return poseHeightScale(form,'guard',guardHeightScale[form]??.95);
}

function guardArtwork(fighter,height) {
  if(!fighter.guard||fighter.roundPose||fighter.knockout) return null;
  const form=battleForm(fighter);
  const sprite=actionSprite('guard/'+form,fighter.alternate);
  if(!sprite) return null;
  const drawHeight=height*guardPoseScale(form);
  return {sprite,height:drawHeight,x:(sprite.groundOffset??0)*drawHeight/sprite.h};
}

function drawGuardImpact(fighter,height) {
  const fraction=(fighter.blockUntil-tick)/9;
  const radius=height*.19+(1-fraction)*12;
  ctx.save();
  ctx.translate(height*.24,-height*.61);
  ctx.strokeStyle='#a8ecff';
  ctx.globalAlpha=fraction*.94;
  ctx.lineWidth=3;
  ctx.beginPath();ctx.arc(0,0,radius,-1.16,1.16);ctx.stroke();
  ctx.fillStyle='#f2fcff';
  paintStar(10+fraction*5,.35);
  ctx.restore();
}

function roundArtwork(fighter,role,height,form=battleForm(fighter)) {
  const key=role==='win'?'win':role==='loss'?'loss':null;
  if(!key) return null;
  const sprite=actionSprite(key+'/'+form,fighter.alternate);
  if(!sprite) return null;
  const fallback=key==='win'?1.075:seatedScale[form]??.65;
  const drawHeight=height*poseHeightScale(form,key,fallback);
  return {sprite,height:drawHeight,width:drawHeight*sprite.w/sprite.h};
}

function drawProjectileIcon(shot) {
  const width=projectileIcons[shot.shape];
  const sprite=width&&actionFrames.get('icon/'+shot.shape);
  if(!sprite) return false;
  const rotation={boomerang:.42,star:.29,card:.18}[shot.shape]??0;
  const size=width*(shot.special?1.25:1);
  const height=size*sprite.h/sprite.w;
  ctx.rotate(shot.age*rotation);
  paintSprite(ctx,sprite,0,height/2,height);
  return true;
}

function drawArtCharge(fighter,height,action) {
  const {artX,artY}=actionReleasePoint(fighter,height,action);
  const strength=fighter.move.t/fighter.move.wind;
  const color=fighter.move.castColor??superLook(fighter,fighter.move.slot).color;
  ctx.save();
  ctx.translate((artX-fighter.x)*fighter.face,artY-fighter.y);
  ctx.globalAlpha=.24+strength*.6;
  ctx.strokeStyle=color;
  paintShockRing(7+strength*14,.88,2.4);
  energyOrb(13+strength*13,color);
  ctx.restore();
}

function drawLowActionFlash(fighter,height) {
  const colors={dice:'#b189ff',fallan:'#ffe7a3',denni:'#ffc66e',fred:'#dfedff',gensys:'#72f4ec'};
  const color=colors[fighter.id];
  if(!color) return;
  const elapsed=fighter.move.t-fighter.move.wind;
  ctx.save();
  ctx.translate(65,-height*.54);
  ctx.globalAlpha=Math.max(0,.78-elapsed*.16);
  ctx.strokeStyle=ctx.fillStyle=color;
  if(fighter.id==='dice'){
    for(let i=-1;i<=1;i++){
      ctx.beginPath();
      ctx.moveTo(-36,i*7);
      ctx.quadraticCurveTo(-5,-18+i*15,23,8+i*9);
      ctx.lineWidth=3;
      ctx.stroke();
    }
  } else energyOrb(23+elapsed*4,color);
  ctx.restore();
}
