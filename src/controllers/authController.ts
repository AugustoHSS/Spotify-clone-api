import { Request, Response } from 'express';
import userAuthSchema from '../schemas/userAuthSchema.js';
import authService from '../services/authService.js';

function validateSchema(req: Request) {
  const validation = userAuthSchema.validate(req.body);
  if (validation.error) {
    throw { message: validation.error.details[0].message, type: 'schema validate' };
  }
}

async function signUp(req: Request, res: Response) {
  const { email, password } = req.body;

  validateSchema(req);
  await authService.findEmail(email);
  await authService.createUser(email, password);
  res.sendStatus(201);
}

async function signIn(req: Request, res: Response) {
  const { email, password } = req.body;
  validateSchema(req);
  const token = await authService.login(email, password);
  res.send({ token });
}

const authController = {
  signIn,
  signUp,
};

export default authController;
