const namedMatchups = new Map([
  ['roj','chastity',
    ['Apple, I left a light on for you.','Sparring first, Roj. Then we go home.'],
    ['You still leave your left side open.','My husband always did underestimate that step.'],
    ['You caught me looking at you.','I’ll get you back for that at home.']],
  ['ranelle','alberto',
    ['That’s my aunt’s footwork, Alberto.','Cousin, I hope you’ve been practicing.'],
    ['Family bragging rights are mine.','I’ll tell the family you put up a fight.'],
    ['You can tell the family. Once.','Looks like you got the steady hands, cousin.']],
  ['bryan','pandemic',
    ['You can hear me in there, right?','Bryan, I know your voice. So does the shell.'],
    ['Stay with me. I’ve got you.','I knew you’d keep coming after me.'],
    ['Still here, friend. Just give me a breath.','Bryan, you can come closer now.']],
  ['miguel','lynne',
    ['Did you bet on me this time, Lynne?','I always bet on my husband to make it interesting.'],
    ['You still owe me dinner for that wager.','Looks like my husband owes me dinner.'],
    ['You win. I’m buying dinner.','Enjoy your winnings while they last, Miguel.']],
  ['lovejoy','honey',
    ['Honey, no guessing my next move.','I can feel how hard you’re trying to hide it.'],
    ['Tell me you felt that one, friend.','You’re still my friend. Come sit with me.'],
    ['I forgot how well you know me.','Friends get a rematch, right?']],
  ['ivanov','enigma',
    ['I found your code inside my oldest memory.','You carry a fragment that once belonged to me.'],
    ['Your code lives here. Your orders end here.','Come back into the process that made you.'],
    ['My memories are still mine.','A remnant that outruns its source. Curious.']],
  ['asmodeus','tyrone',
    ['Look at me when I speak to you, son.','I came here on my own terms, Father.'],
    ['You have your father’s fire, at least.','I’ll decide what I inherit from you.'],
    ['You’ve outgrown one of my lessons.','You still know exactly where to strike.']],
  ['fallan','robin',
    ['Let’s see how your wards answer this.','I was hoping to watch an elemental cast up close.'],
    ['You nearly caught the next element.','The second seal caught your casting hand.'],
    ['I want to see you draw that ward again.','I’d like to study that last spell with you.']],
  ['hope','miguel',
    ['I’ll race your arrows, Miguel.','Hope, you owe me three arrows already.'],
    ['You almost caught me with that one. Almost.','Can I have my arrows back now?'],
    ['Fine. I’ll help you find the arrows.','You get faster when you’re insufferable.']],
  ['yokan','dice',
    ['Dice, I trust you to call it if I go too far.','Yokan, you’re my friend. I’m still going to try.'],
    ['Come on. We still have a road ahead of us.','You know I’d do the same for you.'],
    ['Good. I can still count on you.','I’m glad it was you who stopped me.']],
  ['denni','fred',
    ['Nice frame, Fred. I can hear the cheap bearings.','My bearings last longer than your seals.'],
    ['You can borrow my wrench after I’m done with it.','I’ll leave a spare seal on your bench.'],
    ['All right. What did you use for those bearings?','I’m still keeping my design.']],
  ['tyrone','bennedic',
    ['Let’s see which of us can hold the change.','I know exactly what it costs to do what you do.'],
    ['You hesitated when the change began.','Strength means knowing when to come back.'],
    ['You held your shape better than I did.','I’ll have another chance to stop you.']],
  ['farrol','carlson',
    ['You came back, Carlson.','I remember what you did to me, Farrol.'],
    ['You fought back this time.','I walked in here by choice. I’ll leave the same way.'],
    ['I know an apology won’t fix it.','I’ll get back up as many times as it takes.']]
].map(([a,b,intro,win,loss])=>[
  [a,b].sort().join('/'),
  {[a]:{intro:intro[0],win:win[0],loss:loss[0]},[b]:{intro:intro[1],win:win[1],loss:loss[1]}}
]));

const resistance = new Set(['carlson','alberto','fred','lovejoy']);
const cipherLeaders = new Set(['bryan']);
const ciphers = new Set(['bryan','jonneil','ranelle','yokan','dice','roj','hope','miguel','bennedic','fallan','lynne',
  'chastity','alberto','aljo','robin','carlson','fred','ivanov','honey','lovejoy']);

const factionMatchups = {
  sigmaBoss:{intro:'Sigma answers to me. Show me what you can do.',win:'You’re still on my roster.',loss:'I’ll hear your report myself.'},
  sigmaMember:{intro:'I know the order, Clephus. I came to make my case.',win:'You heard my case, sir.',loss:'I’ll be ready when Sigma calls again.'},
  cipherBoss:{intro:'Cipher, show me how you handle a corner.',win:'You’ve still got a place on my team.',loss:'Good work. I’ll trust you with the next call.'},
  cipherMember:{intro:'Bryan, you asked for my best. Here it is.',win:'We can go over that opening together, Bryan.',loss:'I heard you, Commander. Again.'},
  resistance:{intro:'Good to see another Resistance face. Hands up.',win:'We leave together when this is done.',loss:'Tell the Resistance I’ll catch up.'},
  dice:{intro:'I’ll fight for the Ciphers my way.',win:'You can put it in your report however you like.',loss:'You know where to find me when the Ciphers need me.'},
  otherCipher:{intro:'Dice, I need to know where you stand before we go in.',win:'We need you back with the Ciphers.',loss:'I still know whose side you fought on when it mattered.'}
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
  gensys:{default:'Auxiliary chassis online. I no longer need this frame.'},
  tyrone:{default:'I spent years holding this back. Now I’m letting it out.',asmodeus:'Father, keep your throne. I’ll make my own hell.'},
  enigma:{default:'You’ve seen the edge of my world. Now step inside.',ivanov:'Ivanov, the part of me you carry can hear this.'}
};
