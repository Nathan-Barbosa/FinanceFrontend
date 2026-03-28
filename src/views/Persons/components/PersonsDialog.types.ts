import type { PersonsDTO } from "@/models/Persons";

type PersonsDialogProps = {
  person: PersonsDTO | null;
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export type { PersonsDialogProps };
