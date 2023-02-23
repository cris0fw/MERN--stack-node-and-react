const express = require("express")
const { getObtenerNotas, postCrearNota, getInfoNota, deleteNota, putActualizarNota } = require("../controllers/controllerNotes")
const router = express.Router()

router.get("/", getObtenerNotas)
router.post("/", postCrearNota)
router.get("/:id", getInfoNota)
router.delete("/:id", deleteNota)
router.put("/:id", putActualizarNota)

module.exports = router