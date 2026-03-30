import { useGetPersonsTotalsQuery } from "@/services";

const PersonsTotals = () => {
  const { data } = useGetPersonsTotalsQuery();

  return (
    <div className="space-y-6 w-full h-full flex flex-col">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Totais por Pessoa</h1>
        <span className="text-gray-500">Resumo financeiro por pessoa</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Nome
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Receita
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Despesa
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Saldo
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {data?.persons.map((person) => (
              <tr key={person.name}>
                <td className="px-4 py-2">{person.name}</td>

                <td className="px-4 py-2 text-green-500 font-medium">
                  R$ {person.totalIncome.toFixed(2)}
                </td>

                <td className="px-4 py-2 text-red-500 font-medium">
                  R$ {person.totalExpense.toFixed(2)}
                </td>

                <td
                  className={`px-4 py-2 font-semibold ${
                    person.balance >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  R$ {person.balance.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot className="bg-gray-100 font-semibold">
            <tr>
              <td className="px-4 py-2">TOTAL</td>

              <td className="px-4 py-2 text-green-700">
                R$ {data?.totalIncome.toFixed(2)}
              </td>

              <td className="px-4 py-2 text-red-700">
                R$ {data?.totalExpense.toFixed(2)}
              </td>

              <td
                className={`px-4 py-2 ${
                  data && data.balance >= 0 ? "text-green-700" : "text-red-700"
                }`}
              >
                R$ {data?.balance.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export { PersonsTotals };
