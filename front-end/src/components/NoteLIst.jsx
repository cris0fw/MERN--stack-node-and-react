import React  from 'react'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'

const NoteLIst = ({note, eliminarNota}) => {
  return <div className='card__notes'>
      <h1 className='card__title'>{note.title}</h1>

      <p className='card__description'>{note.description}</p>

      <div className='content__autor'>
        <p className='creado'>Creado por: <span className='autor'>{note.author}</span></p>
        <p className='fecha'>{format(note.date)}</p>
      </div>

      <div className='botones'>
        <button onClick={() => eliminarNota(note._id)} className='eliminar__nota'>Eliminar</button>

        <Link className='actualizar__nota' to={"/edit/" + note._id}>Actualizar</Link>
      </div>

  </div>
}

export default NoteLIst