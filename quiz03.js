const express = require("express");
const app = express();

app.set("views", "./");
app.set("view engine", "ejs");

app.get("/url", (req, res)=>{
    context={
        "url":[
            {"네이버":"https://www.naver.com/"},
            {"구글":"https://www.google.co.kr/"},
            {"다음":"http://www.daum.net/"} 
        ]
    }
    res.render("url", {context:context});
});
app.listen(3000, ()=>{console.log("server 연동")});