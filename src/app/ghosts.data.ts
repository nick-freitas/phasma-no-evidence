export const GHOSTS = [
  // Non-Freezing
  {
    name: 'Poltergest',
    description:
      'Sanity drop when player had line of sight of the thrown object (double the sanity drop for each object thrown). Roams a lot.',
  },
  {
    name: 'Revenant',
    description:
      'Smudge sticks during hunt will halt him for 5 seconds (works for every ghost but its most useful for this one).',
    positiveTests: ['Revenant Test'],
  },
  {
    name: 'Jinn',
    description: '25% sanity drop when within 3m.',
  },
  {
    name: 'Spirit',
    description:
      'Will stop attacking after smudging for 180s instead of the normal 90s.',
  },
  {
    name: 'Oni',
    description: `Object throwing doesn't decrease sanity`,
  },
  {
    name: 'Shade',
    description: 'Can be determined by separating',
  },

  // Freezing
  {
    name: 'Wraith',
    description: 'Leaves no footprints after touching salt',
    requiresFreezingTemp: true,
    positiveTests: ['Wraith Test'],
  },
  {
    name: 'Phantom',
    description: 'Disapperance when making a photo will not affect hunt',
    requiresFreezingTemp: true,
  },
  {
    name: 'Yurei',
    description: 'Double sanity drain when ghost is visible/hunting w/in 10m',
    requiresFreezingTemp: true,
  },
  {
    name: 'Mare',
    description: `Turns off lights/breakers but usually doesn't turn them back on.`,
    requiresFreezingTemp: true,
  },
  {
    name: 'Banshee',
    description: 'Crucifix range effect increase to 5m instead of 3m.',
    requiresFreezingTemp: true,
  },
  {
    name: 'Demon',
    description: 'Can hunt in 30 second intervals without a reason.',
    requiresFreezingTemp: true,
    positiveTests: ['Demon Test'],
  },
];
