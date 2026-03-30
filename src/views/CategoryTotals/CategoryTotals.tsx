import { useGetCategoriesTotalsQuery } from "@/services";

const CategoryTotals = () => {
  const { data } = useGetCategoriesTotalsQuery();
  console.log(data);
  return (
    <div className="space-y-6 w-full h-full flex flex-col">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Totais por Categoria
        </h1>
        <span className="text-gray-500">Resumo financeiro por categoria</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Categoria</th>
              <th className="px-4 py-2 text-left">Receita</th>
              <th className="px-4 py-2 text-left">Despesa</th>
              <th className="px-4 py-2 text-left">Saldo</th>
            </tr>
          </thead>

          <tbody>
            {data?.categories.map((category) => (
              <tr key={category.description}>
                <td className="px-4 py-2">{category.description}</td>

                <td className="px-4 py-2 text-green-500">
                  {category.totalIncome.toFixed(2)}
                </td>

                <td className="px-4 py-2 text-red-500">
                  {category.totalExpense.toFixed(2)}
                </td>

                <td
                  className={`px-4 py-2 ${
                    category.balance >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {category.balance.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot className="bg-gray-100 font-semibold">
            <tr>
              <td className="px-4 py-2">TOTAL</td>

              <td className="px-4 py-2 text-green-700">
                {data?.totalIncome.toFixed(2)}
              </td>

              <td className="px-4 py-2 text-red-700">
                {data?.totalExpense.toFixed(2)}
              </td>

              <td
                className={`px-4 py-2 ${
                  data && data?.balance >= 0 ? "text-green-700" : "text-red-700"
                }`}
              >
                {data?.balance.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export { CategoryTotals };
