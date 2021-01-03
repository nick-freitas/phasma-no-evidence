export const TESTS = [
  {
    name: 'Revenant Test',
    description: `During a Hunt, when you are in the Revenant's line of sight, it's speed will greatly increase until it reaches you. The Revenant's speed during a hunt is 2x the speed of other ghosts, and it will not stop until it reaches you (unlike a Jinn).`,
    positiveTestFor: 'Revenant',
  },
  {
    name: 'Wraith Test',
    description: `When it disturbes a salt pile (there is an impression on the salt), it does not leave any footprints behind (there is no footprint visible in black light). To be sure, check for footprints in 3 or more salt piles to determine if it's a Wraith.`,
    positiveTestFor: 'Wraith',
    freezingTempTest: true,
  },
  {
    name: 'Demon Test',
    description: `Sanity does not Drop when a question was asked successfully on a Ouiji Board.`,
    positiveTestFor: 'Demon',
    freezingTempTest: true,
  },
];
