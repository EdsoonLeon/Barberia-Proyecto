import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

export default function ResumenCarrito({ carrito, quitarDelCarrito, vaciarCarrito }) {
  const [nombre,    setNombre]    = useState('')
  const [telefono,  setTelefono]  = useState('')
  const [direccion, setDireccion] = useState('')

  const navigate = useNavigate()

  const total = carrito.reduce((acumulado, producto) => acumulado + producto.precio, 0)

  const validarFormulario = () => {
    const regexNombre   = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
    const regexTelefono = /^\+?[0-9\s]{7,15}$/

    if (!regexNombre.test(nombre)) {
      alert('El nombre solo debe contener letras.')
      return false
    }
    if (!regexTelefono.test(telefono)) {
      alert('Ingresa un teléfono válido.')
      return false
    }
    if (!direccion.trim()) {
      alert('La dirección es obligatoria.')
      return false
    }
    return true
  }

  const guardarPedido = async (e) => {
    e.preventDefault()

    if (!validarFormulario()) return

    try {
      await addDoc(collection(db, 'pedidos'), {
        nombre,
        telefono,
        direccion,
        productos: carrito.map((p) => ({
          id:     p.id,
          nombre: p.nombre,
          precio: p.precio,
        })),
        total,
        creadoEn: new Date().toISOString()
      })

      alert('¡Pedido registrado!')
      vaciarCarrito()
      navigate('/')

    } catch (error) {
      console.error('Error al guardar: ', error)
    }
  }

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <i className="bi bi-cart3 icono-carrito-vacio"></i>
        <h3 className="titulo-seccion mt-3">Tu carrito está vacío</h3>
        <p className="texto-ayuda mb-4">Agrega productos desde nuestra tienda.</p>
        <Link to="/productos" className="boton-dorado d-inline-flex align-items-center gap-2">
          <i className="bi bi-bag"></i> IR A PRODUCTOS
        </Link>
      </div>
    )
  }

  return (
    <div className="row g-4 align-items-start">

      <div className="col-lg-7">
        <div className="encabezado-seccion mb-3">
          <div className="linea-dorada" />
          <span className="texto-seccion">TUS PRODUCTOS</span>
        </div>

        <div className="lista-carrito">
          {carrito.map((producto) => (
            <div key={producto.id} className="elemento-carrito">
              <div className="icono-elemento">
                <img src={producto.imagen} alt={producto.nombre} />
              </div>
              <div className="flex-grow-1">
                <div className="categoria-tarjeta">{producto.categoria.toUpperCase()}</div>
                <div className="nombre-elemento">{producto.nombre}</div>
                <div className="duracion-tarjeta">{producto.medida}</div>
              </div>
              <div className="precio-tarjeta me-3">S/ {producto.precio}</div>
              <button
                className="boton-quitar"
                onClick={() => quitarDelCarrito(producto.id)}
                title="Quitar del carrito"
              >
                <i className="bi bi-trash3"></i>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-3">
          <Link to="/productos" className="boton-agregar d-inline-flex align-items-center gap-2">
            <i className="bi bi-plus-circle"></i> AGREGAR MÁS PRODUCTOS
          </Link>
        </div>
      </div>

      <div className="col-lg-5">
        <div className="tarjeta-resumen">
          <div className="titulo-resumen">RESUMEN DEL PEDIDO</div>

          {carrito.map((producto) => (
            <div key={producto.id} className="fila-resumen">
              <span className="etiqueta-resumen">{producto.nombre}</span>
              <span className="valor-resumen">S/ {producto.precio}</span>
            </div>
          ))}

          <div className="divisor-resumen" />

          <div className="fila-resumen">
            <span className="etiqueta-total">TOTAL</span>
            <span className="valor-total">S/ {total}</span>
          </div>

          <div className="mt-4">
            <div className="encabezado-seccion mb-3">
              <div className="linea-dorada" />
              <span className="texto-seccion">DATOS DE ENVÍO</span>
            </div>

            <form onSubmit={guardarPedido}>
              <div className="mb-3">
                <label className="etiqueta-campo">
                  <i className="bi bi-person me-1"></i> NOMBRE
                </label>
                <input
                  type="text" className="campo-input" placeholder="Tu nombre completo"
                  value={nombre} onChange={(e) => setNombre(e.target.value)} required
                />
              </div>
              <div className="mb-3">
                <label className="etiqueta-campo">
                  <i className="bi bi-telephone me-1"></i> TELÉFONO
                </label>
                <input
                  type="tel" className="campo-input" placeholder="+51 9XX XXX XXX"
                  value={telefono} onChange={(e) => setTelefono(e.target.value)} required
                />
              </div>
              <div className="mb-4">
                <label className="etiqueta-campo">
                  <i className="bi bi-geo-alt me-1"></i> DIRECCIÓN
                </label>
                <input
                  type="text" className="campo-input" placeholder="Av. ejemplo 123, Lima"
                  value={direccion} onChange={(e) => setDireccion(e.target.value)} required
                />
              </div>

              <button type="submit" className="boton-confirmar d-flex align-items-center justify-content-center gap-2">
                <i className="bi bi-check-circle"></i> CONFIRMAR PEDIDO
              </button>
            </form>
          </div>

          <Link to="/productos" className="boton-seguir-comprando mt-2">
            SEGUIR COMPRANDO
          </Link>

          <p className="nota-garantia">
            <i className="bi bi-shield-check icono-garantia"></i>
            Cancelación gratuita hasta 24h después del pedido
          </p>
        </div>
      </div>

    </div>
  )
}