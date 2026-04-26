export default function FiltrosServicios({
  categorias,
  categoriaSeleccionada,
  setCategoriaSeleccionada,
  busqueda,
  setBusqueda,
  precioMaximo,
  setPrecioMaximo,
}) {
  return (
    <section className="caja-filtros">
      <div className="row g-3">

        <div className="col-md-4">
          <label htmlFor="busqueda" className="etiqueta-campo">
            <i className="bi bi-search me-1"></i> BUSCAR SERVICIO
          </label>
          <input
            id="busqueda"
            type="text"
            className="campo-input"
            placeholder="Ej: corte, barba..."
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="categoria" className="etiqueta-campo">
            <i className="bi bi-funnel me-1"></i> CATEGORÍA
          </label>
          <select
            id="categoria"
            className="campo-select"
            value={categoriaSeleccionada}
            onChange={(evento) => setCategoriaSeleccionada(evento.target.value)}
          >
            <option value="Todos">Todos</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="precioMaximo" className="etiqueta-campo">
            <i className="bi bi-currency-dollar me-1"></i> PRECIO MÁXIMO:{' '}
            <span className="precio-valor">S/ {precioMaximo}</span>
          </label>
          <input
            id="precioMaximo"
            type="range"
            className="form-range rango-precio"
            min="30"
            max="200"
            step="5"
            value={precioMaximo}
            onChange={(evento) => setPrecioMaximo(Number(evento.target.value))}
            
          />
        </div>

      </div>
    </section>
  )
}