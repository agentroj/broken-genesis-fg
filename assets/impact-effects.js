// Physical hit feedback: impact flashes, streak sparks, shock rings, embers, dust,
// projectile glow trails, hit-stop and camera shake. Particles live in the global `sparks`.

let hitStop = 0;
const shakeState = {x:0, y:0, seed:0};

function mixColor(hex,toward,amount) {
  const value=parseInt(hex.slice(1,7),16), other=parseInt(toward.slice(1,7),16);
  const channel=shift=>Math.round(((value>>shift)&255)*(1-amount)+((other>>shift)&255)*amount);
  return 'rgb('+channel(16)+','+channel(8)+','+channel(0)+')';
}

// One hit. dir is the push direction (+1 right, -1 left); power runs 0..1.
function spawnImpact(x,y,color,{dir=1,power=.5,blocked=false,special=false}={}) {
  const hot=blocked?'#e9f7ff':'#fff6df';
  sparks.push({kind:'flash',x,y,color:blocked?'#9fdcff':color,size:34+power*50+(special?40:0),life:special?9:6,max:special?9:6});
  sparks.push({kind:'ring',x,y,color:blocked?'#bfe9ff':color,radius:8,grow:4+power*5+(special?4:0),
    width:blocked?3:2+power*3,flat:blocked?.95:.62,life:special?16:11,max:special?16:11});
  if(special) sparks.push({kind:'ring',x,y,color:'#ffffff',radius:4,grow:9,width:2,flat:.35,life:14,max:14});
  const count=Math.round((blocked?8:10)+power*14+(special?16:0));
  for(let i=0;i<count;i++){
    // Sparks fan out away from the attacker; a few spray backwards like real debris.
    const back=Math.random()<.18;
    const angle=(back?Math.PI:0)+(Math.random()-.5)*(blocked?1.9:1.35)-.35;
    const speed=(5+Math.random()*9)*(.7+power*.7)*(special?1.25:1);
    sparks.push({kind:'streak',x,y,vx:Math.cos(angle)*speed*dir,vy:Math.sin(angle)*speed-1.5,
      color:Math.random()<.45?hot:color,width:2.2+Math.random()*2.2,drag:.9,gravity:.34,
      life:12+Math.random()*10|0,max:22});
  }
  if(!blocked) for(let i=0;i<Math.round(3+power*6+(special?8:0));i++){
    sparks.push({kind:'ember',x:x+(Math.random()-.5)*20,y:y+(Math.random()-.5)*20,
      vx:dir*(1+Math.random()*3)+(Math.random()-.5)*2,vy:-1-Math.random()*3,color,
      size:2.5+Math.random()*3.5,drag:.96,gravity:-.03,life:26+Math.random()*22|0,max:48});
  }
  hitStop=Math.max(hitStop,blocked?2:special?7:power>.6?5:3);
}

// Dust kicked up from the floor: slides, landings and knockdowns.
function spawnDust(x,y,dir=0,amount=6) {
  for(let i=0;i<amount;i++){
    sparks.push({kind:'dust',x:x+(Math.random()-.5)*36,y:y-2-Math.random()*6,
      vx:dir*(1+Math.random()*2.4)+(Math.random()-.5)*2.2,vy:-.4-Math.random()*1.2,
      size:7+Math.random()*9,grow:.55+Math.random()*.5,drag:.93,gravity:.01,
      color:'#c9bba2',life:28+Math.random()*18|0,max:46});
  }
}

// A soft glowing wake behind each projectile.
function spawnShotTrail(shot) {
  if(!shot.color||reducedMotion.matches) return;
  sparks.push({kind:'ember',x:shot.x-(shot.vx||0)*.6+(Math.random()-.5)*6,y:shot.y+(Math.random()-.5)*8,
    vx:-(shot.vx||0)*.08+(Math.random()-.5)*.8,vy:(Math.random()-.5)*.8,color:shot.color,
    size:2+Math.random()*3,drag:.92,gravity:0,life:14+Math.random()*8|0,max:22});
}

function updateParticles() {
  sparks=sparks.filter(p=>{
    if(p.kind==='ring'){p.radius+=p.grow;p.grow*=.86;return --p.life>0;}
    if(p.kind==='flash') return --p.life>0;
    p.px=p.x;p.py=p.y;
    p.vx*=p.drag??1;p.vy=p.vy*(p.drag??1)+(p.gravity??.32);
    p.x+=p.vx;p.y+=p.vy;
    if(p.kind==='dust') p.size+=p.grow;
    if(p.kind==='streak'&&p.y>floor){p.y=floor;p.vy*=-.35;p.vx*=.6;}
    if(sparks.length>520&&p.kind==='ember') p.life-=2;
    return --p.life>0;
  });
}

function drawParticles() {
  ctx.save();
  for(const p of sparks){
    const fade=Math.max(0,p.life/p.max);
    if(p.kind==='dust'){
      ctx.globalCompositeOperation='source-over';
      ctx.globalAlpha=.28*fade;
      const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size);
      g.addColorStop(0,p.color);g.addColorStop(1,'#c9bba200');
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill();
      continue;
    }
    ctx.globalCompositeOperation='lighter';
    if(p.kind==='flash'){
      const size=p.size*(1.25-fade*.25);
      const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,size);
      g.addColorStop(0,'rgba(255,255,255,'+(.95*fade)+')');
      g.addColorStop(.25,mixColor(p.color,'#ffffff',.35).replace('rgb','rgba').replace(')',','+(.7*fade)+')'));
      g.addColorStop(1,'rgba(0,0,0,0)');
      ctx.globalAlpha=1;ctx.fillStyle=g;
      ctx.beginPath();ctx.arc(p.x,p.y,size,0,Math.PI*2);ctx.fill();
    } else if(p.kind==='ring'){
      ctx.globalAlpha=fade*.6;ctx.strokeStyle=p.color;ctx.lineWidth=(p.width*2.4)*fade+1;
      ctx.beginPath();ctx.ellipse(p.x,p.y,p.radius,p.radius*p.flat,0,0,Math.PI*2);ctx.stroke();
      ctx.globalAlpha=fade;ctx.strokeStyle='#ffffff';ctx.lineWidth=p.width*.7*fade+.5;ctx.stroke();
    } else if(p.kind==='streak'){
      // Motion-blurred spark: a soft colored glow under a white-hot core.
      const tailX=p.x-p.vx*2.2, tailY=p.y-p.vy*2.2;
      ctx.lineCap='round';
      ctx.globalAlpha=fade*.45;ctx.strokeStyle=p.color;ctx.lineWidth=p.width*3;
      ctx.beginPath();ctx.moveTo(tailX,tailY);ctx.lineTo(p.x,p.y);ctx.stroke();
      ctx.globalAlpha=fade;ctx.strokeStyle='#fffaf0';ctx.lineWidth=p.width*.8;
      ctx.beginPath();ctx.moveTo(p.x-p.vx*1.4,p.y-p.vy*1.4);ctx.lineTo(p.x,p.y);ctx.stroke();
    } else {
      ctx.globalAlpha=fade*.9;
      const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size*2.2);
      g.addColorStop(0,'#fffaf0');g.addColorStop(.3,p.color);g.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,p.size*2.2,0,Math.PI*2);ctx.fill();
    }
  }
  ctx.restore();
}

// Camera shake that moves on both axes and settles smoothly.
function cameraShake(strength) {
  if(!strength||reducedMotion.matches) return {x:0,y:0};
  shakeState.seed+=1.7;
  const s=shakeState.seed;
  return {x:(Math.sin(s*2.1)+Math.sin(s*5.3)*.5)*strength*.7,y:(Math.cos(s*1.7)+Math.sin(s*4.1)*.5)*strength*.45};
}

// A brief white-hot screen flash when a super connects.
let screenFlash = 0;
function drawScreenFlash() {
  if(screenFlash<=0) return;
  ctx.save();
  ctx.globalCompositeOperation='lighter';
  ctx.globalAlpha=Math.min(.55,screenFlash*.09);
  ctx.fillStyle='#fff3dc';ctx.fillRect(0,0,960,540);
  ctx.restore();
  screenFlash-=1;
}
