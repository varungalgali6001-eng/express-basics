import express from "express";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/users", userRouter);

mongoose
    .connect("mongodb://127.0.0.1:27017/assignment8")
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error.message);
    });