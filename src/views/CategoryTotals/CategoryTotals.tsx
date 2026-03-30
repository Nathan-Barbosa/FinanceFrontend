import { TotalsTable } from "@/components";
import { useGetCategoriesTotalsQuery } from "@/services";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

const CategoryTotals = () => {
  const { data } = useGetCategoriesTotalsQuery();

  const formattedData = {
    items: (data?.categories ?? []).map((category) => ({
      label: category.description,
      totalIncome: category.totalIncome,
      totalExpense: category.totalExpense,
      balance: category.balance,
    })),
    totalIncome: data?.totalIncome ?? 0,
    totalExpense: data?.totalExpense ?? 0,
    balance: data?.balance ?? 0,
  };

  return (
    <div className="space-y-6 w-full h-full flex flex-col">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Totais por Categoria
        </h1>
        <span className="text-gray-500">Resumo financeiro por categoria</span>
      </div>

      {formattedData.items?.length > 0 && (
        <TotalsTable data={formattedData} labelHeader="Categoria" />
      )}

      {formattedData.items?.length === 0 && (
        <div className="flex flex-col items-center justify-center top-1/2 text-center h-full w-full">
          <MagnifyingGlassIcon
            size={150}
            weight="duotone"
            className="text-gray-400"
          />
          <span className="mt-2 text-gray-600">
            Nenhuma categoria cadastrada
          </span>
        </div>
      )}
    </div>
  );
};

export { CategoryTotals };
