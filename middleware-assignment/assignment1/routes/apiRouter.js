const express = require("express");

const router = express.Router();

const routerLogger = (req, res, next) => {
    const dateTime = new Date().toLocaleString();

    console.log(
        req.method,
        req.baseUrl + req.url,
        dateTime
    );

    next();
};

router.use(routerLogger);

router.get("/students", (req, res) => {
    res.send("Students List");
});

router.get("/courses", (req, res) => {
    res.send("Courses List");
});

router.get("/faculty", (req, res) => {
    res.send("Faculty List");
});

module.exports = router;