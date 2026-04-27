import { NavLink } from 'react-router-dom'

export default function BarraNavegacion({ totalCarrito }) {
  return (
    <nav className="navbar navbar-expand-lg barra-navegacion sticky-top">
      <div className="container">

        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/547/547927.png"
            alt="The Classic Line"
            className="logo-navbar"
          />
          The Classic Line
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Mostrar menú"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
          <div className="navbar-nav mx-auto">
            <NavLink className="nav-link" to="/" end>Inicio</NavLink>
            <NavLink className="nav-link" to="/servicios">Servicios</NavLink>
            <NavLink className="nav-link" to="/productos">Productos</NavLink>
          </div>

          <div className="d-flex align-items-center gap-2">
            <NavLink to="/reserva" className="boton-reservar">
              RESERVAR
            </NavLink>
            <NavLink to="/carrito" className="boton-carrito">
              <i className="bi bi-cart3"></i> CARRITO  {/* ← icono Bootstrap */}
              {totalCarrito > 0 && (
                <span className="contador-carrito">{totalCarrito}</span>
              )}
            </NavLink>
          </div>
        </div>

      </div>
    </nav>
  )
}