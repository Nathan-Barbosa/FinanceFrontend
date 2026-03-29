import { CATEGORY_PURPOSE } from "@/constants";
import { z } from "zod";

const categorySchema = z.object({
  description: z.string().min(1, "Nome é obrigatório").max(400),
  purpose: z.enum(
    Object.values(CATEGORY_PURPOSE).map((item) => item.value) as [
      "Expense",
      "Income",
      "Both",
    ],
  ),
});

export { categorySchema };
