require('dotenv').config();
const express=require('express');
const connectDB=require("./src/config/db.js");

const app= express();
app.use(express.json());
connectDB();

app.get("/",(req,res)=>{
    res.send("running .....");
});


app.listen(3000,()=>{
    console.log(">>>>> http://localhost:3000/");
});


