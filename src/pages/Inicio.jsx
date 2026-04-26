import { Link } from 'react-router-dom'
import HeroInicio from '../components/HeroInicio'
import TarjetaServicio from '../components/TarjetaServicio'
import { servicios } from '../data/servicios'

export default function Inicio() {
  const serviciosDestacados = servicios.slice(0, 3)

  return (
    <>
      <HeroInicio />

      <section className="container py-5">
        <div className="row align-items-center mb-4">
          <div className="col-lg-8">
            <div className="encabezado-seccion">
              <div className="linea-dorada" />
              <span className="texto-seccion">NUESTROS SERVICIOS</span>
            </div>
            <h2 className="titulo-seccion">Servicios destacados</h2>
            
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <Link to="/servicios" className="boton-agregar d-inline-flex align-items-center gap-2">
              VER TODOS <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>

        <div className="row g-4">
          {serviciosDestacados.map((servicio, index) => (
            <TarjetaServicio
              key={servicio.id}
              servicio={servicio}
              numero={index + 1}
            />
          ))}
        </div>
      </section>

      <section className="seccion-banner-productos py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="encabezado-seccion mb-2">
                <div className="linea-dorada" />
                <span className="texto-seccion">NUESTRA TIENDA</span>
              </div>
              <h2 className="titulo-seccion mb-2">Productos premium</h2>
              <p className="texto-ayuda">
                Llévate a casa los mejores productos para mantener tu estilo.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/productos" className="boton-dorado d-inline-flex align-items-center gap-2">
                <i className="bi bi-bag"></i> VER PRODUCTOS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}