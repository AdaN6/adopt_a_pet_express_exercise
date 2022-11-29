const express = require("express")
const router = express.Router()
const animals = require("../src/helper")


router.get("/", (req, res) => {
  const allAnimal = `<ul>${Object.keys(animals).map((animal, index) => `<li>${animal.name}</li>`)
    .join("")}</ul>`;

    res.render(allAnimal)

})

router
.route("/:pet_type")
.get((req, res) => {
  const { pet_type } = req.params;
  
  
  const html = `<ul>${animals[pet_type]
    .map((animal, index) => `<li>${animal.name}</li>`)
    .join("")}</ul>`;
  
//   const html =  animals[pet_type].map((animal, index) => `<li>${animal.name}</li>`)

  res.send(html)
//   res.render("pet_type", {
//     pet: `${pet_type.charAt(0).toUpperCase() + pet_type.slice(1)}`,
//     name: `${html}`,
//   });
})



module.exports = router