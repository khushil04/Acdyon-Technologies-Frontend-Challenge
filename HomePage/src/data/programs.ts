export const programs = [
  {
    id: 'doctoral',
    number: '01',
    category: 'Doctoral',
    label: 'Doctoral Programs',
    detail: 'Advanced academic pathways for professionals ready to deepen their expertise.',
  },
  {
    id: 'executive',
    number: '02',
    category: 'Executive',
    label: 'Executive Education',
    detail: 'Focused learning for the decisions shaping your next professional chapter.',
  },
  {
    id: 'explore',
    number: '03',
    category: 'Discovery',
    label: 'Universities & Programs',
    detail: 'A clearer view of academic opportunities that may fit your goals.',
  },
] as const;

export type ProgramId = (typeof programs)[number]['id'];
