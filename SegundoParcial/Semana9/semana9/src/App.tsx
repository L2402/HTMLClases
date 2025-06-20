import { useState } from 'react'
import './App.css'
import { Ipelicula } from './componentes/pelicula'
import ICartelera from './componentes/cartelera'

const peliculas: Ipelicula[] = [
  {
    id: 1,
    titulo: 'El Padrino',
    descripcion: 'Un poderoso jefe de la mafia y su familia.',
    url: 'https://example.com/el-padrino.jpg'
  },
  {
    id: 2,
    titulo: 'El Señor de los Anillos',
    descripcion: 'Una épica aventura en la Tierra Media.',
    url: 'https://example.com/el-senor-de-los-anillos.jpg'
  },
  {
    id: 3,
    titulo: 'Inception',
    descripcion: 'Un ladrón que roba secretos a través de los sueños.',
    url: 'https://example.com/inception.jpg'
  }
]


function App() {

  return (
    <>
    
      <ICartelera peliculas={peliculas} />

    </>
  )

}

export default App