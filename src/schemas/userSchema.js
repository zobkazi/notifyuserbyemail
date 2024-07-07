const { z } = require('zod');

const userSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
  agreeTerms: z.boolean().default(false),
});

module.exports = userSchema;