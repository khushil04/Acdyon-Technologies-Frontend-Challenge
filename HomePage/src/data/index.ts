export const pathOptions = {
  doctoral: {
    label: 'Doctoral Programs',
    title: 'A doctoral pathway for deeper expertise.',
    description:
      'Explore advanced academic routes designed for professionals who want to go further in their field.',
    action: 'Explore Pathway',
  },
  executive: {
    label: 'Executive Education',
    title: 'Focused learning for your next chapter.',
    description:
      'Look at executive education options built around the decisions of working professional life.',
    action: 'Explore Pathway',
  },
  explore: {
    label: 'Explore Programs',
    title: 'A clearer view of academic opportunities.',
    description:
      'Start with program discovery if you are still deciding which academic or professional route fits next.',
    action: 'Explore Pathway',
  },
} as const;

export type PathKey = keyof typeof pathOptions;

export { programs, type ProgramId } from './programs';
