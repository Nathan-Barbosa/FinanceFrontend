import { z } from "zod";

const personSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório").max(200),
  age: z.number(),
});

export { personSchema };
