import mongoose from "mongoose";

const teacherModelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }
);

const Teacher = mongoose.model("Teacher", teacherModelSchema);

export default Teacher;