import express from 'express';
import authController from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/signin', authController.signIn);
authRouter.post('/signup', authController.signUp);

export default authRouter;
