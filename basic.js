const express = require('express');
const app = express();

app.get("/user", (req, resp) => {
    const name = req.query.name;
    resp.send("Welcome, This is an About Page " + name);
});

app.listen(4000);