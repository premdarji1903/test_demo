const express=require('express');
const app=express();
const port=process.env.PORT||2000;
const path=require('path');
const staticpath=path.join(__dirname,"../src/web");
const use=express.static(staticpath);

app.use(use);
app.get("/",(req,res)=>{
    res.end("server started");
})
app.get("/home",(req,res)=>{
  res.end("server started");
  app.use(use);
})

app.listen(port,()=>{
    console.log(`server is started and listening ${port}`)
});








//app.get("/json",(req,res)=>{
  //  res.json([{
    //    id:"10",
      //  name:"prem"
    //}])
    //res.send();//FOR ANY JSON FILE
//})
//app.get("/html",(req,res)=>{
 //   res.write("<h1>hello welcome to the html page</h1>")
  //  res.end();
//})---->for any html file