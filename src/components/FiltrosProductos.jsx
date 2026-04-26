export default function FiltrosProductos({
  categorias,
  categoriaSeleccionada,
  setCategoriaSeleccionada,
  busqueda,
  setBusqueda,
}) {
  return (
    <section className="caja-filtros">
      <div className="row g-3">

        <div className="col-md-6">
          <label htmlFor="busquedaProducto" className="etiqueta-campo">
            <i className="bi bi-search me-1"></i> BUSCAR PRODUCTO
          </label>
          <input
            id="busquedaProducto"
            type="text"
            className="campo-input"
            placeholder="Ej: pomada, aceite..."
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label className="etiqueta-campo mb-2">
            <i className="bi bi-funnel me-1"></i> CATEGORÍA
          </label>
          <div className="d-flex flex-wrap gap-2">
            <button
              className={`btn btn-sm boton-filtro ${categoriaSeleccionada === 'Todos' ? 'activo' : ''}`}
              onClick={() => setCategoriaSeleccionada('Todos')}
            >
              TODOS
            </button>
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className={`btn btn-sm boton-filtro ${categoriaSeleccionada === categoria ? 'activo' : ''}`}
                onClick={() => setCategoriaSeleccionada(categoria)}
              >
                {categoria.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}