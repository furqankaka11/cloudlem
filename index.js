// const express = require("express")
// const app = express();
// app.get("/",function(req, res) {
// res.sendFile(__dirname + "/index.html")

// })
// app.get("*",function(req, res){
//     res.send("page is not found")
// } )
// app.listen(3001, function(){
//     console.log("check localhost 3001");
// });


var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8090);
