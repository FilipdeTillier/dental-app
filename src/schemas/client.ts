import { z } from "zod";

export const clientSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  birthDate: z.date().optional(),
  address: z.string().optional(),
  notes: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  assignedToUserId: z.string(),
});
