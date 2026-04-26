import ResumenCarrito from '../components/ResumenCarrito'

export default function Carrito({ carrito, quitarDelCarrito , vaciarCarrito}) {
  return (
    <section className="container py-5">

      <div className="mb-4">
        <div className="encabezado-seccion">
          <div className="linea-dorada" />
          <span className="texto-seccion">MI CARRITO</span>
        </div>
        <h1 className="titulo-seccion">Carrito de productos</h1>
        <p className="texto-ayuda">
          
        </p>
      </div>

      <ResumenCarrito
        carrito={carrito}
        quitarDelCarrito={quitarDelCarrito}
        vaciarCarrito={vaciarCarrito}
      />

    </section>
  )
}