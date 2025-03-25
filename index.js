const express = require("express")
const app = express();
const PORT = process.env.POST || 3000

app.get("/",(req,res)=>{
    res.send("Hello Rander..")
})



app.listen(PORT,(req,res)=>{
console.log(`Server Runnint at ${PORT}`)
})