import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import BarraNavegacion from './components/BarraNavegacion'
import PiePagina from './components/PiePagina'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Reserva from './pages/Reserva'
import Productos from './pages/Productos'
import Carrito from './pages/Carrito'
import NoEncontrado from './pages/NoEncontrado'

export default function App() {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito')
    return guardado ? JSON.parse(guardado) : []
  })

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  function agregarAlCarrito(producto) {
    const yaExiste = carrito.find((p) => p.id === producto.id)
    if (!yaExiste) {
      setCarrito([...carrito, producto])
    }
  }

  function quitarDelCarrito(id) {
    setCarrito(carrito.filter((p) => p.id !== id))
  }

 
  function vaciarCarrito() {
    setCarrito([])
  }

  return (
    <div className="contenedor-app">
      <BarraNavegacion totalCarrito={carrito.length} />

      <Routes>
        <Route path='/'          element={<Inicio />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/reserva'   element={<Reserva />} />
        <Route path='/productos' element={<Productos agregarAlCarrito={agregarAlCarrito} carrito={carrito} />} />
        <Route path='/carrito' element={<Carrito carrito={carrito} quitarDelCarrito={quitarDelCarrito} vaciarCarrito={vaciarCarrito} />} />
        <Route path='*'          element={<NoEncontrado />} />
      </Routes>

      <PiePagina />
    </div>
  )
}