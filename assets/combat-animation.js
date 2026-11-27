// Poses share the combat clock. Coordinates are relative to the fighter and face right.
const attackTracks = {
  jab: {
    prepare:{drive:-5,lean:-.04,handX:-16,handY:6},
    strike:{drive:14,lean:.09,handX:55,handY:-3},
    follow:{drive:7,lean:.04,handX:26,handY:10}
  },
  hook: {
    prepare:{drive:-10,lean:-.10,handX:-27,handY:12,crouch:8},
    strike:{drive:20,lean:.19,handX:67,handY:-20,crouch:2},
    follow:{drive:12,lean:.09,handX:32,handY:14}
  },
  uppercut: {
    prepare:{drive:-11,lean:-.10,handX:-20,handY:31,crouch:18},
    strike:{drive:16,lean:.10,handX:58,handY:-57,crouch:-7},
    follow:{drive:12,lean:.04,handX:27,handY:-33}
  },
  sweep: {
    prepare:{drive:-5,lean:-.11,crouch:13,legAngle:.24,footX:-8,footY:-7},
    strike:{drive:9,lean:-.16,crouch:21,legAngle:-.66,footX:15,footY:9},
    follow:{drive:3,lean:-.06,crouch:12,legAngle:-.32,footX:9,footY:7}
  },
  sideKick: {
    prepare:{drive:-6,lean:-.10,crouch:3,legAngle:-.69,footX:-10,footY:-23},
    strike:{drive:8,lean:-.20,crouch:4,legAngle:-1.33,footX:22,footY:-3},
    follow:{drive:3,lean:-.10,legAngle:-.68,footY:-14}
  },
  roundhouse: {
    prepare:{drive:-9,lean:-.10,crouch:8,legAngle:-.88,footX:-14,footY:-22},
    strike:{drive:3,lean:-.27,crouch:-4,legAngle:-1.87,footX:13,footY:-19},
    follow:{drive:1,lean:-.15,legAngle:-1.31,footX:5,footY:-7}
  },
  slash: {
    prepare:{drive:-7,lean:-.12,handX:-20,handY:-22,crouch:6},
    strike:{drive:17,lean:.16,handX:59,handY:16},
    follow:{drive:9,lean:.09,handX:27,handY:27}
  },
  gun: {
    prepare:{drive:-3,lean:-.02,handX:19,handY:-8},
    strike:{drive:-8,lean:-.09,handX:28,handY:-17},
    follow:{drive:-2,lean:-.03,handX:22,handY:-8}
  },
  lob: {
    prepare:{drive:-4,lean:-.08,handX:-20,handY:-35},
    strike:{drive:11,lean:.11,handX:41,handY:-22},
    follow:{drive:5,lean:.07,handX:21,handY:18}
  },
  cast: {
    prepare:{drive:-4,lean:-.065,handX:12,handY:-27,crouch:5},
    strike:{drive:7,lean:.08,handX:41,handY:-8,crouch:-2},
    follow:{drive:4,lean:.025,handX:20,handY:-16}
  },
  morph: {
    prepare:{crouch:17,lean:-.07,handX:-9,handY:18},
    strike:{crouch:-12,lean:-.12,handX:29,handY:-24},
    follow:{crouch:1,lean:-.05,handX:12,handY:-9}
  }
};

const normalAnimation = {lp:'jab',mp:'hook',hp:'uppercut',lk:'sweep',mk:'sideKick',hk:'roundhouse'};
const spellProjectiles = new Set(['shadow','element','holy','star','rune','wave','nebula','beam','dragonfire','spore','halo','ice','water','stone','spirit']);
const martialSupers = new Set(['bryan','jonneil','yokan','karl','farrol','denni','bennedic','carlson','alberto','fred','miguel']);
const handShots = new Set(['bullet','missile','piston','laser']);

function attackAnimation(fighter,move,gear) {
  const shot=move.shot?.shape??move.signature?.beats.find(beat=>beat.shot)?.shot;
  if(move.morph) return 'morph';
  if(handShots.has(shot)||shot==='arrow') return 'gun';
  if(spellProjectiles.has(shot)) return 'cast';
  if(shot) return 'lob';
  if(gear||(fighter.id==='carlson'&&!move.kick)) return 'slash';
  if(move.type==='super'){
    if(fighter.id==='jonneil') return 'jab';
    if(fighter.id==='karl') return 'slash';
    return martialSupers.has(fighter.id)?'uppercut':'cast';
  }
  return normalAnimation[move.type]??'cast';
}

function blendPose(from,to,t) {
  const u=Math.max(0,Math.min(1,t));
  const blend=u*u*(3-2*u);
  const pose={};
  for(const key of ['drive','lean','crouch','handX','handY','legAngle','footX','footY']){
    const start=from[key]??0, end=to[key]??0;
    pose[key]=start+(end-start)*blend;
  }
  return pose;
}

function attackPose(fighter) {
  const move=fighter.move;
  if(!move) return null;
  const track=attackTracks[move.animation];
  if(!track) return null;
  const beats=move.signature?.beats??[];
  const last=beats.at(-1)?.at??move.wind;
  const local=move.t-move.wind;
  if(local<0){
    const charge=move.t/move.wind;
    if(charge<.69) return blendPose({},track.prepare,charge/.69);
    return blendPose(track.prepare,track.strike,(charge-.69)/.31);
  }
  if(beats.length>1&&move.t<last){
    const previous=beats.findLast(beat=>beat.at<=move.t);
    const next=beats.find(beat=>beat.at>move.t);
    const cycle=(move.t-previous.at)/(next.at-previous.at);
    // Each hit or shot has its own recoil and return to the contact pose.
    return cycle<.58?blendPose(track.strike,track.follow,cycle/.58):
      blendPose(track.follow,track.strike,(cycle-.58)/.42);
  }
  const since=move.t-last, followFrames=Math.max(3,Math.min(move.live,8));
  return since<=followFrames?blendPose(track.strike,track.follow,since/followFrames):
    blendPose(track.follow,{},(since-followFrames)/Math.max(1,move.rest*.78));
}

function attackOffset(pose,u,v) {
  if(!pose) return [0,0];
  const front=Math.max(0,Math.min(1,(u-.51)/.24));
  const planted=Math.max(0,Math.min(1,(1-v)/.34));
  const hand=front*Math.max(0,1-Math.abs(v-.40)/.245);
  return [pose.drive*planted+pose.handX*hand,
    pose.crouch*Math.sin(Math.PI*v)*planted+pose.handY*hand];
}

function kickJoint(pose,width,height) {
  const hip={x:width*.1,y:-height*.45};
  return {hip,x:hip.x+pose.drive+pose.footX*.36,y:hip.y+pose.crouch+pose.footY*.36,angle:pose.legAngle};
}

function kickToe(pose,width,height) {
  const joint=kickJoint(pose,width,height);
  const x=width*.31-joint.hip.x, y=-height*.025-joint.hip.y;
  return [joint.x+x*Math.cos(joint.angle)-y*Math.sin(joint.angle),
    joint.y+x*Math.sin(joint.angle)+y*Math.cos(joint.angle)];
}

const classicSuperLooks = {
  bryan:{style:'spear',color:'#aeeaff'},
  jonneil:{style:'fists',color:'#ffbc78'},
  ranelle:{style:'rockets',color:'#ffaf66'},
  yokan:{style:'glacier',color:'#8fe7ff'},
  dice:{style:'shadows',color:'#b29aff'},
  roj:{style:'swords',color:'#ffe29e'},
  hope:{style:'nova',color:'#ffd1ff'},
  miguel:{style:'arrowstorm',color:'#d9fca0'},
  bennedic:{style:'beast',color:'#ff927f'},
  fallan:{style:'apollo',color:'#ffcf81'},
  lynne:{style:'cards',color:'#ffd581'},
  clephus:{style:'eclipse',color:'#aa7bff'},
  karl:{style:'claws',color:'#d5f5ff'},
  farrol:{style:'quake',color:'#ffd394'},
  mohammad:{style:'sigil',color:'#b6dcff'},
  denni:{style:'piston',color:'#ffbf79'},
  semmenelin:{style:'inferno',color:'#ff9558'},
  tyrone:{style:'demon',color:'#cf8fff'},
  ivanna:{style:'rings',color:'#46c0e8'},shtrgoi:{style:'rift',color:'#e7868c'},
  precious:{style:'sigil',color:'#b9f5ae'},clark:{style:'rings',color:'#ffa060'},vankov:{style:'grid',color:'#ffbd45'}
};
