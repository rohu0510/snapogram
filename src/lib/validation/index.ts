import * as z from "zod";

<<<<<<< HEAD
export const SignupValidation = z.object({
    name: z.string().min(2, {message : "Too short name"}).max(50),
    username: z.string().min(2, {message : "Too short name"}).max(50),
    email: z.string().email(),
    password: z.string().min(2, {message: "Password must be greater than or equals to 8 characters"}),
=======

export const SignupValidation = z.object({
    username: z.string().min(2).max(50),
>>>>>>> 18f5991bc7b41f3de180267daf2ad6fc8fb93f20
  });