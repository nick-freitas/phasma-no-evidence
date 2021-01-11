export const GHOSTS = [
  // Non-Freezing
  {
    name: 'Poltergeist',
    description:
      `A Poltergeist's ability to manipulate objects, specifically doors, can make it easier to identify. However, if the ghost is one that specifically affects multiple light fixtures and other electronics at once, it's more likely to be a Jinn.Poltergeists throw items with higher force than other ghosts.
      An unwritten quirk of the Poltergeist is that they have the greatest capacity to roam from their Ghost Room, going far to move objects away from its space. In larger maps, this can result in red herrings when looking for Ghost Activity and cause players to waste time searching areas that ultimately do not house the Poltergeist.`,
    positiveTests: ['Poltergeist Test'],
  },
  {
    name: 'Revenant',
    description:
      `Unlike other Ghosts, who will often have a specific target selected when starting a Hunt they will hone in on, Revenants can freely switch targets if there is another player that is closer by - and especially one that is in plain view and available, making its goal of killing players more convenient. 
      If you are not hiding during a hunt the only way to stay alive is to light a smudge stick while it is chasing you to make it wander somewhere else.`,
    positiveTests: ['Revenant Test'],
  },
  {
    name: 'Jinn',
    description: `Jinns tend to interact with electronics more than any other ghost. They may cause phones to ring, radios to activate, TV's to turn on, or car alarms to go off more often. This also extends to light switches, which may cause unsure investigators to confuse a Jinn for a Mare or Poltergeist; although Mares also have the power to turn lights off, they will not often turn lights back on as Jinn do, and Poltergeists will likely disturb more general objects that aren't light switches such as doors.`,
    positiveTests: ['Jinn Test'],
  },
  {
    name: 'Spirit',
    description:
      'With no special powers, and a harsher reaction to Smudge Sticks, Spirits serve as a baseline to measure other Ghosts against. With their behavior ranging from shy to active, passive to hostile, a Spirit can have any number of perceived characteristics. It is this lack of defining traits that can confuse investigators; therefore, a Spirit can be easily mistaken for another entity.',
    positiveTests: ['Spirit Test'],
  },
  {
    name: 'Oni',
    description: `The Oni is also described as being extremely strong, and it will throw objects around the room with great force when interacting with them. However, these objects are not dangerous to the hunters or their sanity unlike those thrown by Poltergeists.`,
  },
  {
    name: 'Shade',
    description: `Noted as being shy ghosts, Shades lower their activity in the presence of multiple investigators. Because of its temperament, it can be harder to find Ghost Activity when sticking together. However, like all ghosts in the game, the Shade is more likely to hunt when the players' Sanity is low.`,
    positiveTests: ['Shade Test'],
  },

  // Freezing
  {
    name: 'Wraith',
    description: 'Wraiths almost never touch the ground, but this does not apply to the ghost model. Because of this, footprint sounds from a wraith will be rare to non-existent, and they can travel directly through doors without having to open them.',
    requiresFreezingTemp: true,
    positiveTests: ['Wraith Test'],
  },
  {
    name: 'Phantom',
    description: 'Looking at a Phantom will considerably drop your Sanity. This refers to any visible manifestations of the Phantom, including during a Hunt.',
    requiresFreezingTemp: true,
    positiveTests: ['Phantom Test'],
  },
  {
    name: 'Yurei',
    description: `A Yurei will drain sanity at 0.4% per second during a manifestation, this is higher then the usual 0.2% per second from other ghosts.
    The higher manifestation drain will also happen during a hunt if the player is within 10 meters of the ghost.`,
    requiresFreezingTemp: true,
    positiveTests: ['Yurei Test'],
  },
  {
    name: 'Mare',
    description: `Mares have a higher chance of initiating hunts when players are in darkness, especially if the lights are turned off in the ghost room. 
    It tends to turn lights and the fuse box off more than any other ghost type when active. An active Mare stalking low-sanity players have the capacity to 
    initiate hunts within mere moments of each other, allowing them to rival even Demons in aggression. Note that staying in the light does not prevent the 
    Mare from hunting; it will still be able to initiate Hunts provided it is not currently the Setup Phase, though it will be less aggressive in doing so 
    when compared to other ghost types.`,
    requiresFreezingTemp: true,
    positiveTests: ['Mare Test'],
  },
  {
    name: 'Banshee',
    description: `Unlike other ghosts, who will often change their selected target between Hunts, Banshees will always target the same player every time it hunts 
    until it successfully kills them. While this means other players are safe from the Banshee's power so long as its target is alive, it makes carrying out objectives 
    by the targeted player more difficult, though at the same time making it much easier for other players. Banshees fear the Crucifix, which boosts the Hunt-stopping 
    range of one from 3 meters to 5 meters against it.`,
    requiresFreezingTemp: true,
    positiveTests: ['Banshee Test'],
  },
  {
    name: 'Demon',
    description: `They are generally regarded as the most dangerous type of ghost to encounter; noted for being highly aggressive, it will attack more often than any other 
    ghost, and usually without warning. They are notorious for initiating hunts frequently, a trait that is exacerbated by lower sanity levels, and compounded by higher 
    difficulties like Professional where hunts last much longer. Taking all of these factors into account, Demons at their most aggressive will hunt in intervals as short 
    as half-minutes, forcing the players to spend more total time hiding than investigating.`,
    requiresFreezingTemp: true,
    positiveTests: ['Demon Test'],
  },
];
