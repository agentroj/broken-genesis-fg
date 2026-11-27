// Keep look-alike fighters apart and portraits in proportion without editing the art files.

// Recolor one fighter of each look-alike pair at load time. Only saturated pixels inside the
// hue band change, so skin, hair highlights and metal trim keep their original colors.
// Bands wrap around 360 (from > to means the band crosses red).
const fighterTints = {
  // Fallan's violet robes and flame turn royal blue; Enigma keeps the violet.
  fallan:{forms:['fallan'],from:238,to:322,minSaturation:.12,shift:-42},
  // Bryan's crimson coat lining and shirt turn steel blue; Roj keeps the red.
  bryan:{forms:['bryan'],from:332,to:14,minSaturation:.32,maxLightness:.62,hue:206},
  // Vankov's crimson coat lines turn amber; Tyrone keeps the crimson.
  vankov:{forms:['vankov','vankov-mega'],from:330,to:16,minSaturation:.34,shift:30}
};

function inHueBand(hue,from,to) {
  return from<=to?hue>=from&&hue<=to:hue>=from||hue<=to;
}

function tintSprite(sprite,tint) {
  if(!sprite||sprite.tinted) return;
  const pen=sprite.image.getContext('2d',{willReadFrequently:true});
  const frame=pen.getImageData(sprite.x,sprite.y,sprite.w,sprite.h), pixels=frame.data;
  for(let i=0;i<pixels.length;i+=4){
    if(pixels[i+3]<8) continue;
    const r=pixels[i]/255, g=pixels[i+1]/255, b=pixels[i+2]/255;
    const max=Math.max(r,g,b), min=Math.min(r,g,b), delta=max-min;
    if(!delta) continue;
    const lightness=(max+min)/2;
    const saturation=delta/(1-Math.abs(2*lightness-1));
    if(saturation<tint.minSaturation||lightness>(tint.maxLightness??1)) continue;
    let hue=max===r?((g-b)/delta)%6:max===g?(b-r)/delta+2:(r-g)/delta+4;
    hue=(hue*60+360)%360;
    if(!inHueBand(hue,tint.from,tint.to)) continue;
    hue=((tint.hue??hue+tint.shift)%360+360)%360;
    const chroma=(1-Math.abs(2*lightness-1))*saturation;
    const x=chroma*(1-Math.abs((hue/60)%2-1)), m=lightness-chroma/2;
    const [nr,ng,nb]=hue<60?[chroma,x,0]:hue<120?[x,chroma,0]:hue<180?[0,chroma,x]:
      hue<240?[0,x,chroma]:hue<300?[x,0,chroma]:[chroma,0,x];
    pixels[i]=Math.round((nr+m)*255);
    pixels[i+1]=Math.round((ng+m)*255);
    pixels[i+2]=Math.round((nb+m)*255);
  }
  pen.putImageData(frame,sprite.x,sprite.y);
  sprite.tinted=true;
}

// Run once after the roster, action and punch art have loaded and before mirror palettes are built.
function applyFighterTints(rosterSprites) {
  for(const [id,tint] of Object.entries(fighterTints)){
    const index=roster.findIndex(entry=>entry.id===id);
    if(index>=0) tintSprite(rosterSprites[index],tint);
    for(const [key,sprite] of actionFrames){
      if(key.split('/').some(part=>tint.forms.includes(part))) tintSprite(sprite,tint);
    }
    for(const [key,sprite] of punchFrames){
      if(tint.forms.some(form=>key===form||key.startsWith(form+'-')&&illustratedPunchSets.has(form))) tintSprite(sprite,tint);
    }
  }
}

// Portraits fit their frame, so scale them by the same artHeight ratio the battle uses.
// Fighters drawn taller than the default (bosses, Lynne, Ivanna) keep filling the frame.
function portraitScale(id) {
  const entry=roster.find(fighter=>fighter.id===id);
  return Math.min(1,(entry?.artHeight??206)/206);
}
