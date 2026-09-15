import Joi from "joi";

const studentSchema = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    course: Joi.string().trim().required(),
    age: Joi.number().integer().min(1).max(120).required()
});

export default studentSchema;