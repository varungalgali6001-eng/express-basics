import express from "express";
import bcrypt from "bcrypt";
import Teacher from "../model/teacherModel.js";
import teacherSchema from "../schema/teacherSchema.js";

const teacherRouter = express.Router();

teacherRouter.post("/register", async (req, res) => {
    try {
        const { error, value } = teacherSchema.validate(req.body, {
            abortEarly: false
        });

        if (error) {
            return res.status(400).json({
                message: "Validation failed",
                errors: error.details.map((detail) => detail.message)
            });
        }

        const existingTeacher = await Teacher.findOne({
            email: value.email
        });

        if (existingTeacher) {
            return res.status(409).json({
                message: "Teacher email already registered"
            });
        }

        const hashedPassword = await bcrypt.hash(value.password, 10);

        const teacher = await Teacher.create({
            ...value,
            password: hashedPassword
        });

        res.status(201).json({
            message: "Teacher registered successfully",
            data: {
                id: teacher._id,
                name: teacher.name,
                email: teacher.email,
                subject: teacher.subject
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to register teacher",
            error: error.message
        });
    }
});

export default teacherRouter;