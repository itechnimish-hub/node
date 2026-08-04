const express= require('express');
const dbConnect = require('./dbconnect');
const app=express();
app.use(express.json());

app.get('/list',async (req,resp)=>{

 let data = await dbConnect();
 data = await data.find().toArray();
 resp.send(data);

});

app.post("/add", async (req,resp)=>{
    let data = await dbConnect();

    
    let result = await data.insertOne(req.body)
    resp.send(result)

})


app.listen(4000);