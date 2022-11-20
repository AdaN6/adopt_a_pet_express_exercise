const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
    res.render("pets")
})

router
.route("/:pet_type")
.get((req,res) => {
    const {pet_type} = req.params;
res.render("pet_type", { pet: `${pet_type}`})
})



module.exports = router