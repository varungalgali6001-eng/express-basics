import Joi from "joi";

const teacherSchema = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    subject: Joi.string().trim().required()
});

export default teacherSchema;