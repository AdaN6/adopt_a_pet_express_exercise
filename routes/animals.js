const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
    res.render("pets")
})

router
.route("/:pet_type")
.get((req,res) => {
console.log("happy")
})



module.exports = router