import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PersonsDialog } from "./components";
import type { PersonsDTO } from "@/models/Persons";
import { useGetPersonsQuery, useDeletePersonMutation } from "@/services";
import { toast } from "sonner";

const Persons = () => {
  const { data: persons, error } = useGetPersonsQuery();
  console.log(error);

  const [openPersonDialog, setOpenPersonDialog] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<PersonsDTO | null>(null);
  const [deletePersonDialog, setDeletePersonDialog] = useState<boolean>(false);

  const deleteMutation = useDeletePersonMutation();

  return (
    <div className="space-y-6 h-full w-full flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Pessoas</h1>
          <span className="text-gray-600">Lista de pessoas cadastradas</span>
        </div>
      </div>

      <div className="flex w-full justify-end">
        <button
          className="flex px-2 py-1 bg-blue-500 hover:bg-blue-600 rounded hover:text-white transition"
          onClick={() => {
            setSelectedPerson(null);
            setOpenPersonDialog(true);
          }}
        >
          Nova Pessoa
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <thead className="bg-gray-50 ">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Nome
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Idade
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {persons &&
              persons.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100 transition">
                  <td className="px-4 py-2 text-gray-600">{user.id}</td>
                  <td className="px-4 py-2 text-gray-600">{user.name}</td>
                  <td className="px-4 py-2 text-gray-600">{user.age}</td>
                  <td className="px-4 py-2 text-gray-600">
                    <div className="flex flex-wrap gap-2 justify-end">
                      <button
                        className="px-3 py-1 bg-green-400 rounded hover:bg-green-600 hover:text-white transition"
                        onClick={() => {
                          setSelectedPerson(user);
                          setOpenPersonDialog(true);
                        }}
                      >
                        Editar
                      </button>
                      <button
                        className="px-3 py-1 bg-red-400 rounded hover:bg-red-600 hover:text-white transition"
                        onClick={() => {
                          setDeletePersonDialog(true);
                          setSelectedPerson(user);
                        }}
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
      {persons?.length == 0 && (
        <div className="flex flex-col items-center justify-center top-1/2 text-center h-full w-full">
          <MagnifyingGlassIcon
            size={150}
            weight="duotone"
            className="text-gray-400"
          />
          <span className="mt-2 text-gray-600">
            Nenhum usuário encontrado ou cadastrado
          </span>
        </div>
      )}

      <PersonsDialog
        open={openPersonDialog}
        onOpenChange={setOpenPersonDialog}
        person={selectedPerson}
      />

      <Dialog open={deletePersonDialog} onOpenChange={setDeletePersonDialog}>
        <DialogContent className="bg-white p-6 rounded shadow-lg">
          <DialogHeader className="text-lg font-semibold">
            <DialogTitle>Excluir Pessoa</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir
              <strong> {selectedPerson?.name}</strong>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="flex gap-2 justify-end p-2 w-full">
              <button
                className="flex px-2 py-1 bg-yellow-500 hover:bg-yellow-600 rounded transition hover:text-white"
                onClick={() => setDeletePersonDialog(false)}
              >
                Cancelar
              </button>
              <button
                className="flex px-2 py-1 bg-red-500 hover:bg-red-600 rounded transition hover:text-white"
                onClick={() => {
                  if (selectedPerson) {
                    deleteMutation.mutate(String(selectedPerson.id), {
                      onSuccess: () => {
                        toast("Pessoa removida com sucesso!", {
                          className: "!bg-destructive !text-white",
                        });
                        setDeletePersonDialog(false);
                        setSelectedPerson(null);
                      },
                      onError: () => {
                        toast.error("Erro ao excluir pessoa");
                      },
                    });
                  }
                }}
                disabled={deleteMutation.isPending}
              >
                Excluir
              </button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export { Persons };
