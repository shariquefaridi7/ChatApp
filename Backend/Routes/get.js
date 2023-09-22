import express from "express";
import fs from 'fs';

const router=express.Router();

router.get("/get",(req,res)=>{
   
  
let data=fs.readFileSync("data.txt","utf-8");
console.log(data)
res.send(data);

});

export default router;