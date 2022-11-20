const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
    res.render("pets")
})

router
.route("/:pet_type")
.get((req,res) => {
    const {pet_type} = req.params;
res.render("pet_type", {
  pet: `${pet_type.charAt(0).toUpperCase() + pet_type.slice(1)}`,
});
})



module.exports = router