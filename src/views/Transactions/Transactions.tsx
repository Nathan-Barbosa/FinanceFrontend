import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useGetTransactionsQuery } from "@/services/TransactionsService/TransactionsService.queries";
import { TransactionsDialog } from "./components";
import { useState } from "react";
import { CATEGORY_PURPOSE } from "@/constants";

const Transactions = () => {
  const [openTransactionsDialog, setOpenTransactionsDialog] =
    useState<boolean>(false);

  const { data: transactions } = useGetTransactionsQuery();
  return (
    <div className="space-y-6 h-full w-full flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Transações</h1>
          <span className="text-gray-600">Lista de transações cadastradas</span>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => setOpenTransactionsDialog(true)}
            className="flex px-2 py-1 bg-blue-500 hover:bg-blue-600 rounded hover:text-white transition"
          >
            Adicionar transação
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <thead className="bg-gray-50 ">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Pessoa
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Descrição
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Valor
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Categoria
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Tipo
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions &&
              transactions.map((transaction) => {
                const purpose = CATEGORY_PURPOSE[transaction.type];

                return (
                  <tr
                    key={transaction.id}
                    className="hover:bg-gray-100 transition"
                  >
                    <td className="px-4 py-2 text-gray-600">
                      {transaction.id}
                    </td>
                    <td className="px-4 py-2">{transaction.personName}</td>
                    <td className="px-4 py-2 text-gray-600">
                      {transaction.description}
                    </td>
                    <td className="px-4 py-2">{transaction.value}</td>
                    <td className="px-4 py-2">
                      {transaction.categoryDescription}
                    </td>
                    <td className={`px-4 py-2 ${purpose.color}`}>
                      {purpose.label}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {transactions?.length == 0 && (
        <div className="flex flex-col items-center justify-center top-1/2 text-center h-full w-full">
          <MagnifyingGlassIcon
            size={150}
            weight="duotone"
            className="text-gray-400"
          />
          <span className="mt-2 text-gray-600">
            Nenhuma categoria encontrada ou cadastrada
          </span>
        </div>
      )}

      <TransactionsDialog
        open={openTransactionsDialog}
        onOpenChange={setOpenTransactionsDialog}
      />
    </div>
  );
};

export { Transactions };
