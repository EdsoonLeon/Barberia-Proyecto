import { useState } from 'react'
import { Link } from 'react-router-dom'

const imagenes = [
  { src: 'https://joseppons.com/formacion/wp-content/uploads/2020/11/servicios-salon-barberia.jpeg', alt: 'Enchulate Barber Shop' },
  { src: 'https://www.shutterstock.com/image-photo/men-barbershop-experience-classic-haircut-600nw-2584378129.jpg', alt: 'Corte' },
  { src: 'https://img.freepik.com/foto-gratis/hombre-guapo-cortando-barba-salon-barberia_1303-20970.jpg', alt: 'Corte y Barba' },
  { src: 'https://barberiainvictus.pe/wp-content/uploads/2025/11/hero-barberia-aqp.jpg', alt: 'Paquete VIP' },
]

let contador = 0

export default function HeroInicio() {
  const [banner, setBanner] = useState(imagenes[0])

  function carrusel() {
    contador++
    if (contador > 3) contador = 0
    setBanner(imagenes[contador])
  }

  useState(() => {
    setInterval(carrusel, 2000)
  })

  return (
    <section className="seccion-hero">

      <div className="container hero-contenido py-5">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <div className="hero-eyebrow">
              <div className="eyebrow-linea" />
              <span className="eyebrow-texto">BARBERÍA PREMIUM · DESDE 2013</span>
            </div>

            <h1 className="hero-titulo">
              El arte de<br />lucir <em>bien.</em>
            </h1>

            <p className="hero-descripcion">
              Cada corte es una obra. Técnica clásica con estilo
              contemporáneo para crear la mejor versión de ti.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <Link className="boton-dorado" to="/servicios">
                <i className="bi bi-scissors me-2"></i>VER SERVICIOS
              </Link>
              <Link className="boton-secundario d-flex align-items-center gap-2" to="/reserva">
                RESERVAR CITA <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Imagen puesto a la derecha  */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <img
              src={banner.src}
              alt={banner.alt}
              className="img-fluid rounded hero-imagen-derecha"
              
            />
          </div>

        </div>
      </div>

    </section>
  )
}