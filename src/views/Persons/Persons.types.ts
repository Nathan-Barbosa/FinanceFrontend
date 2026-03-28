import type z from "zod";
import { personSchema } from "./Persons.schemas";

type PersonFormData = z.infer<typeof personSchema>;

export type { PersonFormData };
