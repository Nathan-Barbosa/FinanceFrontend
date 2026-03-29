import { CategoryPurpose, CategoryPurposeLabel } from "@/constants";
import type { CategoriesDTO } from "@/models";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

const Categories = () => {
  const categories: CategoriesDTO[] = [
    {
      id: "1",
      description: "Alimentação",
      purpose: CategoryPurpose.Expense,
    },
    {
      id: "2",
      description: "Salário",
      purpose: CategoryPurpose.Income,
    },
  ];

  return (
    <div className="space-y-6 h-full w-full flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Caregorias</h1>
          <span className="text-gray-600">Lista de pessoas cadastradas</span>
        </div>
        <div className="flex justify-end">
          <button
            className="flex px-2 py-1 bg-blue-500 hover:bg-blue-600 rounded hover:text-white transition"
            onClick={() => console.log("abrir modal")}
          >
            Adicionar categoria
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
                Descrição
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Finalidade
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories &&
              categories.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100 transition">
                  <td className="px-4 py-2 text-gray-600">{user.id}</td>
                  <td className="px-4 py-2 text-gray-600">
                    {user.description}
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    {CategoryPurposeLabel[user.purpose]}
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    <div className="flex flex-wrap gap-2 justify-end">
                      <button
                        className="px-3 py-1 bg-green-400 rounded hover:bg-green-600 hover:text-white transition"
                        onClick={() => console.log("editar categoria")}
                      >
                        Editar
                      </button>
                      <button
                        className="px-3 py-1 bg-red-400 rounded hover:bg-red-600 hover:text-white transition"
                        onClick={() => console.log("excluir")}
                      >
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {categories.length == 0 && (
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
    </div>
  );
};

export { Categories };
