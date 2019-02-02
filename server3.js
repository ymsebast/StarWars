// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// Returns all characters as JSON 
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});

// Returns specific character as JSON
app.get("/api/characters/:character", function(req, res) {
  // reads character parameter
  var chosen = req.params.character;
  console.log(chosen);

  // if parameter is in characters JSON, return JSON for that character
  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  // no parameters matches characters JSON
  return res.send("No character found");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
