export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const statisticsData: Statistic[] = [
  {
    id: "years",
    value: 16,
    suffix: "+",
    label: "Years of Trust & Excellence",
    description: "Shaping today's students into tomorrow's leaders.",
  },
  {
    id: "students",
    value: 3000,
    suffix: "+",
    label: "Graduated Alumni",
    description: "Successfully passed out across BA, BSc, BCA, and MA degree streams.",
  },
  {
    id: "results",
    value: 100,
    suffix: "%",
    label: "Pass Percentage",
    description: "Outstanding success in Purvanchal University examinations.",
  },
  {
    id: "courses",
    value: 4,
    suffix: " Major",
    label: "Degree Faculties",
    description: "BA, BSc, BCA, and MA courses with diverse subject specializations.",
  },
];
