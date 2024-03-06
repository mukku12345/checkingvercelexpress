const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send('Hii welcome to my website !')
})

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log("server is running on port:",port)
})

module.exports = app;