import type z from "zod";
import { categorySchema } from "./Categories.schemas";

type CategoriesFormData = z.infer<typeof categorySchema>;

export type { CategoriesFormData };
