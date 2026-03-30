import type { TotalsTableProps } from "./TotalsTable.types";

const TotalsTable = ({ data, labelHeader }: TotalsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left">{labelHeader}</th>
            <th className="px-4 py-2 text-left">Receita</th>
            <th className="px-4 py-2 text-left">Despesa</th>
            <th className="px-4 py-2 text-left">Saldo</th>
          </tr>
        </thead>

        <tbody>
          {data?.items?.map((items) => (
            <tr key={items.label}>
              <td className="px-4 py-2">{items.label}</td>

              <td className="px-4 py-2 text-green-500">{items.totalIncome}</td>

              <td className="px-4 py-2 text-red-500">{items.totalExpense}</td>

              <td
                className={`px-4 py-2 ${
                  items.balance >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {items.balance}
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot className="bg-gray-100 font-semibold">
          <tr>
            <td className="px-4 py-2">TOTAL</td>

            <td className="px-4 py-2 text-green-700">{data?.totalIncome}</td>

            <td className="px-4 py-2 text-red-700">{data?.totalExpense}</td>

            <td
              className={`px-4 py-2 ${
                data && data?.balance >= 0 ? "text-green-700" : "text-red-700"
              }`}
            >
              {data?.balance}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export { TotalsTable };
