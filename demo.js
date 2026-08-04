// var x="aaa";
// console.log(x);

// var fs = require('fs');
// fs.writeFileSync("Hello.txt","hello hi how are ");

// console.log(__dirname)
// console.log(__filename)

// create Server
// const http= require('http')

// function dataControl(req,resp)
// {
//     resp.write("<h1>Hello hello</h1>")
//     resp.end();
// }

// http.createServer((req,resp)=>{

//     resp.write("<h1>Hello Hi</h1>")
//     resp.end();

// }).listen(4500);

//  http.createServer(dataControl).listen(4500)

// var colors = require('colors');
// console.log('i like  '.underline.red);

// SIMPLE API

const http = require('http');
const data = require('./data');
http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application\json' });
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`);
//     readline.close();
// });

// Require would make the prompt
// package available to use
// const prompt = require("prompt");

// function add() {

//   prompt.start();

//   prompt.get(["num1", "num2"],
//     function (err, res) {

//       var sum = parseFloat(res.num1)
//         + parseFloat(res.num2);

//       console.log("Sum of " + sum);

//     });
// }

// add();

//  const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("Hello from Node.js Server!");
// });

// server.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });


