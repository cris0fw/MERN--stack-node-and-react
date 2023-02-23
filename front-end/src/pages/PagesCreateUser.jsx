import React from 'react'
import CreateUser from '../components/CreateUser'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const PagesCreateUser = () => {
  const [usuarios, setUsuarios] = useState([])
  const [username, setUsername] = useState("")

  useEffect(() => {
    const obtenerUsuarios = () => {
        repetidoObtenerUsuarios()
    }

    obtenerUsuarios()
  },[])

  const onChange = (e) => {
    setUsername(e.target.value)
    console.log(username)
  } 

  const repetidoObtenerUsuarios = async () => {
    const res = await axios.get("http://localhost:4000/api/users")
    setUsuarios(res.data)
  }

  const enviarUser = async (e) => {
    e.preventDefault()

   await axios.post("http://localhost:4000/api/users", {username: username})
   repetidoObtenerUsuarios()
  }

  const deleteUser = async (id) => {
    await axios.delete("http://localhost:4000/api/users/" + id)
    repetidoObtenerUsuarios()
  } 

  return <>
      <div className='agregarUsuarios'>
        <h1 className='title'>Agrega usuario</h1>

        <form className='form' onSubmit={enviarUser}>
            <input onChange={onChange} className='form__input' type="text" placeholder='Agregar usuario' />
            <button className='form__submit' type='submit'>Agregar</button>
        </form>
      </div>

      <div className='obtenerUsusarios'>
        <h1 className='title'>Usuarios</h1>

        <div className='grid'>
          {
            usuarios.map((data) => {
              return <CreateUser deleteUser={deleteUser} key={data._id} data={data} />
            })
          }
        </div>
      </div>
  </>
}

export default PagesCreateUser