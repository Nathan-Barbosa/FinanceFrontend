import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { TransactionsDialogProps } from "./TransactionsDialog.types";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  useGetCategoriesQuery,
  useGetPersonsQuery,
  usePostTransactionsQuery,
} from "@/services";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  transactionSchema,
  type TransactionsFormData,
} from "../Tansactions.types";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORY_PURPOSE } from "@/constants";

const TransactionsDialog = ({
  open,
  onOpenChange,
}: TransactionsDialogProps) => {
  const { data: categories } = useGetCategoriesQuery();
  const { data: persons } = useGetPersonsQuery();

  const createTransactionMutation = usePostTransactionsQuery();

  const form = useForm<TransactionsFormData>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      description: "",
      value: 0,
      type: "Expense",
      personId: "",
      categoryId: "",
    },
  });

  const onSubmit = (data: TransactionsFormData) => {
    createTransactionMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Transação criada com sucesso!");
        onOpenChange(false);
        form.reset();
      },
      onError: () => {
        toast.error("Erro ao criar transação");
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar nova transação</DialogTitle>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label>Descrição</Label>
            <Input {...form.register("description")} />
          </div>

          <div className="space-y-2">
            <Label>Valor</Label>
            <Input
              type="number"
              {...form.register("value", { valueAsNumber: true })}
            />
          </div>

          <div className="space-y-2">
            <Label>Tipo</Label>

            <Controller
              control={form.control}
              name="type"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>

                  <SelectContent>
                    {Object.values(CATEGORY_PURPOSE).map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="space-y-2">
            <Label>Categoria</Label>

            <Controller
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>

                  <SelectContent>
                    {categories?.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="space-y-2">
            <Label>Pessoa</Label>
            <Controller
              control={form.control}
              name="personId"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a pessoa" />
                  </SelectTrigger>

                  <SelectContent>
                    {persons?.map((person) => (
                      <SelectItem key={person.id} value={person.id}>
                        {person.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              className="flex px-2 py-1 bg-yellow-500 hover:bg-yellow-600 rounded transition hover:text-white"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              disabled={createTransactionMutation.isPending}
              className="flex px-2 py-1 bg-green-500 hover:bg-green-600 rounded transition hover:text-white"
            >
              Criar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { TransactionsDialog };
