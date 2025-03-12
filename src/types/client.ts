import { clientSchema } from "../schemas/client";
import { z } from "zod";

export type Client = z.infer<typeof clientSchema>;
