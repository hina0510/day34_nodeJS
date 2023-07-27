const express = require("express");
const app = express();

app.set("views", "./views"); //파일이 있는 큰 범위

app.set("view engine", "ejs");
app.get("/", (req,res)=>{
    res.render("index", {key : "value"});   // key를 사용해 value를 가져올 수 있음
});
//app.get("url 경로", (req,res)=>{res.render("범위 내에서 파일이 있는 경로");});

app.get("/login", (req,res)=>{
    const name="홍길동";
    res.render("login", {n : name});
});
app.get("/logout", (req,res)=>{
    const context = {
        key1 : "값-1", key2 : "값-2", 
        key3 : [10,20,30], key4 : {k1:"k11", k2:"k22"}
    };
    res.render("logout", {context, context});
});

app.listen(3000, ()=>{console.log("3000 server 연동")});