// express routing

// const express = require('express');

// const app = express.Router();

// app.get("/", (req, resp) => {
//     // const name = req.query.name;
//     // console.log(name)
//     resp.send("This is an About Page"+name);
// });

// app.get("/user", (req, resp) => {
//     // const name = req.query.name;
//     resp.send("This is an user Page");
// });

//  module.exports = app;


// Hide extenstion of page and not found page

//  const express = require('express');
//  const app = express.Router();
//  const path = require('path'); 
//  const publicPath = path.join(__dirname, 'public');

// app.get("", (_, resp) => {
//     resp.sendFile(`${publicPath}/index.html`);
// });

// app.get("/about", (_, resp) => {
//     resp.sendFile(`${publicPath}/about.html`);
// });

// app.get("*", (_, resp) => {
//     resp.sendFile(`${publicPath}/help.html`);
// });

// module.exports = app;




