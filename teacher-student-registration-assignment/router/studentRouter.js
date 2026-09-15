import express from "express";
import bcrypt from "bcrypt";
import Student from "../model/studentModel.js";
import studentSchema from "../schema/studentSchema.js";

const studentRouter = express.Router();

studentRouter.post("/register", async (req, res) => {
    try {
        const { error, value } = studentSchema.validate(req.body, {
            abortEarly: false
        });

        if (error) {
            return res.status(400).json({
                message: "Validation failed",
                errors: error.details.map((detail) => detail.message)
            });
        }

        const existingStudent = await Student.findOne({
            email: value.email
        });

        if (existingStudent) {
            return res.status(409).json({
                message: "Student email already registered"
            });
        }

        const hashedPassword = await bcrypt.hash(value.password, 10);

        const student = await Student.create({
            ...value,
            password: hashedPassword
        });

        res.status(201).json({
            message: "Student registered successfully",
            data: {
                id: student._id,
                name: student.name,
                email: student.email,
                course: student.course,
                age: student.age
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to register student",
            error: error.message
        });
    }
});

export default studentRouter;