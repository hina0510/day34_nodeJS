const http = require("http"); //require("http") : http모듈을 import
const fs = require("fs");
/*
request : 사용자의 정보를 저장하는 객체
response : 사용자에게 응답하는 경우 사용하는 객체
*/
const app = http.createServer((request, response)=>{
    console.log("연결되었습니다");
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});   //한글로 깨지지 않고 입력됨
    console.log(request.url);
    if(request.url=="/"){
        response.end("default page");
    }else if(request.url=="/test"){
        fs.readFile("./test.html", (err,data)=>{
            // err 없으면 null, err 발생하면 err 내용
            if(err){
                throw err;
            }
            response.end(data);
        });
        //response.end("test page");
    }
    
});
//app.listen(3000);    //3000번 포트로 구현
app.listen(3000, "192.168.42.97");  //나의 ip를 입력

