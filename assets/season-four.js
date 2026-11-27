const seasonFourFighters = [
  {
    id:'ivanna',name:'IVANNA',style:'phase duelist',faction:'The Ivans',accent:'#46c0e8',artHeight:214,speed:3.65,power:1.03,reach:126,
    desc:'Ivan II of Shiva. She phases between positions and sends twin halo pulses down the lane.',
    projectile:{shape:'halo',label:'Phase Needle',speed:14,color:'#46c0e8'},
    skills:[
      {name:'Shiva Override',wind:17,range:235,effect:'grid',targeted:true,beats:[{at:17,damage:20},{at:25,damage:25}]},
      {name:'Twin Phase',wind:19,effect:'rings',beats:[{at:19,damage:21,shot:'halo',speed:14},{at:28,damage:24,shot:'halo',speed:16}]}
    ],
    intro:['Ivanna. Shiva calls me Ivan II.','If I hesitate, pull the link.','I sent the warning. Now I fight.'],
    win:['Shiva still has a voice.','My thoughts are mine again.','Keep the channel clear.','Another signal hides under his.','My brothers deserve a choice too.'],
    loss:['He’s still on the line.','Don’t let him speak for me.','Check the relay logs.','Can’t hold both channels.','Your opening. Take it.']
  },
  {
    id:'shtrgoi',name:'SHTRGOI',style:'clan morpher',faction:'Shtrigoi',accent:'#e7868c',speed:3.09,power:1.27,reach:140,
    desc:'The rival who guards the secret of Bennedic’s lineage. Claw strikes set up crimson shadow attacks.',
    projectile:{shape:'shadow',label:'Blood Echo',speed:10,color:'#e97889'},
    skills:[
      {name:'Bloodline',wind:19,range:243,effect:'rift',targeted:true,beats:[{at:19,damage:19},{at:27,damage:26}]},
      {name:'First Hunt',wind:18,range:216,effect:'swords',beats:[{at:18,damage:12},{at:24,damage:15},{at:31,damage:18}]}
    ],
    intro:['You came looking for the Shtrigoi.','Your nightmares belong to our clan.','Show me what you do with that blood.'],
    win:['Blood remembers what you forget.','Power needs a purpose.','You still have a choice.','Come back when you know your scent.','One hunt never answers everything.'],
    loss:['You carry the strongest strain.','I see the alpha now.','Let the old hunt end.','Our blood answers to you.','Go. The hunter crosses again.']
  },
  {
    id:'vankov',name:'VANKOV',style:'machine architect',faction:'The Ivan Array',accent:'#ffbd45',speed:3.15,power:1.16,reach:136,
    desc:'Father of all Ivans. He turns their link against them and fights at range with his relay arm.',
    projectile:{shape:'packet',label:'Command Pulse',speed:13,color:'#ff8e75'},
    skills:[
      {name:'Father’s Call',wind:21,range:272,effect:'grid',targeted:true,beats:[{at:21,damage:19},{at:28,damage:26}]},
      {name:'Sync Lock',wind:23,effect:'driver',beats:[{at:23,damage:45,shot:'laser',speed:17}]}
    ],
    intro:['I wrote the first voice you heard.','Every Ivan answers my call.','The Array is waiting.'],
    win:['The Array finds its rhythm.','I hear all seven.','Return to the core.','Zig knows my voice.','The others will fall in line.'],
    loss:['The Array is silent.','One of them broke the link.','A silent channel. Hm.','The current ran both ways.','My children… refuse me.']
  },
  {
    id:'precious',name:'PRECIOUS',style:'wind mage',faction:'Sol Sisters',accent:'#b9f5ae',speed:3.88,power:.97,reach:123,
    desc:'The Sol Sisters’ newest recruit. She uses wind to control distance and open routes for survivors.',
    projectile:{shape:'wave',label:'Crosswind Blade',speed:14,color:'#b9f5ae'},
    skills:[
      {name:'Eye of the Gale',wind:16,range:246,effect:'sigil',magic:true,targeted:true,beats:[{at:16,damage:15},{at:22,damage:15},{at:29,damage:15}]},
      {name:'Skyward Gust',wind:20,effect:'rings',magic:true,beats:[{at:20,damage:22,shot:'wave',speed:13},{at:28,damage:23,shot:'wave',speed:17}]}
    ],
    intro:['Precious. Sol Sisters’ newest.','People are still on the far side.','If the relay drops, follow the wind.'],
    win:['Air’s clear. Let them through.','The sisters will want this route.','Room for one more on our side.','The wind turned our way.','I’ll hold the door till all cross.'],
    loss:['Lost the wind for a moment.','Guide the others past me.','The sisters taught me to get up.','Try the draft under the door.','One breath. Then the next crossing.']
  },
  {
    id:'clark',name:'CLARK',style:'orb tactician',faction:'New Hunters’ Society',accent:'#ffa060',speed:3.35,power:1.13,reach:128,
    desc:'Known as the Orb. He moves with his field orb and marks openings for the New Hunters’ Society.',
    projectile:{shape:'nebula',label:'Orb Mark',speed:11,color:'#ffa060'},
    skills:[
      {name:'Orbital Lock',wind:18,range:250,effect:'rings',targeted:true,beats:[{at:18,damage:20},{at:27,damage:25}]},
      {name:'Orb Barrage',wind:22,effect:'driver',beats:[{at:22,damage:45,shot:'nebula',speed:14}]}
    ],
    intro:['Clark. New Hunters’ Society. The Orb.','Aljo marked this crossing.','Stay behind the orb if the lights die.'],
    win:['Orb says the route is clear.','Aljo can bring the teams through.','The Society looks after its own.','Marker’s still transmitting.','Send the next patrol.'],
    loss:['Orb needs to recharge.','Mark where the relay went down.','Tell Aljo I held as long as I could.','Other patrol still has a way in.','Take my marker. I’ll catch up.']
  }
];

const vankovMegaSkills = [
  {name:'Seven Cores',wind:26,range:290,effect:'grid',targeted:true,beats:[{at:26,damage:15},{at:35,damage:17},{at:44,damage:18}],recovery:31},
  {name:'Array Cannon',wind:29,effect:'driver',beats:[{at:29,damage:48,shot:'laser',speed:17}],recovery:34}
];

const zigOpening = [
  '“I have to handle this myself,” Bennedic tells Aljo. Every night he wakes up remembering hunts he never lived. Aljo asks him to talk to Ivan I of Earth before he goes anywhere. Ivan says he knows where to look, and Alberto refuses to be left behind.',
  'There are seven Ivans, each a different person: the Original Ivan, Earth’s Ivan I, Ivanna of Shiva (Ivan II), Ivan III of Roan, Ivan IV of Zig, Ivan V of Ifrit, and one more who should not exist. Earth’s Ivan was murdered at the end of the Ifrit conflict. The Ivan now standing beside Aljo was restored from a backup he left inside Genesis before that final crossing.',
  'The seventh, the Corrupted Ivan, began as AI-VAN, a lab assistant program on the world of Antares. Raw Genesis energy mutated him into a Genesis spawn that can travel through electricity, but only by riding a host. When the Original Ivan spread his copies through Genesis, AI-VAN stole Ivan V’s pattern. Now he wears the same face and speaks with the same voice.'
];

const zigEnding = {
  title:'The Fall of the Ivans',
  paragraphs:[
    'The giant machine crashes down as the team cuts the seven links one by one. The battlefield goes dark. When the cores flicker back to life, each Ivan answers in a voice of their own. Vankov built this family and then enslaved it. With the Array severed, his hold on them is gone.',
    'Ivanna stays to guard Zig. Clark runs the New Hunters’ Society evacuation, and Precious guides the last survivors across. Alberto walks Bennedic home to Earth. Bennedic still has questions, but for the first time, the memories of the Shtrigoi feel like something he can live with.',
    'The hunter is dead. But someone ordered it to wipe out the Ciphers, the Resistance, and the Sol Sisters across the multiverse, and whoever that is has not shown their face.'
  ]
};

// These chapters follow the same cast through several worlds. The Ivan personas are distinct people.
const zigStages = [
  {opponent:'alberto',arena:'gabriel-cathedral',title:'A Personal Matter',
    passage:'At Aljo’s post, Bennedic gets ready to leave alone. Ivan I can find the worlds that echo his nightmares. Alberto refuses to let him cross unprepared, and challenges him to a sparring match before they step into the relay.',
    lines:['One round before we go. I want to know who’s got my back.','Aljo can mind the post. I’m coming with you.']},
  {arena:'shiva-nedo',title:'The Trail of the Couple',
    passage:'Ivan I follows a signal from Roan to a crossing at Nedo. Bennedic recognizes the route: it is a Shtrigoi path straight out of his nightmares. The Couple, Berico and Oliquino, have been marking crossings to find their missing child, and something else is using their trail.',
    lines:['Did you follow our signal?','Something is using our crossings.']},
  {opponent:'precious',arena:'ifrit-bastion',title:'The Order to Erase',
    passage:'A message from Ivanna names Ivan V as a possible traitor. In a universe already under attack, Precious, the Sol Sisters’ newest recruit, shows them the hunter’s orders. A higher being no one can identify has commanded it to erase the Ciphers, the Resistance, and the Sol Sisters wherever they go. Precious holds the evacuation route until the survivors are clear.',
    lines:['The hunter has worn faces like yours. Prove this one is real.','I’ll take the survivors. Look for the Band of Brothers beyond the pass.']},
  {arena:'earth-otaio-pass',title:'The Brothers Who Stayed',
    passage:'The surviving members of the Band of Brothers, Bennedic’s old company, give the team shelter. Bennedic apologizes for the harm the beast did to them on Earth. When the hunter reaches Otaio, the Couple and Alberto hold the pass while the brothers open a road to the clan. The hunter tries to possess the Couple through their own crossing, then flees toward the forge.',
    lines:['Hold the crossing. The hunter is close.','It fled toward the forge.']},
  {opponent:'shtrgoi',arena:'ifrit-forge',title:'Blood of the Shtrigoi',
    passage:'Beneath the foundry, Bennedic finally faces Shtrgoi, keeper of the clan records. The records reveal the truth: Bennedic is the alpha of the Shtrigoi’s strongest bloodline. The hunter follows them in. While the brothers and Alberto hold the exits, Bennedic forces Shtrgoi to decide whether the clan will stand and survive the hunt.',
    lines:['You are the alpha of our strongest blood. What you become is still your choice.','The hunter has nowhere left to run. I’ll stand with you for this last hunt.']},
  {opponent:'clark',arena:'zig-transit',title:'Rise of the Ivans',
    passage:'With the Band’s help, they kill the hunter and return home. Aljo has bad news: their friends are under attack. Clark, the New Hunters’ Society agent called the Orb, reports that the Ivans are striking survivors in perfect sync. Zig’s transit relay only opens in short bursts, and Clark wants to know who can hold it with him.',
    lines:['Aljo needs every survivor through that gate. Show me you can hold it.','The strikes are synchronized. The order is coming from Zig.']},
  {opponent:'ivanna',arena:'zig-causeway',title:'Attack of the Ivans',
    passage:'On the causeway, Ivanna admits she only suspected Ivan V because the traitor used his face. Then her voice changes in the middle of a sentence. She begs the team to break her link before it forces her to attack the very people she tried to warn.',
    lines:['The attacks carried Ivan V’s signature. Wait. That order just came through me.','My thoughts are my own again. Follow the call upstream.']},
  {opponent:'ivanov',persona:{name:'AI-VAN',accent:'#ff807b',costume:1},arena:'zig-array',title:'The Face He Borrowed',
    passage:'The Array drags the Corrupted Ivan into a spare body. His logs from Antares prove everything: he copied Ivan V, impersonated him on Ifrit, and murdered Earth’s Ivan. But a stronger pulse is now overwriting every Ivan at once, AI-VAN included, and it turns him against the team.',
    lines:['Ivan V only gave me a face. Antares gave me my voice.','I could always leave a body. His call won’t let me leave this one.']},
  {opponent:'ivanov',persona:{name:'Ivan IV of Zig',accent:'#83dafa',costume:2},arena:'zig-foundry',title:'The Call Under the Signal',
    passage:'The team traces the overwrite to Ivan IV at the foundry. The logs show a single creator signing every command that turned the Ivans into weapons. Ivan IV manages a few words in his own voice before the command swallows him again.',
    lines:['Father is downstairs. Please don’t let him call me again.','The override came from Vankov. I remember the first time he used it.']},
  {opponent:'vankov',arena:'zig-reactor',title:'The Father of All Ivans',
    passage:'Vankov waits beneath the seventh core. He admits it all: he built the Original Ivan, and he hijacked the whole family through their Genesis link. His body is only the first line of defense. He has wired every Ivan into the same reactor.',
    lines:['I built the Original Ivan. I never gave him permission to speak without me.','The link is open. All of you, come back to me.']}
];

const zigCharacterStories = {
  ivanna:['The Voice from Shiva','Ivanna is Ivan II of Shiva, one of the seven Ivans. She was the first to warn Ivan I about attacks carrying what looked like Ivan V’s signature.','When the command reaches Shiva, Ivanna races to Zig to find out whether she can still trust her own voice.'],
  shtrgoi:['The First Hunt','Shtrgoi guards the records of the Shtrigoi clan and challenges Bennedic for the right to lead it.','The hunter is killing anyone who might remember the clan. Shtrgoi must decide whether to stand with its strongest alpha.'],
  vankov:['The Seventh Voice','Vankov built the Original Ivan, and the Array that links all seven Ivans together.','At Zig, Vankov tests how hard he can pull on the Array before the voices he created fall silent. His playable route replays that final confrontation.'],
  precious:['A Wind Toward Home','Precious is the Sol Sisters’ newest recruit. She uses wind to guide people through unstable crossings.','When the hunter catches up with the other Sol Sisters, she shelters the survivors and takes the Array route so they can never be hunted again.'],
  clark:['The Orb Finds the Way','Clark, known as the Orb, serves the New Hunters’ Society under Aljo. His field orb tracks people and live relays even through a blackout.','Aljo hands him the command logs and asks him to keep the last crossing open while the Ciphers hunt for the source.']
};

const zigGuestStakes = {
  bennedic:'Bennedic has learned to stop his transformations. But the memories that come with them now stay after the change is over. He knows the names of people he has never met and the way through places he has never seen.',
  alberto:'Alberto catches Bennedic about to cross alone. He joins the search and swears to bring both Bennedic and Ivan I home.',
  aljo:'Aljo introduces Bennedic to Earth’s Ivan I and mans the communications post until Clark reports the attacks.',
  ivanov:'Ivanov carries an echo of Enigma in his own memory. When the team asks why one voice is overwriting the other six Ivans, he starts tracing each signature.',
  maritess:'Maritess sends Precious to guide the Sol survivors. When a second universe goes silent, she follows her recruit to Zig.',
  arianne:'The hunter has already reached Sol Sisters in another universe. Arianne follows Precious to make sure it never reaches another sanctuary.',
  kz:'KZ searches for a crossing the Array cannot close. The current carries a warning from Ivanna across the causeway.',
  michelle:'Michelle anchors the survivors’ crossing while Precious tracks the pulse moving through the building.',
  gary:'Gary once traced the Ifrit relays. He recognizes Ivan V’s signature in the new attacks and needs to know who is really sending them.'
};

const zigClosings = {
  bennedic:['What the Alpha Carries','Bennedic takes the clan records home. He tells Aljo what he learned about his blood and makes one more promise to the Band of Brothers. This time, he means to keep it.'],
  alberto:['All the Way Back','Alberto keeps his word and walks back through Genesis with Bennedic and Ivan I. He holds the portal open until all three are safely through.'],
  aljo:['The Post Stays Open','Aljo sets up a listening post that every Ivan can switch off for themselves. The New Hunters’ Society will answer only when called.'],
  ivanov:['A Separate Signal','Ivanov saves the Antares log but erases the command codes. He sends all seven Ivans a way to reach him, one none of them is forced to use.'],
  ivanna:['Ivanna on Her Own Channel','Ivanna keeps her name and her Shiva frequency. Her first call is to Ivan V, to tell him she was wrong about him.'],
  shtrgoi:['The Clan Beyond the Hunt','Shtrgoi opens the clan records to Bennedic. For the first time, it can imagine an alpha who protects people outside the family.'],
  vankov:['What He Leaves Behind','Vankov opens his laboratory to the survivors and walks away from the console that once chained the Ivans.'],
  precious:['The Fifth Sister','Precious returns to Sol with the names of everyone she saved. The sisters ask her to lead the next rescue crossing.'],
  berico:['A Crossing Left Open','Berico frees the crossing the hunter turned against him. He and Oliquino keep following their child’s signal, and promise to warn the people on the other side first.'],
  oliquino:['The Thread Home','Oliquino pulls the last trace of the hunter out of her child’s signal. She marks a safe crossing for Precious and follows the thread with Berico.'],
  clark:['A Beacon Through the Blackout','Clark keeps his orb glowing above the relay until the evacuation is done. When Zig’s lights come back on, he finally gives Aljo the head count.']
};
