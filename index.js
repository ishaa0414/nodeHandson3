const express = require("express");
const app = express();

const middleware=(req,res,next)=>{
    console.log("middleware one")
}
app.use(middleware)

const middleware2=(req,res,next)=>{
    console.log("middleware two")
}
app.get("/api",(req,res)=>{
    res.send("Abc")
})
app.get("/login",(req,res)=>{
    res.send("Pqr")
})
app.get("/signup",middleware2,()=>{
res.send("Xyz")
})
app.get("/home",middleware2,()=>{
    res.send("Xyz")
    })
app.listen(2665, () => {
    console.log("The server is running")
})