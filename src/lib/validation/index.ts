import * as z from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, {message : "Too short name"}).max(50),
    username: z.string().min(2, {message : "Too short name"}).max(50),
    email: z.string().email(),
    password: z.string().min(2, {message: "Password must be greater than or equals to 8 characters"}),
  });