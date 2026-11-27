const seasonThreeFighters = [
  {
    id:'honey',name:'HONEY',style:'animist',faction:'Genesis',accent:'#f5bcdf',artHeight:174,speed:3.75,power:1.02,reach:119,
    desc:'Calls on small spirits to ward, distract, and counterattack.',
    projectile:{shape:'spirit',label:'Familiar Wisp',speed:10,color:'#f5bcdf'},
    skills:[{name:'Spirit Ring',wind:16,range:221,effect:'sigil',targeted:true,beats:[{at:16,damage:15},{at:23,damage:15},{at:30,damage:15}]},
      {name:'Wisp Parade',wind:20,effect:'rings',beats:[{at:20,damage:21,shot:'spirit',speed:12},{at:28,damage:24,shot:'spirit',speed:14}]}],
    motivation:'Lovejoy found Honey as a child at Genesis, and years passed for her in what felt like moments. Now a grown animist, she follows her familiars back toward where her first memories began.',
    intro:['My familiar says you have questions.','The spirits want to watch. Okay?','Lovejoy taught me to listen.'],
    win:['You can rest now.','I heard them clearly.','Even little spirits help.','I’ll tell Lovejoy all about it.','The room feels calmer.'],
    loss:['Lost track of my familiar.','Let me gather the pieces.','I still have so much to learn.','It went quiet too fast.','I’ll listen harder.']
  },
  {
    id:'maritess',name:'MARITESS',style:'ice mage',faction:'Sol Sisters',accent:'#a4e1ff',artHeight:194,speed:3.20,power:1.10,reach:129,
    desc:'Uses frost and her crystal staff to hold opponents at a distance.',
    projectile:{shape:'ice',label:'Frost Shard',speed:12,color:'#b8eeff'},
    skills:[{name:'Frost Shrine',wind:19,range:245,effect:'glacier',targeted:true,beats:[{at:19,damage:19},{at:28,damage:26}]},
      {name:'Whiteout',wind:23,effect:'glacier',beats:[{at:23,damage:45,shot:'ice',speed:16}]}],
    motivation:'When the Cult took two Sol Sisters, Maritess stayed behind to guard the sanctuary. She has promised to bring both of them home.',
    intro:['The Sol Sisters stand together.','Where did they take my sisters?','I’ll hold this crossing.'],
    win:['Path’s safe. Follow the frost.','Leave the ice to me.','We move together now.','The sanctuary stays open.','There’s still time.'],
    loss:['The cold caught me too.','Sisters, go on ahead.','I let the ice break.','I have to get back up.','I’m still listening.']
  },
  {
    id:'arianne',name:'ARIANNE',style:'fire mage',faction:'Sol Sisters',accent:'#ff8a2e',artHeight:190,speed:3.45,power:1.16,reach:125,
    desc:'Pushes forward with wide flames and quick pressure.',
    projectile:{shape:'dragonfire',label:'Ember Lance',speed:11,color:'#ff9362'},
    skills:[{name:'Ember March',wind:17,range:246,effect:'flame',targeted:true,beats:[{at:17,damage:15},{at:24,damage:15},{at:31,damage:15}]},
      {name:'Solflare',wind:21,effect:'flame',beats:[{at:21,damage:45,shot:'dragonfire',speed:14}]}],
    motivation:'Arianne volunteers to be the bait, drawing the Cult’s guards into the streets so her sisters can slip in and find the prisoners.',
    intro:['You’ll see me coming.','Keep the way clear.','I’m bringing my sisters home.'],
    win:['Fire’s under control.','The next gate is ours.','Now. Where are my sisters?','I’ll light the way.','Sol still stands.'],
    loss:['I pushed too hard.','Let the flame settle.','I still have to reach them.','Clean counter. Annoying.','The embers aren’t out.']
  },
  {
    id:'kz',name:'KZ',style:'water mage',faction:'Sol Sisters',accent:'#45d6b4',artHeight:188,speed:3.85,power:.98,reach:124,
    desc:'Redirects pressure with swift footwork and waves of water.',
    projectile:{shape:'water',label:'Tide Ribbon',speed:11,color:'#6de5df'},
    skills:[{name:'Turning Tide',wind:17,range:230,effect:'rings',targeted:true,beats:[{at:17,damage:18},{at:26,damage:27}]},
      {name:'Undertow',wind:19,effect:'rings',beats:[{at:19,damage:22,shot:'water',speed:14},{at:26,damage:23,shot:'water',speed:16}]}],
    motivation:'KZ maps Ifrit’s hidden wells to find a way into the Cult’s prison, and a way back out for the sisters inside.',
    intro:['The wells remember every path.','The tide is turning.','We’re getting everyone out.'],
    win:['Follow the water.','The route is open.','Let me help you up.','We have a way through.','My sisters are waiting.'],
    loss:['Lost the current.','The tide will return.','Should’ve moved sooner.','Someone guard the well.','I need a moment.']
  },
  {
    id:'michelle',name:'MICHELLE',style:'rock mage',faction:'Sol Sisters',accent:'#edbe78',artHeight:186,speed:2.87,power:1.31,reach:134,
    desc:'Raises stone and counters at close range with a heavy gauntlet.',
    projectile:{shape:'stone',label:'Basalt Shot',speed:8,color:'#e6b77c',blast:44},
    skills:[{name:'Fault Line',wind:22,range:275,effect:'rift',targeted:true,beats:[{at:22,damage:45}]},
      {name:'Mountain’s Fist',wind:24,effect:'driver',beats:[{at:24,damage:45,shot:'stone',speed:12}]}],
    motivation:'Michelle holds the bridge for the Sol Sisters’ escape. If any bridge falls tonight, she swears it will be the Cult’s.',
    intro:['Feet on the stone.','The sisters will cross.','I heard the prison gates close.'],
    win:['The bridge holds.','Stay behind me.','I can move this rubble.','The ground is ours again.','I’ll hold the door.'],
    loss:['The floor gave way.','My hand won’t close.','Keep the bridge open.','Heavier than expected.','I can still get up.']
  },
  {
    id:'gary',name:'GARY',style:'cyber expert',faction:'Ifrit',accent:'#9ec6ff',artHeight:190,speed:4.0,power:.96,reach:116,
    desc:'Tracks clone signals, fights with rapid strikes, and scrambles transmissions.',
    projectile:{shape:'packet',label:'Signal Burst',speed:15,color:'#a1c8ff'},
    skills:[{name:'Dead Channel',wind:16,range:235,effect:'grid',beats:[{at:16,damage:20},{at:25,damage:25}]},
      {name:'Root Access',wind:18,effect:'grid',beats:[{at:18,damage:21,shot:'packet',speed:18},{at:25,damage:24,shot:'packet',speed:18}]}],
    motivation:'Gary keeps Ifrit’s Genesis relays running. Lately several callers all claim to be Ivan, and he wants to prove they come from different worlds.',
    intro:['Someone patched this relay.','Two signals, same name. Weird.','Don’t break my terminal.'],
    win:['Clean signal.','Trace saved.','Calling Sol now.','Channel closed.','The logs will tell us more.'],
    loss:['Signal dropped.','Terminal needs a reset.','Someone save the log!','Lost the trace.','Need a clearer route.']
  },
  {
    id:'fernan',name:'FERNAN',style:'swordsman',faction:'Ifrit',accent:'#95d4ca',speed:3.35,power:1.22,reach:140,
    desc:'A disciplined duelist who punishes missed attacks with a curved sword.',
    skills:[{name:'Crescent Draw',wind:17,range:202,effect:'whip',beats:[{at:17,damage:21},{at:23,damage:24}]},
      {name:'Last Watch',wind:23,range:237,effect:'driver',beats:[{at:23,damage:45}]}],
    motivation:'Fernan guards the road between Ifrit and the Genesis gate. With the city in danger, he turns his sword toward the Cult’s prison.',
    intro:['This passage is under my watch.','Draw when you’re ready.','Ifrit has my oath.'],
    win:['Passage clear.','I’ll keep watch.','Your blade can rest.','Go while the gate is open.','The line held.'],
    loss:['I opened my guard.','The city still needs a watch.','You read my draw.','I’ll recover my footing.','I sheathe my blade.']
  },
  {
    id:'roj-demon',selectable:false,name:'DEMON ROJ',style:'dark minstrel',faction:'Ifrit',accent:'#ff867f',speed:3.52,power:1.22,reach:139,
    desc:'Roj revived by the Cult in a demonic form, fighting with twin swords and shadow magic. Ifrit’s stage 5 boss.',
    projectile:{shape:'shadow',label:'Ash Refrain',speed:11,color:'#ed708d'},
    skills:[{name:'Black Refrain',wind:18,range:218,effect:'swords',targeted:true,beats:[{at:18,damage:18},{at:26,damage:27}]},
      {name:'Ashen Requiem',wind:22,effect:'rift',beats:[{at:22,damage:45,shot:'shadow',speed:15}]}],
    motivation:'The Cult revived Roj beneath the ash tower with help from Ifrit’s Ivan and sealed away his memories. Now a voice from his old life is trying to reach him.',
    intro:['You heard this song in another world.','The Cult sent me to sing.','Which Roj were you looking for?'],
    win:['That was the first verse.','The mask stays on.','Tell the Cult I’m coming back.','Ifrit remembers what you forgot.','I still know that melody.'],
    loss:['That memory is mine.','I hear the old tune again.','The Cult can wait.','Apple… give me time.','The name still fits.']
  },
  {
    id:'brayan',name:'LISTHER',style:'nephilim minstrel and brawler',faction:'Archangels’ Initiative',accent:'#ffe2a1',speed:3.05,power:1.34,reach:125,
    desc:'The bulky half-angel, half-human leader of the Archangels’ Initiative.',
    skills:[{name:'Archangel’s Measure',wind:21,range:220,effect:'fists',beats:[{at:21,damage:22},{at:28,damage:23}]},
      {name:'Choirbreaker',wind:23,range:260,effect:'rings',magic:true,targeted:true,beats:[{at:23,damage:45}]}],
    motivation:'Listher felt the Choir break all the way from Shiva. The leader of the Archangels’ Initiative comes to Ifrit to see if the gate can still be defended.',
    intro:['Listher. Archangels’ Initiative.','Count it in four.','I came from Shiva when the Choir broke.'],
    win:['That’s the measure.','The Initiative holds this gate.','You fought with heart.','Leave the last watch to me.','Time to retune my lute.'],
    loss:['Lost the count.','Shiva will hear of this.','Say it again. Slower.','I overreached.','The Initiative will still answer.']
  },
  {
    id:'thazar',name:'THAZAR',style:'cult leader',faction:'The Cult',accent:'#c3a1fa',speed:3.05,power:1.15,reach:137,artHeight:232,
    desc:'The Cult’s leader prepares shadow rites and searches for a Genesis vessel.',
    projectile:{shape:'rune',label:'Vessel Mark',speed:11,color:'#c3a1fa'},
    skills:[{name:'Vessel Rite',wind:20,range:275,effect:'sigil',targeted:true,beats:[{at:20,damage:20},{at:28,damage:25}]},
      {name:'Final Offering',wind:23,effect:'rift',beats:[{at:23,damage:45,shot:'rune',speed:14}]}],
    motivation:'Thazar’s Cult has tracked a Genesis spawn to Ifrit. He means to seat the King of Hell inside it before the Couple can take it back.',
    intro:['The vessel has a purpose.','You arrived before the rite. Pity.','The Couple want what we found.'],
    win:['The rite proceeds.','Watch the Couple.','There’s always another vessel.','I’ll remember your price.','The King will hear of this.'],
    loss:['The offering is delayed.','Hold the lower gate.','I’ve survived worse bargains.','Someone snuffed the rite.','The Cult knows how to wait.']
  },
  {
    id:'azazel',name:'AZAZEL',style:'King of Hell',faction:'Hell',accent:'#ff5236',speed:2.95,power:1.20,reach:149,artHeight:236,
    desc:'The resurrected King of Hell, playable and the final boss of Ifrit.',
    projectile:{shape:'dragonfire',label:'Hell Crown',speed:10,color:'#ff855f'},
    skills:[{name:'Hellfire Throne',wind:23,range:301,effect:'flame',targeted:true,beats:[{at:23,damage:19},{at:31,damage:26}]},
      {name:'King’s Inferno',wind:25,effect:'flame',beats:[{at:25,damage:45,shot:'dragonfire',speed:15}]}],
    motivation:'The vessel opens its eyes in Thazar’s sanctuary. Azazel rises to find out whether the people who summoned him can control what they called.',
    intro:['Ifrit remembers its king.','This body will serve.','I know who opened the way.'],
    win:['The vessel holds.','The gate is mine.','Your rite served me well.','I hear Hell calling.','The crown is mine.'],
    loss:['This vessel failed.','I remember your face.','The gate is still open.','You won. Today.','I need no body to cross.']
  }
];

const ifritStoryStages = [
  {opponent:'michelle',arena:'ifrit-gate',title:'The World of Ifrit',paragraphs:[
    'Beyond Ifrit’s Genesis gate lies a chain of sandstone cities and black-glass deserts. Its people know the Cult by the empty houses it leaves behind. At the gate, Michelle of the Sol Sisters tests every stranger who offers to help.',
    'The Cult has taken two Sol Sisters as offerings. Their sisters mean to get them back before Thazar can begin his rite.']},
  {opponent:'kz',arena:'ifrit-causeway',title:'Signals Through Genesis',paragraphs:[
    'KZ traces a route to the Cult prison through Ifrit’s hidden wells. Far away, on the world of Sol, Ivan has been seeding Genesis with copies of himself. The clones scatter across the multiverse, and one of them lands in Ifrit.',
    'This Ivan helps the Cult raise Roj from the dead beneath an ash-covered tower and binds him to Thazar. Now a masked minstrel spreads fear through the streets while the Cult prepares to resurrect Azazel.']},
  {opponent:'arianne',arena:'ifrit-couple-crossing',title:'The Couple',paragraphs:[
    'Berico and Oliquino, the demon cult leaders known as the Couple, march into Ifrit demanding their lost child, and threaten to burn the world down if it stays hidden. Ifrit’s people have no idea what they mean. Even the Cult only has guesses.',
    'A secret informant points Thazar’s general toward another Genesis spawn. The general suspects it is tied to one of the Sol Sisters, but the target slips away.']},
  {opponent:'thazar',arena:'ifrit-sanctuary',title:'An Unwelcome Alliance',paragraphs:[
    'Thazar refuses to bargain with the Couple and has them watched instead. He learns they plan to betray the Cult the moment they find their child. The Sol Sisters, meanwhile, learn the Cult is using Roj’s own memories as chains to bind him.',
    'The Sol Sisters rescue one captive and demand the other. Dark Roj arrives to speak for the Cult. Before the talks can end, the Couple attack both sides.']},
  {opponent:'roj-demon',arena:'ifrit-tower-breach',title:'The Masked Minstrel',paragraphs:[
    'The Sol Sisters and the Cult fight side by side to drive off the Couple. Thazar promises to free the last captive, and both sides limp away. Dark Roj slips off to the tower, where the Cult’s spell locks away his memories of Shiva and the Ciphers.',
    'Back in the city, he orders the Cult to hunt down a Cipher who came through Genesis. He corners Hope and nearly kills him. But when Hope recognizes his voice, the dark minstrel takes off his mask.']},
  {opponent:'maritess',arena:'ifrit-prison',title:'The Name at the Gate',paragraphs:[
    'Hope wakes in a Cult prison. Worlds away, an exhausted Lovejoy is still keeping watch outside Genesis when a small child steps out wearing a name tag that reads HONEY.',
    'Hope tries to escape. Dark Roj catches him and offers him a place in the Cult. Hope refuses. Desperate for help, the Sol Sisters start calling across Ivan’s relays.']},
  {opponent:'gary',arena:'ifrit-archive',title:'The Ciphers Answer',paragraphs:[
    'On Sol, the original Ivan hears back from his clones. Earth’s Ivan tells him about his new friends, the Ciphers. When Sol mentions a prisoner named Hope and a man called Roj, Earth’s Ivan rushes the message to them.',
    'The Ciphers come through carrying Roj’s memory modules. Lovejoy, Fallan, Alberto, and Bennedic stay behind for now. Earth’s Ivan goes on leave, so Aljo takes over the communications post.']},
  {opponent:'fernan',arena:'ifrit-forge',title:'The Dark Refrain',paragraphs:[
    'The Ciphers capture Dark Roj. Every memory module reopens an old wound, and it takes battle after battle to bring him back. At last he turns his back on the Cult, though he keeps the dark minstrel’s form.',
    'The Ciphers never learn that Ifrit’s Ivan is still keeping the Cult alive. He helps Thazar use a Genesis spawn as a vessel, and Azazel returns inside its body.']},
  {opponent:'brayan',arena:'ifrit-bastion',title:'A Choice Before the Throne',paragraphs:[
    'The Ciphers and the Sol Sisters free Hope and heal his wounds. He goes to see Roj, who finally remembers him. Bennedic and the others cross over to join the fight, while Lovejoy, Honey, and Dice stay out of it.',
    'With the Cult rallying around Azazel, the team argues over whether Roj can be trusted. In the middle of it, Listher of the Archangels’ Initiative arrives at the bastion, just as the battle for Ifrit begins.']},
  {opponent:'azazel',arena:'ifrit-altar',title:'The King of Hell',paragraphs:[
    'The Sol Sisters and the Ciphers storm the altar. Inside the vessel, the Genesis spawn is still fighting back while Azazel tries to take it over completely. Hope begs the others to trust Roj long enough to break the rite.',
    'Thazar’s defenses fall. Azazel steps out of the fire and dares anyone to take his throne.']}
];

const ifritStoryOpening = {title:'Ashes of Genesis',paragraphs:[
  'After Enigma fell, Roj gave his life destroying the soul factory’s backup machines. The surviving Ciphers kept his memory modules, hoping someday to save what was left of him. Far across the multiverse, the shockwave from that battle tore open a path into Ifrit.',
  'In that desert world, Thazar’s Cult is preparing to resurrect Azazel, King of Hell, and has kidnapped two Sol Sisters for the ritual. Their sisters set out to rescue them, just as a man named Ivan begins copying himself through Genesis.'
]};

const ifritStoryEnding = {title:'The Last Echo',paragraphs:[
  'The vessel falls and Azazel is beaten, but his spirit escapes through Genesis. The Ciphers leave Ifrit without ever learning that one of the Ivans kept the Cult alive.',
  'Roj and Chastity travel to Shiva. They ask Listher and the Archangels’ Initiative to help them find Azazel before he steals another body.',
  'Back home, Earth’s Ivan meets a man wearing Ivan V’s face. The stranger kills him and vanishes into the relay. In another world, Dice keeps drilling his new form. And when Lovejoy sees Honey again, the child from the gate has already grown into a young woman. They sit down together to play.'
]};

function ifritRelationLine(fighter,opponent,role) {
  if(role!=='intro') return null;
  const rivals={
    'roj-demon:hope':'You knew my voice before you saw my face, Hope.',
    'hope:roj-demon':'I know that voice. Show me your face.',
    'roj-demon:chastity':'The memories are back. The face is still a demon’s.',
    'chastity:roj-demon':'Then remember the promise we made, Roj.',
    'brayan:roj-demon':'If you mean to come back to Shiva, I’ll hear you out.',
    'thazar:azazel':'The vessel is yours, my king. Ifrit will follow.',
    'azazel:thazar':'I heard your call. I made you no promises.',
    'honey:lovejoy':'Remember my name tag? I kept it.',
    'lovejoy:honey':'Honey? You were so little at the gate!'
  };
  return rivals[fighter.id+':'+opponent.id]??
    (fighter.faction==='Sol Sisters'&&opponent.faction==='Sol Sisters'?'One round to test our guard. Then we bring our sisters home.':null);
}

const ifritStageDialogue = [
  {intro:['Open the gate. The Cult took two of your sisters.','Ifrit has been fooled before. Prove you came to help.'],
   victory:['Tell Sol I’m going after both captives.','Then take the causeway. KZ knows the way in.'],
   setback:['At this rate the Cult starts the rite before we arrive.','Get up. The captives still need you.']},
  {intro:['Ivan’s signal came through these wells.','The water carried more than one voice. Listen.'],
   victory:['One of his copies reached the ash tower.','Then let’s find out what it woke up.'],
   setback:['I lost the rhythm of the current.','Rest. I’ll keep listening to the relay.']},
  {intro:['The Couple will tear this city apart looking for their child.','Then lead them away from the homes. Keep the streets clear.'],
   victory:['The people got out. The Couple still want answers.','Thazar has guesses. He also has our sister.'],
   setback:['We’re losing time. The Couple are still coming.','When you can stand, try the sanctuary again.']},
  {intro:['Release the last Sol Sister.','The Couple are about to strike. We can haggle afterward.'],
   victory:['We fought side by side. Keep your promise.','She will be freed. The masked one is already gone.'],
   setback:['So the Cult keeps its prisoner.','The truce holds. I still have terms to meet.']},
  {intro:['Hope knew your voice before he saw your face.','Then he remembers who I used to be. Make him listen.'],
   victory:['Tell the Cult they’ve lost their minstrel.','You won a fight. You haven’t heard the whole song.'],
   setback:['You gave your life to save us at the factory.','I remember that choice. I can still hear the machines.']},
  {intro:['Hope won’t join the Cult. We have to reach him.','I’ll show you the prison route. First, prove your guard holds.'],
   victory:['Keep the prison gate clear. I’m calling for help.','Try Earth’s relay. Ivan said he has friends there.'],
   setback:['There has to be another way into that prison.','There is. Follow the frost along the walls.']},
  {intro:['Did the Ciphers get our message?','Aljo answered. Roj’s memory modules are already on the way.'],
   victory:['Then let’s make sure those memories reach Roj.','I can trace him. The second signal is still moving.'],
   setback:['We lost the channel.','I have a backup. The modules will get through.']},
  {intro:['Roj is starting to hear his old songs again.','Then we’re out of time. The vessel is already at the altar.'],
   victory:['Hold the forge. We’re going for Hope.','I’ll keep the way clear until you get back.'],
   setback:['Someone has to warn the others about the vessel.','I’ll send word. The forge passage is still open.']},
  {intro:['Hope is safe, and he wants us to trust Roj.','I came from Shiva to see which of you can hold this gate.'],
   victory:['We need the Initiative’s help.','You have mine. Now go, before the crown takes hold.'],
   setback:['I still think Hope is right about Roj.','Then get up and fight beside him.']},
  {intro:['Let the spawn go. Your rite is finished.','The vessel opened the gate. I can hear Hell again.'],
   victory:['The vessel’s down. Where did Azazel go?','I crossed Genesis once. You have not closed that door.'],
   setback:['Ifrit still has people willing to fight.','Then I will keep the gate open for them.']}
];

function ifritCampaignLine(level,seat,role,round,finalRound,opponentId,fighterId) {
  const stage=ifritStoryStages[level];
  if(!stage||role==='draw'||(seat===1&&opponentId!==stage.opponent)) return null;
  const scene=ifritStageDialogue[level];
  if(role==='intro'){
    if(round!==1) return null;
    if(seat===0&&fighterId==='hope'){
      const ownWords={
        4:'I knew your voice before I saw your face.',
        5:'I won’t join the Cult. There has to be a way out of this prison.',
        8:'I’m free. I still think we should trust Roj.'
      };
      return ownWords[level]??scene.intro[seat];
    }
    return scene.intro[seat];
  }
  if(!finalRound) return null;
  return (role===(seat===0?'win':'loss')?scene.victory:scene.setback)[seat];
}
