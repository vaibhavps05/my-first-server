const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send("Hello World");
});

app.get("/contact", function(req, res){
    res.send("contact me at ....gmail.com");
});

app.get("/about", function(req, res){
    res.send("This site is owned by vaibhav");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});