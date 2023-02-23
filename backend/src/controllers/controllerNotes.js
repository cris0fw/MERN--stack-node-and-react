const Notes = require("../models/Notes")
const Note = require("../models/Notes")

const getObtenerNotas = async (req,res) => {
    try{
        const note = await Note.find()
        res.json(note)
    }catch(err){
        console.log("Se produjo un error" + err)
    }
}

const postCrearNota = async (req,res) => {
    try{
        const {title, description, author, date} = req.body

        const saveNotas = new Note({title, description, author, date})
        await saveNotas.save()
        res.json({message: "Se ha guardado la nota"})
    }catch(err){
        console.log("Se ha producido un error" + err)
    }
}

const getInfoNota = async (req,res) => {
    const id = req.params.id
    try{
        const nota = await Note.findById(id)
        res.json(nota)
   }catch(err){
    console.log("Ha habido un error" + err)
   }
}

const deleteNota = async (req,res) => {
    const id = req.params.id
    try{
        await Note.findByIdAndDelete(id)
        res.json({message: "Nota eliminada"})
    }catch(err){
        console.log("Hubo un error" + err)
    }
}

const putActualizarNota = async (req,res) => {
    const id = req.params.id
    const {title, description, date, author} = req.body
    try{
        const newTarea = {title, description, date, author}
        await Notes.findOneAndUpdate({_id: id}, newTarea)
        res.json({message: "La nota ha sido actualizada"})
    }catch(err){
        console.log("Hubo un error" + err)
    }
}

module.exports = {getObtenerNotas, postCrearNota, getInfoNota, deleteNota, putActualizarNota}