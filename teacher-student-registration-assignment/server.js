import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import teacherRouter from "./router/teacherRouter.js";
import studentRouter from "./router/studentRouter.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);

mongoose
    .connect(process.env.MONGODB_URI, { dbName: "assignment11" })
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });