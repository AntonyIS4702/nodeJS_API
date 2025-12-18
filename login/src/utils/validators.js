// src/utils/validators.js
const { z } = require('zod');

const userSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
});

function validateUser(data, opts = {}) {
  if (opts.partial) userSchema.partial().parse(data);
  else userSchema.parse(data);
}

module.exports = { validateUser };
