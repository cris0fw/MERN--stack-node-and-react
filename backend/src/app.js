const express = require("express");
const app = express()
require("dotenv").config()
require("./database/database")
const cors = require("cors")

// CONFIGURACIONES 
app.set("port", process.env.PORT || 4000)

// MIDDLEWARE 
app.use(cors())
app.use(express.json())

//RUTAS
app.use("/api/users", require("./routes/users"))
app.use("/api/notes", require("./routes/notes"))


app.listen(app.get("port"), () => console.log("Servidor andando", app.get("port")))