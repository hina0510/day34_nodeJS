const express = require("express");
const app = express();

app.set("views", "./");
app.set("view engine", "ejs");

app.get("/member", (req, res)=>{
    context = {
        arr : ['홍길동', '20살', '산골짜기'],
        obj : {'name':'김개똥', 'age':'30살', 'addr':'개똥별'},
        name : '고길동', 'age' : '40살', 'addr' : '마포구'
    }
    res.render("member", {context:context});
});
app.get("/for", (req, res)=>{
    const arr = ["홍길동", "김개똥", "고길동"];
    res.render("for", {name : arr});
});
app.get("/if", (req, res)=>{
    res.render("if");
});
app.listen(3000,  ()=>{console.log("server 연동")});