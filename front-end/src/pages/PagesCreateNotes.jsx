import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import {useParams} from 'react-router-dom'

const PagesCreateNotes = () => {
const [usuarios, setUsuarios] = useState([])
const [form, setForm] = useState({})
const [fecha, setFecha] = useState(new Date())
const params = useParams()
const [existe, setExiste] = useState(false)

useEffect(() => {

const obtenerUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users")
    setUsuarios(res.data.map((users) => users.username))
}

const obtenerUnaNota = async () => {
    const res = await axios.get("http://localhost:4000/api/notes/" + params.id)
    setForm({
        title: res.data.title,
        description: res.data.description,
        author: res.data.author,
        date: new Date(res.data.date)
    })
}

obtenerUsers()

if(params.id){
    obtenerUnaNota()
    setExiste(true)
}

},[])

const createNote = async (e) => {
    e.preventDefault()
    const newForm = {
        title: form.title,
        description: form.description,
        date: fecha,
        author: form.userSelect
    }

    if(existe){
        await axios.put("http://localhost:4000/api/notes/" + params.id, newForm)
    }
    else{
        await axios.post("http://localhost:4000/api/notes", newForm)
    }

   window.location.href = "/" 
}

const datosFormChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
}

const onChangeFecha = (date) => {
    setFecha(date)
}

    return <>
        <div className='createNote'>
            <h1 className='noteTitle'>Create Note</h1>

            <form 
                className='noteForm'
                onSubmit={createNote}
            >
            <select
                name='userSelect'
                className='formSelect'
                onChange={datosFormChange}
                value={form.userSelect}
            >
                <option value="">...</option>
                {
                    usuarios.map((users) => {
                        return <option 
                                    className='formOption'
                                    key={users}
                                    value={users}
                                >{users}</option>
                    })
                }            
            </select>    

            <input 
              type="text" 
              placeholder='Title' 
              name='title' 
              className='formTitle' 
              onChange={datosFormChange}
              value={form.title}
              required
            /> 

            <textarea 
              name="description" 
              placeholder='Description' 
              className='formDescription' 
              onChange={datosFormChange}
              value={form.description
            }
              required>
            </textarea>

            <DatePicker 
                className='formFecha' 
                selected={fecha} 
                onChange={onChangeFecha}
            />

            <button 
                className='noteSubmit' 
                type="submit">Crear Nota
            </button>

            </form>
        </div>
    </>
}

export default PagesCreateNotes