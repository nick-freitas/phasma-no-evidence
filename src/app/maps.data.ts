enum MAP_SIZES {
  SMALL,
  MEDIUM,
  LARGE,
}

export interface Map {
  name: string;
  size: MAP_SIZES;
  setupDropRate?: number;
  normalDropRate?: number;
  soloSetupDropRate?: number;
  soloNormalDropRate?: number;
}

export const MAPS: Map[] = [
  {
    name: 'Tanglewood Street House',
    size: MAP_SIZES.SMALL,
  },
  {
    name: 'Edgefield Street House',
    size: MAP_SIZES.SMALL,
  },
  {
    name: 'Ridgeview Road House',
    size: MAP_SIZES.SMALL,
  },
  {
    name: 'Grafton Farmhouse',
    size: MAP_SIZES.SMALL,
  },
  {
    name: 'Bleasdale Farmhouse',
    size: MAP_SIZES.SMALL,
  },

  {
    name: 'Brownstone High School',
    size: MAP_SIZES.MEDIUM,
  },
  {
    name: 'Prison',
    size: MAP_SIZES.MEDIUM,
  },
  {
    name: 'Asylum',
    size: MAP_SIZES.LARGE,
  },
].map((map: any) => {
  switch (map.size) {
    case MAP_SIZES.LARGE:
      map.setupDropRate = 0.03;
      map.normalDropRate = 0.05;
      break;
    case MAP_SIZES.MEDIUM:
      map.setupDropRate = 0.05;
      map.normalDropRate = 0.08;
      break;
    case MAP_SIZES.SMALL:
      map.setupDropRate = 0.09;
      map.normalDropRate = 0.12;
      break;
  }

  map.soloSetupDropRate = map.setupDropRate / 2.0;
  map.soloNormalDropRate = map.normalDropRate / 2.0;

  return map;
});
