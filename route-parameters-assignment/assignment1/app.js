const express = require("express");

const app = express();
const port = 3000;

app.get("/student/:id", (req, res) => {
    const studentId = req.params.id;

    res.send(`Student ID: ${studentId}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});