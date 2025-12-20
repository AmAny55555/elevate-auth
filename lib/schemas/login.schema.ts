import { z } from "zod";

/* =========================
   Login Schema
========================= */
export const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),

  password: z.string().min(1, "Password is required"),
});

export type LoginFormValues = z.infer<typeof LoginSchema>;
