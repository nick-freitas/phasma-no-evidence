export const TESTS = [
  // Non-Freezing
  {
    name: 'Poltergeist Test',
    description: 'When items are thrown in front of player, that players sainty drops 2 times the amount of items thrown percent.',
    positiveTestFor: 'Poltergeist',
  },

  {
    name: 'Revenant Test',
    description: `During a Hunt, the Revenant can move twice as fast the default speed when it is chasing a player, but it will move 1.5x slower when it isn't.`,
    positiveTestFor: 'Revenant',
  },

  {
    name: 'Jinn Test',
    description: `During a hunt the Jinn can move twice as fast the default speed when it is chasing a player until it is within 3 meters of the player and then it will drop back to regular hunting speed.`,
    positiveTestFor: 'Jinn',
  },

  {
    name: 'Spirit Test',
    description: `Using Smudge Sticks on a Spirit will stop it attacking for 180 seconds instead of 90`,
    positiveTestFor: 'Spirit',
  },

  {
    name: 'Shade Test',
    description: 'Most activity will only happen when there is only one player in the ghost room. If there are two or more people in the ghost room, it will not initiate a Hunt.',
    positiveTestFor: 'Shade',
  },

  // Freezing

  {
    name: 'Wraith Test',
    description: `When it disturbes a salt pile (there is an impression on the salt), it does not leave any footprints behind (there is no green footprint visible in black light). To be sure, check for footprints in 3 or more salt piles to determine if it's a Wraith.`,
    positiveTestFor: 'Wraith',
    freezingTempTest: true,
  },

  {
    name: 'Phantom Test',
    description: `Taking a photo of the Phantom will make it disappear.`,
    positiveTestFor: 'Phantom',
    freezingTempTest: true,
  },

  {
    name: 'Yurie Test',
    description: `Using Smudge Sticks on the Yurei will cause it to not wander around the location for 90 seconds.`,
    positiveTestFor: 'Yurie',
    freezingTempTest: true,
  },


  {
    name: 'Mare Test',
    description: `If it switchs lights off and never switches lights on, it is likely to be a Mare.`,
    positiveTestFor: 'Mare',
    freezingTempTest: true,
  },

  {
    name: 'Banshee Test',
    description: `If it hunts when the player(s) have more than 65% sanity, it's a Banshee.`,
    positiveTestFor: 'Banshee',
    freezingTempTest: true,
  },

  {
    name: 'Demon Test',
    description: `Sanity does not Drop when a question was asked successfully on a Ouiji Board.
    Or if there is no Ouiji Board on the map if a hunt starts and the player(s) sanity is between 50% - 65%,
    it's a Demon.`,
    positiveTestFor: 'Demon',
    freezingTempTest: true,
  },

];
