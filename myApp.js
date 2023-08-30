let express = require('express');
let app = express();

let bodyParser = require('body-parser');

app.use("/public", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next){
  console.log(req.method+" "+req.path+" - "+req.ip);
  next();
})


app.get("/",function(req,res){
  res.sendFile(absolutePath = __dirname + '/views/index.html');
});

app.get("/json",function(req,res){
  if(process.env["MESSAGE_STYLE"]=="uppercase"){
    res.json({"message": "HELLO JSON"});
  }
  else{
    res.json({"message": "Hello json"});
  }
  
});

app.get("/now",function(req, res, next){
  req.time = new Date().toString();
  next();
}, function(req, res){
  res.json({"time" : req.time});
});

app.get("/:word/echo", function(req, res){
  res.json({echo : req.params.word});
});

app.get("/name", function(req, res){
  res.json({name : req.query.first+" "+req.query.last});
});


































 module.exports = app;
