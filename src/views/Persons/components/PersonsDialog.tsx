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

const PersonsDialog = ({ ...props }: PersonsDialogProps) => {
  const isEditing = !!props.person;

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEditing
              ? `Editar ${props.person?.name}`
              : "Cadastrar nova pessoa"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2 flex flex-col gap-2 ">
            <Label htmlFor="name">Nome</Label>
            <Input
              defaultValue={props.person?.name}
              placeholder="Digite o nome"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Idade</Label>
            <Input
              type="number"
              defaultValue={props.person?.age}
              placeholder="Digite a idade"
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            className="flex px-2 py-1 bg-yellow-500 hover:bg-yellow-600 rounded transition hover:text-white"
            onClick={() => props.onOpenChange(false)}
          >
            Cancelar
          </Button>

          <Button
            className="flex px-2 py-1 bg-green-500 hover:bg-green-600 rounded transition hover:text-white"
            onClick={() => console.log("salvo")}
          >
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { PersonsDialog };
