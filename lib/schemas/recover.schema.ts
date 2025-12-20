import { z } from "zod";

/* =========================
   Recover Password Schema
========================= */
export const RecoverSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type RecoverFormValues = z.infer<typeof RecoverSchema>;
