// src/services/users.service.js
const { prisma } = require('../utils/prisma'); // export initialized client
const { validateUser } = require('../utils/validators');

module.exports = {
  list: () => prisma.user.findMany(),
  getById: (id) => prisma.user.findUnique({ where: { id: Number(id) } }),
  create: async (data) => {
    validateUser(data);
    return prisma.user.create({ data });
  },
  update: async (id, data) => {
    validateUser(data, { partial: true });
    return prisma.user.update({ where: { id: Number(id) }, data });
  },
  remove: (id) => prisma.user.delete({ where: { id: Number(id) } }),
};
