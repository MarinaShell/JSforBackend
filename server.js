const express = require("express");

const app = express();
const port = 3000;

const customLogger = function(request, response, next){
    console.log("This is log");
    next();
}

app.use("/about", customLogger);

app.get('/', (request, response)=>{
    response.send("<h1>Hello, friends</h1>");
});

app.get('/about', (request, response)=>{
    response.send("<h1>This is about page</h1>");
});



app.listen(port, ()=>{
    console.log(`Server Listening on port ${port}`);
});