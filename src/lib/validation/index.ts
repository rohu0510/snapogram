import * as z from "zod";


const si = z.object({
    username: z.string().min(2).max(50),
  });