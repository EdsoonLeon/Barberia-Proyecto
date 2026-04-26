export default function TarjetaProducto({ producto, agregarAlCarrito, carrito }) {
  const yaAgregado = carrito.some((p) => p.id === producto.id)

  return (
    <article className="col-md-6 col-xl-4">
      <div className="tarjeta-producto h-100">

        <div className="imagen-producto">
          <img src={producto.imagen} alt={producto.nombre} />
          <div className="overlay-producto" />
          {producto.nuevo && <span className="etiqueta-nuevo">NUEVO</span>}
          <span className={`etiqueta-stock ${producto.stock === 'disponible' ? 'stock-disponible' : 'stock-pocas'}`}>
            {producto.stock === 'disponible' ? 'EN STOCK' : 'ÚLTIMAS'}
          </span>
        </div>

        <div className="p-3">
          <div className="categoria-tarjeta">{producto.categoria.toUpperCase()}</div>
          <h3 className="nombre-tarjeta">{producto.nombre}</h3>
          <p className="descripcion-tarjeta">{producto.descripcion}</p>

          <div className="pie-tarjeta">
            <div>
              <div className="precio-tarjeta">S/ {producto.precio}</div>
              <div className="duracion-tarjeta">{producto.medida}</div>
            </div>
            <button
              className={`boton-agregar d-flex align-items-center gap-1 ${yaAgregado ? 'agregado' : ''}`}
              onClick={() => agregarAlCarrito(producto)}
              disabled={yaAgregado}
            >
              <i className={`bi ${yaAgregado ? 'bi-check-circle' : 'bi-cart-plus'}`}></i>
              {yaAgregado ? 'AGREGADO' : 'AGREGAR'}
            </button>
          </div>
        </div>

      </div>
    </article>
  )
}