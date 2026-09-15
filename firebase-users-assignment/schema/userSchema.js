import Joi from "joi";

const userSchema = Joi.object({
    name: Joi.string().trim().required(),

    email: Joi.string().email().required(),

    age: Joi.number().integer().min(1).max(120).required(),

    course: Joi.string().trim().required()
});

export default userSchema;