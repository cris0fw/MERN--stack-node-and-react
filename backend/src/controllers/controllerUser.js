const User = require("../models/Users")

const getObtenerUsers = async (req,res) => {
    try{
        const todosUsers = await User.find()
        res.json(todosUsers)
    }catch(err){
        console.log("Hubo un error" + err)
    }
}

const postCrearUsers = async (req,res) => {
    const {username} = req.body

    try{
        const newUser = new User({username})
        await newUser.save()
        res.json({message: "Se ha guardado el usuario"})
    }catch(err){
        console.log("Ha habido un error" + err)
    }
}

const deleteUsers = async (req,res) => {
    const id = req.params.id
    try{
        await User.findByIdAndDelete(id)
        res.json({message: "Se ha eliminado el usuario"})
    }catch(err){
        console.log("Se ha producido un error" + err)
    }
}

module.exports = {getObtenerUsers, postCrearUsers, deleteUsers}