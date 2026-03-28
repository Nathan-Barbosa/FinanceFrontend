import { z } from "zod";

const personSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  age: z.number(),
});

export { personSchema };
