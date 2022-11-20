const express = require("express");
const app = express();
const port = 5000;

//to read html file
app.use(express.static("public"))

//use view engine
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.send("index");
});

//to have route in separate file
const animalRouter = require('./routes/animals')

app.use('/animals', animalRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
