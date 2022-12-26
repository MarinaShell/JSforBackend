const http = require("http");

http 
    .createServer(function(request, response){
      //  response.writeHead(200, {"Content-Type":"text/plain"});
      //  response.end("Hello, SkillFactory!");
      const url = request.url;
      if (url === "/"){
        response.setHeader( "Content-Type", "text/html");
        response.write("<html>");
        response.write("<head><title>SkillFactory</title></head>");
        response.write("<body> <h1>Hello, friends</h1></body>");
        response.write("</html>");
        return response.end();  
      }
      if (url === "/about"){
        response.setHeader( "Content-Type", "text/html");
        response.write("<html>");
        response.write("<head><title>SkillFactory</title></head>");
        response.write("<body> <h1>This is about page</h1></body>");
        response.write("</html>");
        return response.end();  
      }

      return response.end(); 

    }
    )
    .listen(3000);

console.log("Running server at http://127.0.0.1:3000/");    