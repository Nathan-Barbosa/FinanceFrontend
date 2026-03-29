const CATEGORY_PURPOSE = {
  Expense: {
    value: "Expense",
    label: "Despesa",
    color: "text-red-500",
  },
  Income: {
    value: "Income",
    label: "Receita",
    color: "text-green-500",
  },
  Both: {
    value: "Both",
    label: "Ambos",
    color: "text-blue-500",
  },
} as const;

export { CATEGORY_PURPOSE };
