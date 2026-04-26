import { NavLink } from 'react-router-dom'

export default function PiePagina() {
  return (
    <footer className="pie-pagina mt-5">

      <div className="pie-superior">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/547/547927.png"
                  alt="The Classic Line"
                  className="logo-navbar"
                />
                <div className="marca-pie">The Classic Line</div>
              </div>
              <div className="linea-marca"></div>
              <div className="subtitulo-marca">BARBERÍA PREMIUM · LIMA, PERÚ</div>
              <p className="descripcion-marca">
                Más de 10 años perfeccionando el arte del estilo masculino.
                Técnica clásica con visión contemporánea.
              </p>

              <p className="titulo-columna-pie mb-2">SÍGUENOS</p>
              <div className="d-flex gap-2">

                <a className="boton-red-social instagram" href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>

                <a className="boton-red-social facebook" href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

                <a className="boton-red-social tiktok" href="https://tiktok.com" target="_blank" rel="noreferrer" title="TikTok">
                  <i className="bi bi-tiktok"></i>
                </a>

                <a className="boton-red-social whatsapp" href="https://wa.me/51987654321" target="_blank" rel="noreferrer" title="WhatsApp">
                  <i className="bi bi-whatsapp"></i>
                </a>

                <a className="boton-red-social youtube" href="https://youtube.com" target="_blank" rel="noreferrer" title="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>

              </div>
            </div>

            <div className="col-lg-2 col-md-4">
              <div className="titulo-columna-pie">NAVEGACIÓN</div>
              <NavLink className="enlace-pie" to="/">Inicio</NavLink>
              <NavLink className="enlace-pie" to="/servicios">Servicios</NavLink>
              <NavLink className="enlace-pie" to="/productos">Productos</NavLink>
              <NavLink className="enlace-pie" to="/reserva">Reserva</NavLink>
              <NavLink className="enlace-pie" to="/carrito">Carrito</NavLink>
            </div>

            <div className="col-lg-2 col-md-4">
              <div className="titulo-columna-pie">SERVICIOS</div>
              <span className="enlace-pie">Corte Clásico</span>
              <span className="enlace-pie">Corte + Barba</span>
              <span className="enlace-pie">Afeitado Royal</span>
              <span className="enlace-pie">Coloración</span>
              <span className="enlace-pie">Tratamiento</span>
              <span className="enlace-pie">Paquete VIP</span>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="titulo-columna-pie">CONTACTO</div>
              <p className="enlace-pie">
                <i className="bi bi-geo-alt-fill icono-pie"></i>
                Av. La Mar 482, Miraflores, Lima
              </p>
              <p className="enlace-pie">
                <i className="bi bi-telephone-fill icono-pie"></i>
                +51 987 654 321
              </p>
              <p className="enlace-pie">
                <i className="bi bi-envelope-fill icono-pie"></i>
                TheClassicLine@barber.pe
              </p>
              <div className="titulo-columna-pie mt-3">HORARIOS</div>
              <div className="d-flex justify-content-between">
                <span className="enlace-pie">Lun – Vie</span>
                <span className="enlace-pie">9am – 8pm</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="enlace-pie pie-sabado">Sábado ●</span>
                <span className="enlace-pie pie-sabado">9am – 6pm</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="enlace-pie">Domingo</span>
                <span className="enlace-pie">Cerrado</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="pie-inferior">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <p className="texto-derechos mb-0">
              © 2026 <span>The Classic Line</span> — Todos los derechos reservados
            </p>
            <p className="texto-derechos mb-0">
              Hecho con <span>React + Bootstrap</span> · Cibertec 2026
            </p>
          </div>
        </div>
      </div>

    </footer>
  )
}