export interface Difficulty {
  name: string;
  dropRate: number;
}

export const DIFFICULTIES: Difficulty[] = [
  {
    name: 'Amateur',
    dropRate: 1.0,
  },
  {
    name: 'Intermediate',
    dropRate: 1.5,
  },
  {
    name: 'Professional',
    dropRate: 2.0,
  },
];
