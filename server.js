// DEPENDENCIES

const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require("method-override");
const pokemon = require("./models/pokemon");


app.use(express.urlencoded({extended : false}));
app.use(methodOverride("_method"));

// Begginer page

app.get("/" , function (req, res){
  res.send(`Wlcome to pokemon world! lets get to know our pokemons!! visit => <a href="/pokemon"> /pokemon. </a>`)
})

// Index

app.get("/pokemon", (req, res) => {
    res.render("pokemon_index.ejs", {
        pokemons: pokemon,
    });
});

// Add new

app.get("/pokemon/new", (req, res) => {
    res.render("pokemon_new.ejs")
});

// Delete

app.delete("/pokemon/:id", (req, res) => {
    pokemon.splice(req.params.id, 1)
    res.redirect("/pokemon");
});

// create

app.post("/pokemon", (req, res) => {
    pokemon.push(req.body);
    res.redirect("/pokemon");
});

// Show

app.get("/pokemon/:id", (req, res) => {
    res.render("pokemon_show.ejs", {
        pokemon: pokemon[req.params.id],
    });
});


// update

app.put("/pokemon/:id", function(req, res){
  pokedex[req.params.id] = req.body
  res.redirect("/pokemon")
});

// Edit

app.get("/pokemon/:id/edit", (req, res) =>{
  res.render("pokemon_edit.ejs",
  {
      pokemon: pokemon[req.params.id],
      index: req.params.id,
  });
});


// App listener 

app.listen(port, () => {
  console.log("listening on port", port)
  });


//End