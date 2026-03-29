import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type { CategoriesDialogProps } from "./CategoriesDialog.types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CATEGORY_PURPOSE } from "@/constants";
import { Controller, useForm } from "react-hook-form";
import type { CategoriesFormData } from "../Categories.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema } from "../Categories.schemas";
import { usePostCategoryQuery } from "@/services/CategoriesService";
import { toast } from "sonner";
import { useEffect } from "react";

const CategoriesDialog = ({ open, onOpenChange }: CategoriesDialogProps) => {
  const createCategoryMutation = usePostCategoryQuery();

  const form = useForm<CategoriesFormData>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      description: "",
      purpose: CATEGORY_PURPOSE.Expense.value,
    },
  });

  const onSubmit = (data: CategoriesFormData) => {
    createCategoryMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Categoria criada com sucesso!");

        form.reset();
        onOpenChange(false);
      },
      onError: () => {
        toast.error("Erro ao criar categoria");
      },
    });
  };

  useEffect(() => {
    if (open) {
      form.reset({
        description: "",
        purpose: CATEGORY_PURPOSE.Expense.value,
      });
    }
  }, [open, form]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar nova categoria</DialogTitle>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2 flex flex-col py-2">
            <Label>Descrição</Label>
            <Input {...form.register("description")} />
          </div>

          <div className="space-y-2 flex flex-col py-2">
            <Label>Finalidade</Label>
            <Controller
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a finalidade" />
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
              disabled={createCategoryMutation.isPending}
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

export { CategoriesDialog };
