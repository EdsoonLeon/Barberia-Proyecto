import { useState } from 'react'
import { servicios } from '../data/servicios'
import FiltrosServicios from '../components/FiltrosServicios'
import TarjetaServicio from '../components/TarjetaServicio'

export default function Servicios() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos')
  const [busqueda, setBusqueda]                           = useState('')
  const [precioMaximo, setPrecioMaximo]                   = useState(200)

  const categorias = [...new Set(servicios.map((s) => s.categoria))]

  const serviciosFiltrados = servicios.filter((s) => {
    const coincideCategoria  = categoriaSeleccionada === 'Todos' || s.categoria === categoriaSeleccionada
    const coincideBusqueda   = s.nombre.toLowerCase().includes(busqueda.toLowerCase())
    const coincidePrecio     = s.precio <= precioMaximo
    return coincideCategoria && coincideBusqueda && coincidePrecio
  })

  return (
    <section className="container py-5">

      <div className="mb-4">
        <div className="encabezado-seccion">
          <div className="linea-dorada" />
          <span className="texto-seccion">LO QUE OFRECEMOS</span>
        </div>
        <h1 className="titulo-seccion">Catálogo de servicios</h1>
        <p className="texto-ayuda">
          Filtra por categoría, nombre o precio para encontrar el servicio ideal.
        </p>
      </div>

      <FiltrosServicios
        categorias={categorias}
        categoriaSeleccionada={categoriaSeleccionada}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        precioMaximo={precioMaximo}
        setPrecioMaximo={setPrecioMaximo}
      />

      <div className="row g-4">
        {serviciosFiltrados.map((servicio, index) => (
          <TarjetaServicio
            key={servicio.id}
            servicio={servicio}
            numero={index + 1}
          />
        ))}
      </div>

      {serviciosFiltrados.length === 0 && (
        <div className="alerta-advertencia mt-4">
          <i className="bi bi-exclamation-circle me-2"></i>
          No encontramos servicios con esos filtros.
        </div>
      )}

    </section>
  )
}