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

const PIE_CHART_COLORS = ["#22c55e", "#ef4444"];

const CHART_COLORS = {
  positive: "#22c55e", // verde
  negative: "#ef4444", // vermelho
  neutral: "#3b82f6", // azul (saldo positivo opcional)
};

export { CATEGORY_PURPOSE, PIE_CHART_COLORS, CHART_COLORS };
