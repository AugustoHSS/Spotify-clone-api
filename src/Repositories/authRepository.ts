import prisma from '../database.js';

async function createUser(email: string, password: string) {
  await prisma.users.create({ data: { email, password } });
}

async function verifyEmail(email: string) {
  const emailFound = await prisma.users.findUnique({ where: { email } });
  return emailFound;
}

const authRepository = {
  verifyEmail,
  createUser,
};

export default authRepository;
