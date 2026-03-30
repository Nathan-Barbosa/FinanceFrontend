type TotalsItem = {
  label: string;
  totalIncome: number;
  totalExpense: number;
  balance: number;
};

type TotalsData = {
  items: TotalsItem[];
  totalIncome: number;
  totalExpense: number;
  balance: number;
};

type TotalsTableProps = {
  data: TotalsData;
  labelHeader: string;
};

export type { TotalsTableProps };
