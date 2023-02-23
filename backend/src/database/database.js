const mongoose = require("mongoose")

mongoose.connect(process.env.URI)
.then(() => console.log("La base de datos esta conectada"))
.catch((err) => console.log("Fallo la conexion" + err))