const namedMatchups = new Map([
  ['roj','chastity',
    ['Apple, I left a light on for you.','Spar first, Roj. Then we go home.'],
    ['You still leave your left side open.','Thirty fights and my husband still forgets the return.'],
    ['You caught me staring again.','I’ll get you back for that at home.']],
  ['ranelle','alberto',
    ['That’s my aunt’s footwork, Alberto.','Hope you’ve been practicing, cousin.'],
    ['Family bragging rights are mine.','I’ll tell the family you put up a fight.'],
    ['Fine. Tell the family. Once.','Guess you got the steady hands, cousin.']],
  ['bryan','pandemic',
    ['You can hear me in there, right?','I hear you, Bryan. So does the shell.'],
    ['Stay with me. I’ve got you.','I knew you’d keep coming after me.'],
    ['Still here. Just give me a breath.','You can come closer now, Bryan. It’s me.']],
  ['miguel','lynne',
    ['Did you bet on me this time, Lynne?','I always bet on my husband. Keeps it interesting.'],
    ['You still owe me dinner for that wager.','Looks like my husband is buying dinner.'],
    ['You win. Dinner’s on me.','Enjoy your winnings while they last, Miguel.']],
  ['lovejoy','honey',
    ['Honey, no peeking at my next move.','I can feel how hard you’re trying to hide it.'],
    ['Tell me you felt that one, kiddo.','Still friends? Come sit with me.'],
    ['I forgot how well you know me.','Friends get a rematch, right?']],
  ['ivanov','enigma',
    ['I found your code inside my oldest memory.','You carry a piece of me, little machine.'],
    ['Your code lives in me. Your orders don’t.','Come home to the process that made you.'],
    ['My memories are still mine.','A fragment that outran its source. Fascinating.']],
  ['asmodeus','tyrone',
    ['Look at me when I speak to you, son.','I came on my own terms, Father.'],
    ['You have your father’s fire, at least.','I’ll choose what I inherit from you.'],
    ['So you outgrew one of my lessons.','You still know exactly where it hurts.']],
  ['fallan','robin',
    ['Let’s see how your wards handle this.','I’ve wanted to watch an elemental cast up close.'],
    ['You nearly caught my next element.','My second seal caught your casting hand.'],
    ['Draw that ward again. Slowly.','Teach me that last spell sometime.']],
  ['hope','miguel',
    ['Race you to the next arrow, Miguel.','Hope, you already owe me three arrows.'],
    ['Almost caught me. Almost.','Can I have my arrows back now?'],
    ['Fine. I’ll help you find your arrows.','You get faster when you’re insufferable.']],
  ['yokan','dice',
    ['Dice, if I go too far, you stop me.','You’re my friend, Yokan. I’m still going to try to win.'],
    ['Up you get. We’ve got a long road ahead.','You’d do the same for me.'],
    ['Good. I can still count on you.','Glad it was you who stopped me.']],
  ['denni','fred',
    ['Nice frame, Fred. I can hear the cheap bearings.','My bearings outlast your seals.'],
    ['You can borrow my wrench when I’m done.','I’ll leave a spare seal on your bench.'],
    ['All right. What bearings are those?','Not telling. Design’s still mine.']],
  ['tyrone','bennedic',
    ['Let’s see which of us can control the change.','I know exactly what the change costs.'],
    ['You hesitated when the beast woke.','Strength is knowing when to come back.'],
    ['You held your shape better than I did.','I’ll get another chance to stop you.']],
  ['farrol','carlson',
    ['You came back, Carlson.','I remember what you did to me, Farrol.'],
    ['You fought back this time.','I walked in here on my own. I’ll walk out the same way.'],
    ['I know sorry won’t fix it.','I’ll keep getting up as long as it takes.']]
].map(([a,b,intro,win,loss])=>[
  [a,b].sort().join('/'),
  {[a]:{intro:intro[0],win:win[0],loss:loss[0]},[b]:{intro:intro[1],win:win[1],loss:loss[1]}}
]));

const resistance = new Set(['carlson','alberto','fred','lovejoy']);
const cipherLeaders = new Set(['bryan']);
const ciphers = new Set(['bryan','jonneil','ranelle','yokan','dice','roj','hope','miguel','bennedic','fallan','lynne',
  'chastity','alberto','aljo','robin','carlson','fred','ivanov','honey','lovejoy']);

const factionMatchups = {
  sigmaBoss:{intro:'Sigma answers to me. Show me why I keep you.',win:'You keep your place. For now.',loss:'Good. I’ll want a full report.'},
  sigmaMember:{intro:'With respect, sir, I’m not holding back.',win:'I’d call that a strong case, sir.',loss:'Understood, sir. Back to the ranks.'},
  cipherBoss:{intro:'Training round, Cipher. Show me what you’ve got.',win:'Still a spot for you on my team. Work on that guard.',loss:'Nice work. You’re calling the next play.'},
  cipherMember:{intro:'You wanted my best, Commander. Here it is.',win:'Want to go over that opening, Bryan?',loss:'Heard you loud and clear, Commander.'},
  resistance:{intro:'Another Resistance face. Hands up, friend.',win:'We leave together when this is done.',loss:'Tell the Resistance I’ll catch up.'},
  dice:{intro:'I fight for the Ciphers. Just my way.',win:'Write it in your report however you like.',loss:'You know where to find me when you need me.'},
  otherCipher:{intro:'Dice, I need to know where you stand.',win:'Come back to the Ciphers. We need you.',loss:'I know whose side you’re on when it counts.'}
};

function relationLine(fighter,opponent,role) {
  if(fighter.id===opponent.id||role==='draw') return null;
  const exact=namedMatchups.get([fighter.id,opponent.id].sort().join('/'));
  if(exact) return exact[fighter.id][role];
  if(fighter.id==='clephus'&&opponent.faction==='Sigma') return factionMatchups.sigmaBoss[role];
  if(opponent.id==='clephus'&&fighter.faction==='Sigma') return factionMatchups.sigmaMember[role];
  if(resistance.has(fighter.id)&&resistance.has(opponent.id)) return factionMatchups.resistance[role];
  if(fighter.id==='dice'&&ciphers.has(opponent.id)) return factionMatchups.dice[role];
  if(cipherLeaders.has(fighter.id)&&ciphers.has(opponent.id)) return factionMatchups.cipherBoss[role];
  if(opponent.id==='dice'&&ciphers.has(fighter.id)) return factionMatchups.otherCipher[role];
  if(cipherLeaders.has(opponent.id)&&ciphers.has(fighter.id)) return factionMatchups.cipherMember[role];
  return null;
}

const finalBossLines = {
  gensys:{default:'Frame destroyed. The factory has already woken my next one.'},
  tyrone:{default:'Earth locked its doors while the other worlds burned. Now hear what is knocking.',asmodeus:'Keep your throne, Father. I’ll build my own hell.'},
  enigma:{default:'You followed Willard all this way. Now see what he was hiding.',ivanov:'Ivanov. The part of me inside you can hear this.'}
};

finalBossLines.azazel = {
  default:'The vessel got me across. Now face me in my own skin.',
  brayan:'Sing your warning again, Listher. Let all of Shiva hear me answer.',
  hope:'You escaped my prison, Hope. You are still within reach of my throne.',
  'roj-demon':'You remember your own name again, minstrel. Now remember mine.',
  chastity:'Hold his hand while you can, Chastity. Genesis will open again.'
};


finalBossLines.vankov={
  default:'Original. Ivan I. Ivanna. Roan, Zig, Ifrit, and the stray from Antares. All seven of my children. Come home to your father.',
  bennedic:'You found your family’s memories, Bennedic. Watch me take back mine.',
  ivanna:'You wanted your own channel, Ivanna. Listen. Your brothers are already answering me.'
};

namedMatchups.set('bennedic/shtrgoi',{
  bennedic:{intro:'I remember a hunt I never lived. Whose memory is it?',win:'I know where my power comes from. I choose what it does.',loss:'I still need the truth about our blood.'},
  shtrgoi:{intro:'Every alpha remembers the first hunt. Show me what you learned.',win:'The blood remembers. The choice is still yours.',loss:'The records were right about you. Lead as you see fit.'}
});
namedMatchups.set('ivanna/vankov',{
  ivanna:{intro:'You put the same words in seven mouths. Hear mine.',win:'Shiva will hear from me when I choose to call.',loss:'Hold the link if you like. I know which thoughts are mine.'},
  vankov:{intro:'I kept Shiva’s channel open for you, Ivanna.',win:'Come. I can still bring your brothers back to you.',loss:'I hear you clearly. No echo at all.'}
});
namedMatchups.set('aljo/clark',{
  aljo:{intro:'Keep the orb on the exit, Clark. I’ll watch the approach.',win:'Tell the patrol that marker is ours.',loss:'The crossing’s in your hands, then.'},
  clark:{intro:'I’ve got the crossing, Aljo. Who’s behind you?',win:'The New Hunters can bring the rest through.',loss:'Keep the orb. It’ll keep transmitting.'}
});
namedMatchups.set('maritess/precious',{
  maritess:{intro:'Show me how you read that air current, Precious.',win:'You found a way I would have missed.',loss:'The Sol Sisters chose well.'},
  precious:{intro:'I kept a path open for each of us, like you taught me.',win:'I’m ready to lead the next crossing.',loss:'I’ll remember how you read the wind.'}
});
