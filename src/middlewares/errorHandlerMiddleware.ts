import { NextFunction, Request, Response } from 'express';

function errorHandlerMiddleware(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line
  next: NextFunction,
) {
  return res.sendStatus(500);
}

export default {
  errorHandlerMiddleware,
};
