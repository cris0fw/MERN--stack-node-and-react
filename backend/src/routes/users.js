const express = require("express")
const { getObtenerUsers, postCrearUsers, deleteUsers } = require("../controllers/controllerUser")
const router = express.Router()

router.get("/", getObtenerUsers)
router.post("/", postCrearUsers)
router.delete("/:id", deleteUsers)

module.exports = router