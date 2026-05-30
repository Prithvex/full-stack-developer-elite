//this is just a test server 
//To see changes server fir se sart karo

const http = require('http');

const server = http.createServer(function(req, res){
    res.end("Hello World, My server is just started ")
})

server.listen(3001);