const {Schema, model} = require("mongoose")

const notesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
},{
    timestamps: true
})

module.exports = model("Notes", notesSchema)