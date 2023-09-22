import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import postRoute from "./Routes/post.js";
import getRoute from "./Routes/get.js";


const app=express();
const port=4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/",postRoute);
app.use("/",getRoute);

app.listen(port,()=>{
    console.log(`Server start at ${port}`);
})