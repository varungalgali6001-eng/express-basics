const express = require("express");

const app = express();
const port = 3000;

app.get("/student/:id", (req, res) => {
    const studentId = req.params.id;
    const name = req.query.name;
    const course = req.query.course;

    res.send(`
        Student ID: ${studentId}<br>
        Name: ${name}<br>
        Course: ${course}
    `);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});