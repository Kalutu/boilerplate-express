let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + '/public'));

app.get("/",function(req,res){
  res.sendFile(absolutePath = __dirname + '/views/index.html');
})





































 module.exports = app;
