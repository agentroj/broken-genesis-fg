// Slot 0 is the base outfit. Earlier fighters label the alternate slots by season.
const costumeDefinitions = {
  lour:[null,'Hunters HQ Uniform','Casual Outfit'],
  bryan:[null,'Hunters HQ Uniform','Casual Uniform'],
  jonneil:[null,'Hunters HQ Uniform','Casual Uniform'],
  ranelle:[null,'Hunters HQ Uniform','Masked Vigilante'],
  yokan:[null,'Hunters HQ Uniform','White Shirt and Trousers'],
  dice:[null,'Hunters HQ Uniform','Casual Outfit'],
  roj:['Blue Vest and Camouflage','White Minstrel','Demon Roj'],
  hope:[null,'Hunters HQ Uniform','Prisoner'],
  miguel:[null,'Hunters HQ Uniform','Casual Outfit'],
  bennedic:[null,'Hunters HQ Uniform','Warrior'],
  fallan:[null,'Hunters HQ Uniform','Prime Sage'],
  lynne:[null,'Hunters HQ Uniform','Casual Outfit'],
  clephus:[null,'Sigma Uniform','Cult-Controlled Sigma Ghost'],
  karl:[null,'Sigma Uniform','Hunters HQ Uniform'],
  farrol:[null,'Sigma Uniform','Sigma Ghost'],
  mohammad:[null,'Sigma Uniform','Sigma Ghost'],
  denni:[null,'Sigma Uniform','Sigma Ghost'],
  chastity:[null,'Hunters HQ Uniform','Archangel Form'],
  alberto:[null,'Masked Vigilante','Hunters HQ Uniform'],
  aljo:['Field Commander','Hunters HQ Uniform','Casual Outfit'],
  robin:[null,'Hunters HQ Uniform','Prime Sage'],
  carlson:[null,'Resistance Soldier','Casual Outfit'],
  fred:[null,'Resistance Uniform','Casual Workshop Gear'],
  ivanov:[null,'Crimson','White'],
  lovejoy:[null,'Resistance Uniform','Casual Outfit'],
  asmodeus:[null,'Prince of Hell','Casual Outfit'],
  gensys:[null,'White Chassis','Rusty Metal Chassis'],
  enigma:[null,'White Rift','Red Rift'],
  pandemic:[null,'Hunters HQ · Human Form','Full Symbiotic Form'],
  honey:[null,'Casual Outfit','Sporty Outfit'],
  maritess:[null,'Casual Outfit','Sol Sisters Uniform'],
  arianne:[null,'Casual Outfit','Sol Sisters Uniform'],
  kz:[null,'Casual Outfit','Sol Sisters Uniform'],
  michelle:[null,'Casual Outfit','Sol Sisters Uniform'],
  gary:[null,'Casual Outfit','IT Wizard'],
  fernan:[null,'Casual Outfit','Shirtless'],
  brayan:[null,'Archangel Form','Casual Outfit'],
  thazar:[null,'Masked Cult Leader','Casual Outfit'],
  azazel:[null,'Blue Skin','White Skin'],
  tyrone:[null,'Casual Outfit','King of Genesis'],
  shtrgoi:[null,'Casual','Bloody'],
  ivanna:[null,'White Hunters HQ Uniform','Casual'],
  vankov:[null,'King of Robots','Casual'],
  precious:[null,'Beach','Casual'],
  clark:[null,'White Hunters HQ Uniform','Hero'],
  juster:['Red Clown','Evil Clown','Casual'],
  jester:['Blue Clown','Angel Clown','Casual'],
  berico:[null,'Casual','Possessed'],
  oliquino:[null,'Casual','Possessed']
};


const costumeFrames=new Map();
const costumeLoads=new Map();
const loadedCostumeSheets=new Map();
const costumeSheetsByOutfit=new Map();
for(const sheet of costumeSheets){
  for(const [key] of sheet[1]){
    const outfit=key.slice(0,key.lastIndexOf('/'));
    if(!costumeSheetsByOutfit.has(outfit)) costumeSheetsByOutfit.set(outfit,new Set());
    costumeSheetsByOutfit.get(outfit).add(sheet);
  }
}


function costumeOptions(id) {
  const names=costumeDefinitions[id]??[null];
  return names.map((name,slot)=>({name:name??'Original',slot}));
}
function differentCostume(id,preferred,blocked) {
  const count=costumeDefinitions[id]?.length??1;
  const start=preferred<count?preferred:0;
  if(!blocked.has(start)) return start;
  for(let offset=1;offset<count;offset++){
    const slot=(start+offset)%count;
    if(!blocked.has(slot)) return slot;
  }
  return start;
}

function costumeArtForm(fighter,form) {
  return fighter.id==='roj'&&fighter.costume===2&&form==='roj'?'roj-demon':form;
}
function outfitFrame(id,slot,pose) {
  return costumeFrames.get(id+'/'+slot+'/'+pose);
}
function fighterOutfitFrame(fighter,pose,form=battleForm(fighter)) {
  return form===fighter.id?outfitFrame(fighter.id,fighter.costume??0,pose):null;
}
function ensureOutfitArt(id,slot) {
  const sheets=costumeSheetsByOutfit.get(id+'/'+slot);
  if(!sheets) return null;
  const pending=[...sheets].map(prepareOutfitSheet).filter(Boolean);
  return pending.length?Promise.all(pending):null;
}
function prepareOutfitSheet([file,frames]) {
  if(loadedCostumeSheets.has(file)){
    loadedCostumeSheets.delete(file);
    loadedCostumeSheets.set(file,frames);
    return null;
  }
  if(!costumeLoads.has(file)){
    const pending=loadImage('assets/costumes/'+file).then(image=>{
      for(const [frame,x,y,w,h,groundOffset,groundLift=0,poseScale] of frames){
        costumeFrames.set(frame,{image,x,y,w,h,groundOffset,groundLift,poseScale});
      }
      loadedCostumeSheets.set(file,frames);
      if(loadedCostumeSheets.size>12){
        const [oldFile,oldFrames]=loadedCostumeSheets.entries().next().value;
        loadedCostumeSheets.delete(oldFile);
        for(const [oldKey] of oldFrames) costumeFrames.delete(oldKey);
      }
    }).finally(()=>costumeLoads.delete(file));
    costumeLoads.set(file,pending);
  }
  return costumeLoads.get(file);
}

function drawnCostumeAction(fighter) {
  const move=fighter.move;
  if(!fighterOutfitFrame(fighter,'idle')) return null;
  if(move.kick){
    const specific=fighterOutfitFrame(fighter,move.type);
    const sprite=specific??(move.type==='lk'?null:fighterOutfitFrame(fighter,'kick'));
    if(!sprite) return null;
    if(move.t>=move.wind-2&&move.t<move.wind+move.live+2) return {phase:'kick',sprite,scale:sprite.poseScale??.92};
    const guard=fighterOutfitFrame(fighter,'guard');
    return {phase:'costume-ready',sprite:guard,scale:guard?.poseScale??.88};
  }
  if(move.type==='super'){
    const sprite=fighterOutfitFrame(fighter,'super');
    if(sprite&&move.t>=Math.floor(move.wind*.38)&&move.t<move.wind+move.live+6){
      return {phase:'super',sprite,scale:sprite.poseScale??1};
    }
  }
  if(move.shot||move.signature?.beats.some(beat=>beat.shot)){
    const release=releaseArtwork(fighter);
    if(release&&move.t>=Math.floor(move.wind*.4)&&move.t<move.wind+move.live+7){
      return {...release,phase:'release',scale:release.sprite.poseScale??.95};
    }
  }
  const previousBeat=move.signature?.beats.findLast(beat=>beat.at<=move.t)?.at;
  const impact=previousBeat??move.wind;
  if(move.t>=impact-1&&move.t<impact+(move.signature?6:move.live+3)){
    const pose=move.animation==='cast'?'cast':move.type==='lp'?'low':move.type==='hp'?'heavy':'strike';
    const sprite=fighterOutfitFrame(fighter,pose)??fighterOutfitFrame(fighter,'strike');
    return {phase:'costume-strike',sprite,scale:sprite?.poseScale??.92};
  }
  const ready=move.t>=Math.floor(move.wind*.48)&&move.t<move.wind;
  const guard=ready?fighterOutfitFrame(fighter,'guard'):null;
  return {phase:'costume-ready',sprite:guard,scale:guard?.poseScale??.87};
}
