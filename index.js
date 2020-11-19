const http = require('http');
const fs = require('fs');

http.createServer(function(req,res) {
  fs.readFile('home.html', function(err,data){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(data);
    res.end();
  })
}).listen(8080,'localhost', function(){
  console.log("server started");
});


