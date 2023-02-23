import React from 'react'

const CreateUser = ({data,deleteUser}) => {
  return <div className='card'>
      <p className='card__title'>Nombre de usuario: <span className='card__nombre'>{data.username}</span></p>
      <p className='card__creacion'>Fecha de creacion: <span className='card__fecha'>{data.createdAt}</span></p>
  
      <button onClick={() => deleteUser(data._id)} className='card__delete'>Eliminar</button>
  </div>
}

export default CreateUser