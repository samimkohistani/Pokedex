
const express = require("express");
const app = express();
const port = 3000;

app.get("/greeting", (request, response) => {
    response.send("Hello, stranger")
  });

  



  

  app.listen(port, () => {
    console.log("listening on port", port)
  });