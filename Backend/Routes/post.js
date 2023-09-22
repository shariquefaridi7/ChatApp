import express from "express";
import fs from 'fs';

const router=express.Router();

router.post("/post",(req,res)=>{
    const {obj}=req.body;
 
fs.appendFileSync("data.txt",`  ${obj.resp} : `);
fs.appendFileSync("data.txt",`${obj.data} ,`);

res.send("Data Post Succeessfully");

});

export default router;