import { Link } from 'react-router-dom'

export default function NoEncontrado() {
  return (
    <section className="container py-5 text-center">

      <div className="numero-404">404</div>

      <h1 className="titulo-seccion mt-2 mb-3">Página no encontrada</h1>

      <p className="texto-ayuda mb-4">
        La ruta que buscas no existe dentro de esta app.
      </p>

      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <Link to="/" className="boton-dorado d-inline-flex align-items-center gap-2">
          <i className="bi bi-house"></i> IR AL INICIO
        </Link>
        <Link to="/servicios" className="boton-agregar d-inline-flex align-items-center gap-2">
          <i className="bi bi-scissors"></i> VER SERVICIOS
        </Link>
      </div>

    </section>
  )
}