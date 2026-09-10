import express from "express";
import User from "../model/userModel.js";

const userRouter = express.Router();

// POST: Add a new user
userRouter.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({
            message: "User created successfully",
            data: user
        });
    } catch (error) {
        res.status(400).json({
            message: "Failed to create user",
            error: error.message
        });
    }
});

// GET: Retrieve all users
userRouter.get("/", async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            message: "Users retrieved successfully",
            data: users
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve users",
            error: error.message
        });
    }
});

export default userRouter;