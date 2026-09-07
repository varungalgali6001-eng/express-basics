const express = require("express");

const app = express();

const responseTimeLogger = (req, res, next) => {
    const startTime = Date.now();

    res.on("finish", () => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;

        console.log(
            req.method,
            req.url,
            "-",
            responseTime,
            "ms"
        );
    });

    next();
};

app.use(responseTimeLogger);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/products", (req, res) => {
    res.send("Product List");
});

app.get("/users", (req, res) => {
    res.send("User List");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});