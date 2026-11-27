// Round countdown (3, 2, 1, FIGHT!) and a spoken announcer using the browser's speech engine.

const countdownSeconds = 3;
const fightBannerMs = 750;
let fightBannerAt = -Infinity;
let announcerVoice = null;

function pickAnnouncerVoice() {
  const voices=globalThis.speechSynthesis?.getVoices?.()??[];
  const english=voices.filter(voice=>/^en[-_]/i.test(voice.lang));
  // Prefer deep, clear voices that suit an arena announcer.
  const preferred=['Daniel','Google UK English Male','Alex','Fred','Aaron','Arthur','Microsoft Guy','Microsoft David','Rishi'];
  announcerVoice=preferred.map(name=>english.find(voice=>voice.name.includes(name))).find(Boolean)??english[0]??null;
}
if(globalThis.speechSynthesis){
  pickAnnouncerVoice();
  speechSynthesis.addEventListener?.('voiceschanged',pickAnnouncerVoice);
}

function announce(text,{rate=.95,pitch=.55,interrupt=true}={}) {
  const synth=globalThis.speechSynthesis;
  if(!synth||typeof SpeechSynthesisUtterance!=='function'||prefs.effects===0) return;
  if(interrupt) synth.cancel();
  const line=new SpeechSynthesisUtterance(text);
  if(announcerVoice) line.voice=announcerVoice;
  line.lang=announcerVoice?.lang??'en-US';
  line.rate=rate;
  line.pitch=pitch;
  line.volume=Math.min(1,.35+prefs.effects/100);
  synth.speak(line);
}

// Hold the fight for three seconds, counting down, then start the round.
function startCountdown(onDone) {
  let spoken=-1;
  interlude={duration:countdownSeconds*1000,elapsed:0,countdown:true,
    onTick(elapsed){
      const number=countdownSeconds-Math.floor(elapsed/1000);
      if(number!==spoken&&number>0){
        spoken=number;
        announce(['One','Two','Three'][number-1],{rate:1.05});
      }
    },
    onDone(){
      fightBannerAt=battleVisualTime;
      announce('Fight!',{rate:1.1,pitch:.7});
      sfx('impact');
      shake=Math.max(shake,4);
      onDone();
    }};
}

function drawBannerText(text,scale,alpha,fill,glow,size=150) {
  ctx.save();
  ctx.globalAlpha=alpha;
  ctx.translate(480,250);
  ctx.scale(scale,scale);
  ctx.font='900 '+size+'px "Cinzel Decorative", Georgia, serif';
  ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.lineJoin='round';
  ctx.shadowColor=glow;ctx.shadowBlur=28;
  ctx.lineWidth=12;ctx.strokeStyle='#120a08';ctx.strokeText(text,0,0);
  ctx.shadowBlur=0;
  const gradient=ctx.createLinearGradient(0,-size*.5,0,size*.5);
  fill.forEach((color,i)=>gradient.addColorStop(i/(fill.length-1),color));
  ctx.fillStyle=gradient;ctx.fillText(text,0,0);
  ctx.lineWidth=2;ctx.strokeStyle='#fff6d855';ctx.strokeText(text,0,0);
  ctx.restore();
}

function drawCountdown() {
  if(interlude?.countdown){
    const elapsed=interlude.elapsed;
    const number=Math.max(1,countdownSeconds-Math.floor(elapsed/1000));
    const phase=(elapsed%1000)/1000;
    const motion=!reducedMotion.matches;
    const scale=motion?1+Math.max(0,.55-phase*2.2):1;
    const alpha=phase>.8?1-(phase-.8)*5:1;
    ctx.save();
    ctx.fillStyle='#05040a55';ctx.fillRect(0,0,960,540);
    ctx.restore();
    if(match){
      ctx.save();
      ctx.font='700 26px Rajdhani, system-ui, sans-serif';
      ctx.textAlign='center';ctx.fillStyle='#ffe4a1';ctx.shadowColor='#000';ctx.shadowBlur=8;
      ctx.fillText(match.round===match.total&&match.total>1?'FINAL ROUND':'ROUND '+match.round,480,138);
      ctx.restore();
    }
    drawBannerText(String(number),scale,Math.max(0,alpha),['#fff4c9','#ffcf5c','#d9792a'],'#ff9b3d');
    return;
  }
  const since=battleVisualTime-fightBannerAt;
  if(since>=0&&since<fightBannerMs){
    const t=since/fightBannerMs;
    const scale=reducedMotion.matches?1:.8+Math.min(1,t*5)*.3;
    drawBannerText('FIGHT!',scale,t>.7?1-(t-.7)/.3:1,['#ffffff','#ffb347','#e2361b'],'#ff4a1c',132);
  }
}
