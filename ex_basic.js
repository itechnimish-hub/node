// express routing

//const express = require('express');

//  const admin = express.Router();
// const app = express.Router();
// app.get("/", (req, resp) => {
//      const name = req.query.name;
//      console.log(name)
//     resp.send("This is an About Page"+name);
// });

// app.get("/user", (req, resp) => {
//     // const name = req.query.name;
//     resp.send("This is an user Page");
// });

// module.exports = app;

// app.get("/user", (req, resp) => {
//     // console.log(req.query.name)
//     resp.send("Welcome, This is a About Page" + req.query.name);
//     // resp.send("User");
// });

// app.get("/user", (req, resp) => {
//     const name = req.query.name;
//     resp.send("Welcome, This is an About Page " + name);
// });

// app.get("/about", (abc, resp) => {
//     resp.send("Welcome, This is a About Page"+abc.query.name);
// });

// app.get("/help", (req, resp) => {
//     resp.send("Welcome, This is a Help Page");
// });


// module.exports = app;
// express html page render

//  const express = require('express');
//  const path = require('path');

//  const app = express();
//  const publicPath=path.join(__dirname,'public')

//  console.log(publicPath)

// app.use(express.static(publicPath));

// app.listen(5000);

// Hide extenstion of page and not found page

// const express = require('express');

 const express = require('express');


 const app = express.Router();
  const path = require('path'); 
 const publicPath = path.join(__dirname, 'public');

app.get("", (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (_, resp) => {
    resp.sendFile(`${publicPath}/about.html`);
});

app.get("*", (_, resp) => {
    resp.sendFile(`${publicPath}/help.html`);

});
  module.exports = app;
// resp.end(`
// <a href="/">back home</a>`)
//   app.listen(5000);
// app.listen(1000);



