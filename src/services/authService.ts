import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authRepository from '../Repositories/authRepository.js';

async function findEmail(email: string) {
  const searchEmail = await authRepository.verifyEmail(email);
  if (searchEmail) {
    throw { message: 'Email already in use', type: 'duplicate value' };
  }
}

function checkPassword(plainPassword: string, hashedPassword: string) {
  const validation = bcrypt.compareSync(plainPassword, hashedPassword);
  if (!validation) {
    throw { message: 'password incorrect', type: 'validation error' };
  }
}

async function createUser(email: string, password: string) {
  const passwordHash = bcrypt.hashSync(password, 10);
  authRepository.createUser(email, passwordHash);
}

async function login(email: string, password: string) {
  const user = await authRepository.verifyEmail(email);
  if (!user) {
    throw { message: 'email not found', type: 'validation error' };
  }
  checkPassword(password, user.password);
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  return token;
}

const authService = {
  login,
  createUser,
  findEmail,
};

export default authService;
