import joi from 'joi';

const userAuthSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
export default userAuthSchema;
