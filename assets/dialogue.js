const fighterDialogue = {
  lour:{
    intro:['Guard up. I’d rather patch you than bury you.','This staff heals. It also bruises.','Let’s keep this short. People are waiting on me.'],
    win:['Hold still. Let me see that cut.','The Divine Will was kind today.','I still have light to spare. For you, too.','Rest. I’ll take first watch.','Tell me if it still hurts tomorrow.'],
    loss:['My hands are shaking. Just a moment.','The medicine’s in my satchel. Take it.','I can still guide you out.','The ward broke before I did.','Check on the others first. Please.']
  },
  bryan: {
    intro: ['Show me your opening. I’ll find it.','Ciphers, stand by. I’ve got this one.','I’ve already planned three ways this ends.'],
    win: ['Read you from the first step.','The plan held. Everyone’s still standing.','One opening. That’s all I needed.','Nobody gets left behind on my watch.','That’s the fight I drilled for.'],
    loss: ['I read the wrong threat.','That opening was bait. Good call.','Tell the team to hold position.','I can’t afford to lose like this.','I’ll run the plan again. Better.']
  },
  jonneil: {
    intro: ['Grandpa Khan said punch first. Kidding. Mostly.','You ready? My knuckles are.','Let’s make this quick. I’m hungry.'],
    win: ['Khan would’ve made that a riddle. I made it a punch.','Told you to keep your guard up.','Ooh, that one’s going in the records.','Still warmed up. Round two?','That’s the family style, friend.'],
    loss: ['Walked right into that one.','Okay. That was a good joke. On me.','You hit harder than you look.','Give me a second. And some water.','Grandpa’s laughing at me somewhere.']
  },
  ranelle: {
    intro: ['Range set. Skyblender ready.','Step closer and meet the knife.','Pick your cover. You’ll need it.'],
    win: ['Target down. Safety on.','That’s why I keep my distance.','Skyblender call sign: mission complete.','Backup plan had a backup.','Clean shot. Clean finish.'],
    loss: ['Lost the range. My mistake.','Caught me reloading. Smart.','Should’ve drawn the knife sooner.','Grandfather’s going to hear about this.','Out of ammo. Out of room.']
  },
  yokan: {
    intro: ['Keep your eyes on the blade.','The frost bites harder than I do.','My arm’s fine. Don’t ask.'],
    win: ['The ice settles. So do you.','One clean cut. That’s all.','Stay down until it thaws.','I can still close my hand. Good.','Roj taught me patience. The sword did the rest.'],
    loss: ['The old wound opened again.','My grip slipped. It’s nothing.','The ice cracked before you did.','Don’t tell the others about my arm.','A breath too late. Again.']
  },
  dice: {
    intro: ['Which shadow is the real me?','I brought friends. You can’t see them.','Abanel called me a killer. Wrong guy.'],
    win: ['Mind your step. My shadows stay.','You counted one of me. Bad math.','Still innocent. Still winning.','Darkness picked a side.','My friends had fun with you.'],
    loss: ['Who turned on the lights?','You found the real one. Rude.','I lost my own shadow there.','Should’ve picked a darker corner.','Even framed men lose sometimes.']
  },
  roj: {
    intro: ['Twin blades. One light.','I don’t remember you. My blades might.','Stand ready. I won’t hold back.'],
    win: ['The blades rest. The light stays.','My hands remembered what I forgot.','Lower your guard. It’s over.','The light found its way through.','One step. That decided it.'],
    loss: ['The blades slipped out of line.','You broke my stance.','I reached for a memory. Missed.','The light dimmed. Not out.','Apple, don’t worry. I’ll get up.']
  },
  hope: {
    intro: ['Check your pockets after this.','Watch the left hand. Wrong hand.','Catch me and I’ll split the loot.'],
    win: ['You can keep the throwing star. Souvenir.','You watched my hands. I moved my feet.','Griselda eats tonight.','Gone before you stand up.','Pretty sure I got away with that.'],
    loss: ['Well. You caught me.','So much for the quick exit.','Out of stars. Out of luck.','Fine. You win. Keep your wallet.','You saw through the oldest trick.']
  },
  miguel: {
    intro: ['The wind’s turning. Can you feel it?','One arrow tells me how you move.','Give me a clear line, ranger’s rules.'],
    win: ['The wind was on my side.','That arrow flew true.','Patience bought the shot.','Clearing’s quiet again.','Lyle’s army never taught me that.'],
    loss: ['Misjudged the wind.','You closed the gap too fast.','I loosed too early.','Lynne’s going to tease me for this.','I’ll find a better trail.']
  },
  bennedic: {
    intro: ['If my eyes change, step back.','Let’s finish before the beast wakes.','I’m holding it back. For now.'],
    win: ['Still me. That matters.','The beast stays asleep today.','Gallahan, I’m one step closer.','I held the curse long enough.','Quiet in my head again.'],
    loss: ['The curse is pulling harder.','Give me room. It’s fighting me.','I lost control. I’m sorry.','I can’t hold the change much longer.','Gallahan… wait for me.']
  },
  fallan: {
    intro: ['Apollo, stand with me.','Fire, wind, stone. Pick your poison.','The elements are restless today.'],
    win: ['Apollo, rest now.','The circle closed in time.','No Hades this time. Just me.','The last element answered.','The air settles. So do you.'],
    loss: ['The circle broke too early.','I forced an element that wouldn’t come.','Apollo, withdraw.','Never again will Hades answer me.','I need a steadier hand.']
  },
  lynne: {
    intro: ['Shall I deal?','Place your bets. House rules: mine.','Want to see what I drew?'],
    win: ['Royal hand. Pay up.','Saved my best card for last.','Read the table like a book.','Grandfather would’ve loved that hand.','I’ll take the pot, thanks.'],
    loss: ['Should’ve folded.','Chased the wrong draw.','Even my last card couldn’t save it.','Well played. I misread you.','Next hand, you deal.']
  },
  tyrone: {
    intro: ['You came all this way to beg?','Earth looked away while worlds burned.','The Gate of Hades is listening.'],
    win: ['The gate stays open.','Kneel, and hear Hades breathing.','The Zodiac will remember your fall.','Carry my warning to the Ciphers.','A Watcher never falls twice.'],
    loss: ['The gate… slips from my hand.','This form wasn’t enough.','The Zodiac is breaking.','You’ve bought Earth one more dawn.','The dark won’t answer me now.']
  },
  semmenelin: {
    intro: ['You stand in my lair, little flame.','Who dares wake the mountain?','Come. I would see who climbed so far.'],
    win: ['My fire outlasts kingdoms. And you.','The mountain has taken your measure.','Leave while the path still stands.','Your torch was too small.','Back to sleep. Back to silence.'],
    loss: ['My flame… gutters.','Even the mountain bows.','The torch is lit. Take it.','The stone will remember you.','Go. The lair is yours to leave.']
  },
  clephus: {
    intro: ['Sigma answers to me.','Step into the shadow.','I gave you a chance to leave.'],
    win: ['Sigma proceeds.','The dark obeys its master.','Carry my answer back.','That was your last opening.','My decision stands.'],
    loss: ['Withdraw the unit.','The dark slipped my grasp.','A clean stop. Noted.','Call off the operation.','This changes nothing.'],
  },
  karl: {
    intro: ['Can you keep up?','Watch the claws while you can.','Blink and it’s over.'],
    win: ['Barely warmed up.','Too slow. Always too slow.','You heard the first strike, at least.','I’ll polish the claws later.','Speed kills. Lucky you.'],
    loss: ['You caught the second step.','I moved too early.','I hate that you saw it.','Claws snagged on your guard.','Next time, a new rhythm.'],
  },
  farrol: {
    intro: ['Hands up. Let’s go.','Sigma pays me to hit things. Hello.','Come a little closer.'],
    win: ['Knuckles still good.','Got inside your reach.','You made me earn that.','Stay down. Easier that way.','That last one felt right.'],
    loss: ['Swung too wide.','That one folded me.','Should’ve kept my hands up.','Beat me in close. Respect.','Give me a minute.'],
  },
  mohammad: {
    intro: ['Mind where you stand.','One more seal to draw.','The staff is already humming.'],
    win: ['The seal held.','You stepped on the wrong mark.','The ward is complete.','The old warnings were right.','The crystal can cool now.'],
    loss: ['The rune came apart.','You broke my casting.','I missed a stroke.','The staff needs a new crystal.','The seal… failed me.'],
  },
  denni: {
    intro: ['Pressure’s good. Let’s test it.','Mind the moving parts.','Built this rig myself.'],
    win: ['Still within tolerance.','That piston earned its keep.','Relief valve works. Good.','Fred’s rigs could never.','Log it. Field test passed.'],
    loss: ['Blew a seal.','Timing belt slipped.','That dent’s coming out tonight.','Should’ve tested it under load.','Hand me the heavy wrench.'],
  },
};

const drawDialogue = [
  'Neither of us gave an inch.', 'Call it even. For now.', 'Same time next round?'
];
