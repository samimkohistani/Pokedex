
const express = require("express");
const app = express();
const port = 3000;
cnost pokemon = require("./models/pokemon")

app.get("/pokemon", (req, res) => {
  res.render("index_views.ejs", {
      pokemons: pokemon,
  });
});

  












  app.listen(port, () => {
    console.log("listening on port", port)
  });
