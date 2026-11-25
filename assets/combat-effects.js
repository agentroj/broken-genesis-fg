function superLook(fighter,slot,color) {
  const signature=fighterSuper(fighter,slot);
  const classic=slot===1?classicSuperLooks[fighter.id]:null;
  return {style:classic?.style??signature?.effect??'burst',
    color:fighter.alternate?mirrorAccent:color??classic?.color??fighter.accent};
}

function emitSignature(source,target,look,duration=23,face=source.face) {
  superEffects.push({kind:'signature',fighter:target,source,face,style:look.style,color:look.color,when:tick,duration});
}

function emitSpellRelease(fighter,origin,shape,color,powered) {
  let hand;
  if(origin.artX==null&&fighter.move?.animation==='cast'){
    const {sprite,height}=fighterArtwork(fighter);
    const pose=attackPose(fighter);
    if(sprite){
      const {x,y}=spellHand(fighter,sprite,height,pose);
      const lean=pose?.lean??0;
      hand={x:fighter.x+fighter.face*(x*Math.cos(lean)-y*Math.sin(lean)),y:fighter.y+x*Math.sin(lean)+y*Math.cos(lean)};
    }
  }
  superEffects.push({kind:'release',x:origin.artX??origin.x,y:origin.artY??origin.y,hand,face:fighter.face,shape,color,powered,when:tick,duration:powered?17:11});
}

function energyOrb(radius,color) {
  const light=ctx.createRadialGradient(0,0,0,0,0,radius);
  light.addColorStop(0,'#fff8df');
  light.addColorStop(.28,color);
  light.addColorStop(1,'transparent');
  ctx.fillStyle=light;
  ctx.fillRect(-radius,-radius,2*radius,2*radius);
}

const castingGrips={fallan:[.82,.24],clephus:[.84,.23],mohammad:[.76,.25],asmodeus:[.84,.31],
  dice:[.72,.25],chastity:[.84,.27],robin:[.81,.28],honey:[.69,.32],roj:[.74,.42],
  tyrone:[.72,.41],enigma:[.85,.34],semmenelin:[.93,.47]};

function spellHand(fighter,sprite,height,pose) {
  const [u,v]=castingGrips[fighter.id]??[.79,.39];
  const width=height*sprite.w/sprite.h;
  const [dx,dy]=attackOffset(pose,u,v);
  return {x:(u-.5)*width+dx,y:(v-1)*height+dy};
}

function drawHandCharge(fighter,sprite,height,pose) {
  const move=fighter.move, size=Math.max(.15,move.t/move.wind);
  const powered=move.type==='super';
  const color=powered?superLook(fighter,move.slot).color:move.castColor;
  const shape=move.shot?.shape;
  const {x,y}=spellHand(fighter,sprite,height,pose);
  ctx.save();
  ctx.translate(x,y);
  ctx.globalAlpha=.3+size*.65;
  ctx.strokeStyle=color;
  ctx.rotate(move.t*.12);
  ctx.lineWidth=2.5;
  const radius=(powered?12:6)+size*(powered?18:12);
  if(shape==='rune'||shape==='holy'||powered){
    ctx.strokeRect(-radius,-radius,radius*2,radius*2);
    ctx.rotate(Math.PI/4);
    ctx.strokeRect(-radius*.72,-radius*.72,radius*1.44,radius*1.44);
  } else {
    ctx.beginPath();
    ctx.arc(0,0,radius,0,Math.PI*1.7);
    ctx.stroke();
  }
  energyOrb(radius*1.29,color);
  ctx.restore();
}

function drawStrikeTrace(f,sprite,height,pose) {
  const move=f.move, elapsed=move.t-move.wind;
  const width=height*sprite.w/sprite.h;
  const [dx,dy]=attackOffset(pose,.84,.41);
  const [x,y]=move.kick&&pose?.legAngle?kickToe(pose,width,height):[.34*width+dx,-.59*height+dy];
  const force=move.type.startsWith('h')?1.35:move.type.startsWith('m')?1.05:.78;
  ctx.save();
  ctx.globalAlpha=(1-elapsed/(move.live+1))*.76;
  ctx.strokeStyle=f.alternate?mirrorAccent:'#fff0cf';
  ctx.lineCap='round';
  ctx.lineWidth=3*force;
  ctx.beginPath();
  if(move.kick){
    ctx.moveTo(x-44,y+18*force);
    ctx.quadraticCurveTo(x-13,y+27*force,x+14,y-2);
  } else if(move.animation==='uppercut'){
    ctx.moveTo(x-23,y+49);
    ctx.quadraticCurveTo(x+9,y+25,x+6,y-5);
  } else if(move.animation==='hook'){
    ctx.moveTo(x-45,y+9);
    ctx.quadraticCurveTo(x-3,y+24,x+8,y-3);
  } else {
    ctx.moveTo(x-35,y+5);
    ctx.lineTo(x+11,y);
  }
  ctx.stroke();
  ctx.restore();
}

function drawPoweredShot(shot) {
  ctx.save();
  ctx.globalAlpha=.6;
  ctx.lineWidth=3;
  ctx.beginPath();
  ctx.moveTo(8,-7);ctx.quadraticCurveTo(-23,-13,-60,0);
  ctx.quadraticCurveTo(-23,13,8,7);ctx.stroke();
  ctx.globalAlpha=.83;
  ctx.strokeStyle='#fff6d7';
  ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(5,1);ctx.lineTo(-35,1);ctx.stroke();
  ctx.restore();
}

function drawRelease(effect,progress) {
  const {powered,color,shape}=effect;
  const radius=(powered?24:10)+progress*(powered?42:21);
  const energy=spellProjectiles.has(shape);
  if(effect.hand&&progress<.68){
    ctx.strokeStyle=color;
    ctx.lineWidth=powered?4:2.5;
    ctx.globalAlpha=(1-progress/.68)*.82;
    ctx.beginPath();
    ctx.moveTo(effect.hand.x,effect.hand.y);
    ctx.quadraticCurveTo((effect.hand.x+effect.x)/2+effect.face*14,effect.hand.y+12,effect.x,effect.y);
    ctx.stroke();
  }
  ctx.translate(effect.x,effect.y);
  ctx.scale(effect.face,1);
  ctx.strokeStyle=color;
  ctx.globalAlpha=(1-progress)*.78;
  ctx.lineWidth=powered?4:2;
  ctx.beginPath();
  ctx.ellipse(0,0,radius*.46,radius,.21,0,Math.PI*2);
  ctx.stroke();
  for(let i=-1;i<=1;i++){
    ctx.beginPath();
    ctx.moveTo(radius*.29,i*radius*.39);
    ctx.lineTo(radius*(energy?1.46:2.04),i*radius*.82);
    ctx.stroke();
  }
  energyOrb(radius*.83,color);
}

function paintShockRing(radius,flatness,width=5) {
  ctx.lineWidth=width;
  ctx.beginPath();
  ctx.ellipse(0,0,radius,radius*flatness,0,0,Math.PI*2);
  ctx.stroke();
}

function paintSummonedSwords(progress) {
  for(let i=-2;i<=2;i++){
    ctx.save();
    ctx.translate(22+progress*150-Math.abs(i)*13,i*31);
    ctx.rotate(i*.22*(1-progress));
    ctx.globalAlpha*=1-Math.abs(i)*.09;
    ctx.fillStyle='#c58a43';
    ctx.fillRect(-15,-3,45,6);
    ctx.fillStyle='#fff5c4';
    paintBlade(72+progress*17,8);
    ctx.restore();
  }
}

function drawSuperCharge(effect,progress) {
  const {color,style,fighter}=effect;
  ctx.scale(fighter.face,1);
  ctx.globalAlpha=.32+Math.sin(progress*Math.PI)*.61;
  ctx.translate(0,86);
  paintShockRing(31+progress*91,.29,3);
  paintShockRing(21+progress*59,.29,2);
  ctx.translate(0,-86);
  if(style==='shadows'||style==='shadowWeb'){
    drawShadowField(progress*.58,color,style==='shadowWeb');
    return;
  }
  if(style==='swords'){
    ctx.translate(-22,-14);
    paintSummonedSwords(progress*.2);
    return;
  }
  if(style==='glacier'||style==='sigil'||style==='apollo'||style==='eclipse'||style==='demon'||style==='beast'){
    const points=6;
    for(let i=0;i<points;i++){
      const angle=i*2*Math.PI/points+progress*.42;
      ctx.save();
      ctx.translate(Math.cos(angle)*(40+progress*37),Math.sin(angle)*(50+progress*40));
      ctx.rotate(angle);
      ctx.fillStyle=color;
      if(style==='glacier') paintBlade(15+progress*24,6);
      else paintStar(5+progress*6,progress);
      ctx.restore();
    }
  } else {
    for(let i=-2;i<=2;i++){
      ctx.save();
      ctx.translate(-58-Math.abs(i)*10,i*21);
      ctx.rotate(i*.18);
      ctx.fillRect(0,0,14+progress*41,2+i%2);
      ctx.restore();
    }
  }
}

function drawShadowClone(sprite,x,feet,height,side,alpha,color) {
  ctx.save();
  ctx.translate(x,feet);
  ctx.scale(side,1);
  ctx.globalAlpha*=alpha;
  ctx.filter='brightness(.2) sepia(1) hue-rotate(229deg) saturate(3.1)';
  ctx.shadowColor=color;ctx.shadowBlur=15;
  paintSprite(ctx,sprite,0,0,height);
  ctx.restore();
}

function drawShadowField(progress,color,web=false) {
  const radius=(web?70:63)+progress*(web?101:86);
  ctx.save();
  ctx.translate(0,77);
  ctx.fillStyle='#1a1040c7';
  ctx.strokeStyle=color;
  ctx.beginPath();ctx.ellipse(0,0,radius,radius*.245,0,0,Math.PI*2);ctx.fill();ctx.stroke();
  paintShockRing(radius*.73,.235,2);
  for(let i=0;i<7;i++){
    const start=(i-3)*radius/4;
    ctx.lineWidth=web?2.5:4;
    ctx.beginPath();
    ctx.moveTo(start,0);
    ctx.bezierCurveTo(start*1.3,-18-progress*32,start*.27,-79,start*.81,-111+Math.abs(i-3)*13);
    ctx.stroke();
  }
  ctx.restore();
}

function drawShadowProjectile(shot) {
  ctx.save();
  const phase=shot.age*.24;
  for(let i=0;i<5;i++){
    const a=i*Math.PI*2/5+phase;
    ctx.globalAlpha=.64;
    ctx.strokeStyle=shot.color;
    ctx.lineWidth=3;
    ctx.beginPath();
    ctx.moveTo(10,Math.sin(a)*7);
    ctx.bezierCurveTo(-6,Math.sin(a)*19,-24,Math.cos(a)*25,-45-i*3,Math.sin(a+1.3)*21);
    ctx.stroke();
  }
  ctx.globalAlpha=1;
  ctx.fillStyle='#170a31';
  ctx.beginPath();ctx.ellipse(0,0,15,12,0,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle=shot.color;ctx.lineWidth=2;
  ctx.beginPath();ctx.ellipse(0,0,19,14,-.22,phase,phase+Math.PI*1.55);ctx.stroke();
  ctx.fillStyle='#e5cdff';
  paintStar(7,phase);
  ctx.restore();
}

function drawClassicSignature(style,progress,color,fighter) {
  const spread=24+progress*111;
  if(style==='swords'){
    paintSummonedSwords(progress);
  } else if(style==='spear'||style==='glacier'||style==='claws'){
    ctx.rotate(style==='spear'?.56-progress*1.4:-1.1+progress*2.1);
    for(let i=0;i<(style==='claws'?3:2);i++){
      ctx.save();
      ctx.translate(18+progress*34,(i-1)*12);
      ctx.fillStyle=i===0?'#fff4de':color;
      paintBlade((style==='spear'?151:99)+progress*38,style==='claws'?4:14);
      ctx.restore();
    }
    ctx.strokeStyle=color;
    ctx.lineWidth=4;
    ctx.beginPath();ctx.arc(10,0,spread+47,-1.05,1.05);ctx.stroke();
  } else if(style==='fists'){
    for(let i=0;i<3;i++){
      ctx.save();
      ctx.translate(58+i*27+progress*41,(i%2?1:-1)*(i*10+8));
      ctx.rotate(i*.17-.28);
      paintShockRing(19+progress*16,.56,3);
      ctx.fillStyle='#fff2cf';
      paintStar(9+progress*4,0);
      ctx.restore();
    }
  } else if(style==='shadows'||style==='shadowWeb'){
    const {sprite}=fighterArtwork(fighter);
    const web=style==='shadowWeb';
    drawShadowField(progress,color,web);
    if(!web&&sprite){
      const split=(1-progress)*95+16;
      drawShadowClone(sprite,-split,73,176,1,.7,color);
      drawShadowClone(sprite,split,71,176,-1,.7,color);
      ctx.lineWidth=5;
      ctx.beginPath();ctx.moveTo(-split*.9,-27);ctx.quadraticCurveTo(0,19,split*.9,-41);ctx.stroke();
      ctx.beginPath();ctx.moveTo(split*.75,-50);ctx.quadraticCurveTo(0,-12,-split*.84,17);ctx.stroke();
    } else {
      ctx.save();ctx.rotate(-progress*.22);
      for(let i=0;i<10;i++){
        const angle=i*Math.PI/5;
        ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(Math.cos(angle)*spread,Math.sin(angle)*spread*.77);ctx.stroke();
      }
      paintShockRing(spread,.77,4);
      ctx.restore();
    }
  } else if(style==='apollo'){
    ctx.save();
    ctx.translate(0,-84-progress*20);
    ctx.rotate(.08);
    paintShockRing(45+progress*50,.96,4);
    if(apolloSprite){
      ctx.globalAlpha*=.81;
      paintSprite(ctx,apolloSprite,0,134,255);
    }
    ctx.restore();
    ctx.lineWidth=5;
    for(let i=-2;i<=2;i++){
      ctx.beginPath();ctx.moveTo(i*21,-63);ctx.lineTo(i*31,66+progress*30);ctx.stroke();
    }
  } else if(style==='freeze'){
    ctx.lineWidth=3;
    for(let i=0;i<6;i++){
      ctx.save();
      ctx.translate((i-2.5)*20,74);
      ctx.rotate(-Math.PI/2+(i-2.5)*.14);
      paintBlade(35+progress*52+(i%2)*23,6);
      ctx.restore();
    }
    paintShockRing(spread*.68,.87,4);
  } else if(style==='eclipse'||style==='demon'||style==='beast'){
    ctx.save();
    ctx.fillStyle='#160a2b';
    ctx.beginPath();ctx.ellipse(0,0,spread*.71,spread,.2,0,Math.PI*2);ctx.fill();
    paintShockRing(spread,.83,4);
    for(let i=0;i<7;i++){
      ctx.save();ctx.rotate(i*Math.PI*2/7+progress*.39);
      ctx.fillStyle=color;
      ctx.translate(spread*.67,0);paintBlade(27+progress*23,7);ctx.restore();
    }
    ctx.restore();
  } else if(style==='cards'||style==='arrowstorm'){
    for(let i=-2;i<=2;i++){
      ctx.save();ctx.rotate(i*.24);
      ctx.translate(18+spread*(1+Math.abs(i)*.13),i*12);
      if(style==='cards'){
        ctx.rotate(progress+i);
        ctx.fillRect(-8,-13,16,26);
        ctx.fillStyle='#5b2841';paintStar(5,0);
      } else {
        ctx.fillRect(-44,-1,45,3);
        paintBlade(17,5);
      }
      ctx.restore();
    }
  } else if(style==='quake'||style==='piston'){
    ctx.save();ctx.translate(style==='piston'?37:47,style==='quake'?74:0);
    paintShockRing(spread,style==='quake'?.28:.57,6);
    paintShockRing(spread*.68,style==='quake'?.26:.49,4);
    if(style==='piston'){
      ctx.fillRect(17,-11,spread,22);
      ctx.fillStyle='#ffeac3';ctx.fillRect(18+spread,-22,26,44);
    } else {
      for(let i=-2;i<=2;i++){
        ctx.save();ctx.translate(i*30,0);ctx.rotate(-Math.PI*.5+i*.25);
        paintBlade(15+spread*.37,7);ctx.restore();
      }
    }
    ctx.restore();
  } else if(style==='rockets'||style==='nova'||style==='inferno'){
    paintShockRing(spread,.8,5);
    for(let i=0;i<8;i++){
      ctx.save();ctx.rotate(i*Math.PI/4+progress*.32);
      ctx.translate(spread*.78,0);
      if(style==='nova') paintStar(17*(1-progress),progress);
      else paintBlade(29*(1-progress)+9,5);
      ctx.restore();
    }
    energyOrb(17+spread*.41,color);
  } else {
    drawSuperPattern(style,progress);
  }
}

function drawSuperEffect(effect) {
  const progress=(tick-effect.when)/effect.duration;
  const {fighter,kind,color}=effect;
  ctx.save();
  if(kind==='release'){
    drawRelease(effect,progress);
    ctx.restore();
    return;
  }
  ctx.translate(fighter.x,fighter.y-91);
  ctx.strokeStyle=ctx.fillStyle=color;
  ctx.shadowColor=color;
  ctx.shadowBlur=reducedMotion.matches?0:11;
  ctx.globalAlpha=1-progress;
  if(kind==='signature'){
    ctx.scale(effect.face,1);
    drawClassicSignature(effect.style,progress,color,effect.source??fighter);
  } else if(kind==='cast'){
    drawSuperCharge(effect,progress);
  } else {
    const blocked=kind==='block', radius=20+progress*(blocked?53:104);
    paintShockRing(radius,1,blocked?5:7);
    for(let i=0;i<10;i++){
      const angle=i*Math.PI/5, x=Math.cos(angle), y=Math.sin(angle);
      ctx.beginPath();ctx.moveTo(x*radius*.73,y*radius*.73);ctx.lineTo(x*radius*1.18,y*radius*1.18);ctx.stroke();
    }
    if(blocked){
      ctx.fillStyle='#e1f7ff';ctx.textAlign='center';ctx.font='800 19px system-ui';
      ctx.fillText('SUPER BLOCKED',0,-105-progress*14);
    }
  }
  ctx.restore();
}
