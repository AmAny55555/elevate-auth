import { z } from "zod";

export const RegisterSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),

    lastName: z.string().min(2, "Last name must be at least 2 characters"),

    email: z.string().email("Please enter a valid email address"),

    password: z.string().min(8, "Password must be at least 8 characters long"),

    confirmPassword: z.string().min(8, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type RegisterFormValues = z.infer<typeof RegisterSchema>;
