import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import type { PersonsDialogProps } from "./PersonsDialog.types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { personSchema } from "../Persons.schemas";
import type { PersonFormData } from "../Persons.types";
import { usePostPersonQuery, usePutPersonQuery } from "@/services";

const PersonsDialog = ({ person, open, onOpenChange }: PersonsDialogProps) => {
  const isEditing = !!person;

  const form = useForm<PersonFormData>({
    resolver: zodResolver(personSchema),
    defaultValues: {
      name: person?.name ?? "",
      age: person?.age ?? 0,
    },
  });

  useEffect(() => {
    form.reset({
      name: person?.name ?? "",
      age: person?.age ?? 0,
    });
  }, [person, form]);

  const createMutation = usePostPersonQuery();
  const updateMutation = usePutPersonQuery();

  const onSubmit = (data: PersonFormData) => {
    if (isEditing && person) {
      updateMutation.mutate({
        id: String(person.id),
        payload: data,
      });
    } else {
      createMutation.mutate(data);
    }

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEditing ? `Editar ${person?.name}` : "Cadastrar nova pessoa"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label>Nome</Label>
            <Input {...form.register("name")} />
          </div>

          <div className="space-y-2">
            <Label>Idade</Label>
            <Input
              type="number"
              {...form.register("age", { valueAsNumber: true })}
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
              className="flex px-2 py-1 bg-green-500 hover:bg-green-600 rounded transition hover:text-white"
              disabled={createMutation.isPending || updateMutation.isPending}
            >
              {isEditing ? "Salvar" : "Criar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { PersonsDialog };
