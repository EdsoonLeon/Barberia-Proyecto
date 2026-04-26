import { useState } from 'react'
import { productos } from '../data/productos'
import FiltrosProductos from '../components/FiltrosProductos'
import TarjetaProducto from '../components/TarjetaProducto'

export default function Productos({ agregarAlCarrito, carrito }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')

  const categorias = [...new Set(productos.map((p) => p.categoria))]

  const productosFiltrados = productos.filter((p) => {
    const coincideCategoria =
      categoriaSeleccionada === 'Todos' || p.categoria === categoriaSeleccionada
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    return coincideCategoria && coincideBusqueda
  })

  return (
    <section className="container py-5">

      <div className="mb-4">
        <div className="encabezado-seccion">
          <div className="linea-dorada" />
          <span className="texto-seccion">NUESTRA TIENDA</span>
        </div>
        <h1 className="titulo-seccion">Catálogo de productos</h1>
        <p className="texto-ayuda">
          Filtra por categoría o nombre para encontrar el producto que buscas.
        </p>
      </div>

      <FiltrosProductos
        categorias={categorias}
        categoriaSeleccionada={categoriaSeleccionada}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <div className="row g-4">
        {productosFiltrados.map((producto) => (
          <TarjetaProducto
            key={producto.id}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
            carrito={carrito}
          />
        ))}
      </div>

      {productosFiltrados.length === 0 && (
        <div className="alerta-advertencia mt-4">
          <i className="bi bi-exclamation-circle me-2"></i>
          No encontramos productos con esos filtros.
        </div>
      )}

    </section>
  )
}