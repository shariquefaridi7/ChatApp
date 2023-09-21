import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import fs from "fs";


const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.post("/post",(req,res)=>{
    const {data}=req.body;
   fs.writeFileSync('./data.txt',data);
    res.send('Data saved successfully');
 

   
});

app.get("/get",(req,res)=>{
let data=fs.readFileSync("./data.txt","utf-8");
res.send(data);

})


app.listen(4000,()=>{
    console.log("server Start");
});
