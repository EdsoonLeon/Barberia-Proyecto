import { useNavigate } from 'react-router-dom'

export default function TarjetaServicio({ servicio, numero }) {
  const navigate = useNavigate()

  return (
    <article className="col-md-6 col-xl-4">
      <div className="tarjeta-servicio h-100">

        <div className="imagen-servicio">
          <img src={servicio.imagen} alt={servicio.nombre} />
          <div className="imagen-overlay" />
          <div className="numero-imagen">
            {String(numero).padStart(2, '0')}
          </div>
          <div className="categoria-imagen">
            {servicio.categoria.toUpperCase()}
          </div>
        </div>

        <div className="p-3">
          <h3 className="nombre-tarjeta">{servicio.nombre}</h3>
          <p className="descripcion-tarjeta">{servicio.descripcion}</p>

          <div className="pie-tarjeta">
            <div>
              <div className="precio-tarjeta">S/ {servicio.precio}</div>
              <div className="duracion-tarjeta">
                <i className="bi bi-clock me-1"></i>
                {servicio.duracion}
              </div>
            </div>
            <button
              className="boton-agregar d-flex align-items-center gap-1"
              onClick={() => navigate('/reserva', { state: { servicio } })}
            >
              <i className="bi bi-calendar-plus"></i> RESERVAR
            </button>
          </div>
        </div>

      </div>
    </article>
  )
}