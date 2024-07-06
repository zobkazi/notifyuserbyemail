import {z} from 'zod';

export const UserDTO = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
})