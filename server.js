
const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon");



app.get("/pokemon", (req, res)=>{
  res.render("pokemon_index.ejs", {
      pokemons : pokemon,
  });
});

app.get("/pokemon/new", (req, res) => {
  res.render("pokemon_new.ejs")
});













  app.listen(port, () => {
    console.log("listening on port", port)
  });
