import express from "express";
import db from "../config/firebase.js";
import userSchema from "../schema/userSchema.js";

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
    try {
        const { error, value } = userSchema.validate(req.body, {
            abortEarly: false
        });

        if (error) {
            return res.status(400).json({
                message: "Validation failed",
                errors: error.details.map((detail) => detail.message)
            });
        }

        const userDocument = await db.collection("users").add(value);

        res.status(201).json({
            message: "User stored successfully",
            id: userDocument.id,
            data: value
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to store user",
            error: error.message
        });
    }
});

export default userRouter;