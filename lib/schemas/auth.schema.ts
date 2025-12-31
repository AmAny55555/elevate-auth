import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long");

export const RecoverSchema = z.object({
  email: emailSchema,
});

export type RecoverFormValues = z.infer<typeof RecoverSchema>;

export const LoginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
});

export type LoginFormValues = z.infer<typeof LoginSchema>;

export const RegisterSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),

    lastName: z.string().min(2, "Last name must be at least 2 characters"),

    email: emailSchema,

    password: passwordSchema,

    confirmPassword: z.string().min(8, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type RegisterFormValues = z.infer<typeof RegisterSchema>;
