const http = require('http');
const server =
http.createServer ((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });   
    if (request.url === "/produto"){
      response.end("Rota Produto");
    }
    if (request.url === "/usuario"){
      response.end("Rota usuario");
    }
    response.end("Outra qualquer rota");
}); 
server.listen(4000);