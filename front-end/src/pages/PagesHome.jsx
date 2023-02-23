import React from 'react'
import NoteLIst from '../components/NoteLIst'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const PagesHome = () => {
const [notes, setNotes] = useState([])

useEffect(() => {
  const obtenerNotes = () => {
    repetirObtenerNotas()
  }

  obtenerNotes()
},[])

const repetirObtenerNotas = async () => {
  const res = await axios.get("http://localhost:4000/api/notes")
  setNotes(res.data)
}

const eliminarNota = async (id) => {
 await axios.delete("http://localhost:4000/api/notes/" + id )

 repetirObtenerNotas()
} 

  return <>
    <div className='notasCargadas'>
        <div className='notasGrid'>
            {
              notes.map((note) => {
                  return <NoteLIst key={note._id} eliminarNota={eliminarNota} note={note} />
              })
            }
        </div>
    </div>
  </>
}

export default PagesHome