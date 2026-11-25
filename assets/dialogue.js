const fighterDialogue = {
  bryan: {
    intro: ['I only need one opening.', 'Show me how you fight.', 'Let’s see if my read is right.'],
    win: ['You gave away your timing.', 'One clean opening was enough.', 'The plan held.', 'I saw that last move coming.', 'That’s the fight I prepared for.'],
    loss: ['I read the wrong threat.', 'That opening was bait.', 'I had the timing backwards.', 'I lost track of your rhythm.', 'I’ll run the sequence again.']
  },
  jonneil: {
    intro: ['Come closer. Let’s settle this.', 'I hope you can take a hit.', 'You ready? My hands are.'],
    win: ['That last punch felt right.', 'I told you to keep your guard up.', 'You made me work for that.', 'My hands are still warm.', 'One more round? I can keep going.'],
    loss: ['I walked right into that.', 'Guess I dropped my hands.', 'You hit harder than you look.', 'Give me a second to breathe.', 'I should’ve waited for my opening.']
  },
  ranelle: {
    intro: ['One round. Pick your ground.', 'Range checked. I’m ready.', 'Come in close if you want. I brought a knife.'],
    win: ['Target down. Weapon safe.', 'That’s why I kept my distance.', 'The last shot did its job.', 'I’m still on my feet.', 'Even my backup plan had a backup.'],
    loss: ['I lost the range. My mistake.', 'You caught me between shots.', 'Should’ve gone to the knife sooner.', 'I need a better angle next round.', 'I’m out of room. You got me.']
  },
  yokan: {
    intro: ['The cold will reach you soon enough.', 'Keep your eyes on the blade.', 'I can still lift this sword.'],
    win: ['The blade is quiet again.', 'You hesitated when the frost set in.', 'I needed only one clear cut.', 'I can still stand. That’s enough.', 'The ice will thaw. Stay down until it does.'],
    loss: ['My grip slipped.', 'My old wound opened again.', 'You moved before the ice could hold.', 'My blade was a breath too late.', 'I’ll have to find my footing again.']
  },
  dice: {
    intro: ['Did that shadow just move?', 'I brought a few friends.', 'Try to keep track of me.'],
    win: ['Careful where you step. My shadows are still here.', 'You counted one of me.', 'The dark corner was a good hiding place.', 'Looks like my friends had fun.', 'Even the shadows knew how that would end.'],
    loss: ['Who turned on the lights?', 'I lost my own shadow for a moment.', 'You found the real one.', 'I should’ve picked a darker corner.', 'All that misdirection and you still got me.']
  },
  roj: {
    intro: ['I’ll draw only what I need.', 'The light is with me.', 'Stand ready. I’m drawing my blades.'],
    win: ['The blades can rest.', 'The light found a way through.', 'I held my ground.', 'That last step decided it.', 'We’re finished here. You can lower your guard.'],
    loss: ['I couldn’t keep the blades aligned.', 'My feet gave the move away.', 'You broke my stance.', 'I reached too far.', 'My hands remember how to stand again.']
  },
  hope: {
    intro: ['Check your pockets after this.', 'Catch me if you can.', 'I bet you’re watching the wrong hand.'],
    win: ['That opening was too good to leave behind.', 'You can have the throwing star back.', 'I’ll be gone before you get up.', 'You watched my hands. I moved my feet.', 'I think I got away with that.'],
    loss: ['Well, you caught me.', 'So much for the quick exit.', 'I should’ve kept a star in reserve.', 'I thought I was faster.', 'You didn’t fall for the oldest trick.']
  },
  miguel: {
    intro: ['Listen. The wind is changing.', 'One arrow will tell me how you move.', 'Give me a clear line and we can begin.'],
    win: ['The wind was on my side.', 'That last arrow flew true.', 'The clearing is quiet again.', 'Patience bought me the shot.', 'You left me a clean line.'],
    loss: ['I misjudged the wind.', 'You closed the distance too quickly.', 'I should’ve waited to loose that arrow.', 'My footing went first.', 'I’ll take a different trail next time.']
  },
  bennedic: {
    intro: ['I can hold it back. For now.', 'Let’s finish before the curse wakes.', 'If my eyes change, step back.'],
    win: ['It’s quiet in my head again.', 'I’m still myself. That matters.', 'The beast can sleep.', 'I held the curse long enough.', 'It didn’t take everything from me today.'],
    loss: ['The curse is pulling harder now.', 'I lost control at the wrong moment.', 'I couldn’t hold the change.', 'Give me room. I’m still fighting it.', 'I need to get back on my feet before it does.']
  },
  fallan: {
    intro: ['Apollo, hear me.', 'The elements are unsettled today.', 'Let’s see which element answers first.'],
    win: ['Apollo, you can rest.', 'The last element answered just in time.', 'The circle is closed.', 'The air has settled again.', 'I felt the spell take hold.'],
    loss: ['The circle broke too early.', 'Apollo, withdraw.', 'My casting fell out of rhythm.', 'I forced an element that wouldn’t answer.', 'I’ll need a steadier hand.']
  },
  lynne: {
    intro: ['Shall I deal?', 'One round. Place your bets.', 'Want to see what I drew?'],
    win: ['The house can pay up now.', 'That’s a nice hand to end on.', 'I was saving that last card.', 'Looks like I read the table correctly.', 'I’ll take the pot, thanks.'],
    loss: ['I should’ve folded.', 'Well played. I misread the table.', 'Even my last card couldn’t save that hand.', 'I chased the wrong draw.', 'Next hand, you deal.']
  },
  tyrone: {
    intro: ['So you’ve come to close the gate.', 'You walked all this way to face me.', 'Hades has waited long enough.'],
    win: ['The gate stays open.', 'You can hear them through the stone.', 'Your friends will hear of this.', 'Take your warning back to the Ciphers.', 'I have more than one form for a reason.'],
    loss: ['The gate is slipping away from me.', 'I can feel the stone closing.', 'I thought this form would be enough.', 'The dark won’t answer me now.', 'You’ve bought the world another dawn.']
  },
  semmenelin: {
    intro: ['You stand in my lair.', 'The stone remembers your footsteps.', 'Come closer. I would see who woke me.'],
    win: ['The mountain has taken your measure.', 'My fire outlasts you.', 'Go, while the path behind you still stands.', 'You woke a fire you could not put out.', 'The lair will be quiet again.'],
    loss: ['My flame gutters.', 'Even this mountain must yield.', 'I can no longer hold the fire.', 'The stone will remember your name.', 'Go. The lair is yours to leave.']
  },
  clephus: {
    intro: ["Sigma’s orders come from me.", "I gave you room to leave.", "Step into the shadow."],
    win: ["Sigma will proceed.", "Clean this up before my return.", "You can carry my answer back.", "That was your last opening.", "I have made my decision."],
    loss: ["Withdraw the unit.", "I misjudged the distance.", "You stopped me cleanly.", "The dark slipped from my grasp.", "Call the operation off."],
  },
  karl: {
    intro: ["How fast can you turn?", "Look at my hands while you can.", "I want to see you try to keep up."],
    win: ["I barely warmed up.", "You watched the wrong hand.", "You heard the first strike, at least.", "I’ll polish the claws later.", "I left you one opening."],
    loss: ["You caught the second step.", "My claws caught on the guard.", "I hate that you saw it coming.", "I moved too early.", "Next time I change the rhythm."],
  },
  farrol: {
    intro: ["Hands up. Let’s go.", "I hope you can take a hit.", "Come a little closer."],
    win: ["My knuckles are still good.", "I got inside your reach.", "You made me earn that.", "That last one felt right.", "You can get up now."],
    loss: ["I swung too wide.", "That one folded me.", "I should’ve kept my hands up.", "You beat me in close.", "Give me a minute to breathe."],
  },
  mohammad: {
    intro: ["Watch where you stand.", "I have one more sigil to draw.", "The staff is already humming."],
    win: ["The circle held.", "You stepped onto the wrong mark.", "That completes the spell.", "I’ll leave the next rune blank.", "The crystal can cool now."],
    loss: ["The rune came apart.", "You cut my casting short.", "I drew it too close to you.", "My staff will need a new crystal.", "I missed a stroke."],
  },
  denni: {
    intro: ["Pressure’s good. Let’s test it.", "Mind the moving parts.", "I built this one myself."],
    win: ["Still within tolerance.", "That piston earned its keep.", "I can tighten it up later.", "Even the old rig could take that.", "Good. The relief valve works."],
    loss: ["I blew a seal.", "The timing belt slipped.", "That dent’s coming out tonight.", "I should’ve tested it under load.", "I’ll need the heavy wrench."],
  },
};

const drawDialogue = [
  'We both held our ground.', 'I can’t call that either way.', 'We’ll have to settle this another round.'
];
