import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
const fs = require('fs');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.post("/post",(req,res)=>{
    const {data}=req.body;
    fs.writeFileSync('data.json', JSON.stringify(data));
    res.send('Data saved successfully');
    console.log(data);
   
});


app.listen(4000,()=>{
    console.log("server Start");
});
