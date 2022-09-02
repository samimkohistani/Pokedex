
const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require("method-override");
const pokemon = require("./models/pokemon");


app.use(express.urlencoded({extended : false}));
app.use(methodOverride("_method"));


app.get("/pokemon", (req, res) => {
    res.render("pokemon_index.ejs", {
        pokemons: pokemon,
    });
});

app.get("/pokemon/new", (req, res) => {
    res.render("pokemon_new.ejs")
});

app.delete("/pokemon/:id", (req, res) => {
    pokemon.splice(req.params.id, 1)
    res.redirect("/pokemon");
})
app.post("/pokemon", (req, res) => {
    pokemon.push(req.body);
    res.redirect("/pokemon");
});

app.get("/pokemon/:id", (req, res) => {
    res.render("pokemon_show.ejs", {
        pokemon: pokemon[req.params.id],
    });
});




app.listen(port, () => {
  console.log("listening on port", port)
  });
