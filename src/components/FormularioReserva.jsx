import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { servicios } from '../data/servicios'
import { db } from '../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

const barberos = [
  { iniciales: 'RC', nombre: 'Ricardo C.', rol: 'MASTER BARBER'    },
  { iniciales: 'AM', nombre: 'Andrés M.',  rol: 'HAIR STYLIST'     },
  { iniciales: 'LV', nombre: 'Luis V.',    rol: 'BEARD SPECIALIST' },
  { iniciales: 'JP', nombre: 'Jorge P.',   rol: 'COLOR EXPERT'     },
]

export default function FormularioReserva() {
  const location = useLocation()
  const navigate = useNavigate()

  const [nombre,   setNombre]   = useState('')
  const [telefono, setTelefono] = useState('')
  const [servicio, setServicio] = useState(
    location.state?.servicio?.nombre || servicios[0].nombre
  )
  const [barbero,  setBarbero]  = useState('')
  const [fecha,    setFecha]    = useState('')
  const [hora,     setHora]     = useState('')

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
    if (!barbero) {
      alert('Por favor elige un barbero.')
      return false
    }
    if (!fecha) {
      alert('Debes seleccionar una fecha.')
      return false
    }
    if (!hora) {
      alert('Debes seleccionar una hora.')
      return false
    }
    return true
  }

  const guardarReserva = async (e) => {
    e.preventDefault()

    if (!validarFormulario()) return

    try {
      await addDoc(collection(db, 'reservas'), {
        nombre,
        telefono,
        servicio,
        barbero,
        fecha,
        hora,
        creadoEn: new Date().toISOString()
      })

      alert('¡Reserva registrada!')
      navigate('/')

    } catch (error) {
      console.error('Error al guardar: ', error)
    }
  }

  return (
    <div className="formulario-reserva">
      <form onSubmit={guardarReserva}>
        <div className="row g-3">

          <div className="col-md-6">
            <label className="etiqueta-campo">
              <i className="bi bi-person me-1"></i> NOMBRE COMPLETO
            </label>
            <input
              type="text" className="campo-input" placeholder="Tu nombre"
              value={nombre} onChange={(e) => setNombre(e.target.value)} required
            />
          </div>

          <div className="col-md-6">
            <label className="etiqueta-campo">
              <i className="bi bi-telephone me-1"></i> TELÉFONO
            </label>
            <input
              type="tel" className="campo-input" placeholder="+51 9XX XXX XXX"
              value={telefono} onChange={(e) => setTelefono(e.target.value)} required
            />
          </div>

          <div className="col-12">
            <label className="etiqueta-campo">
              <i className="bi bi-scissors me-1"></i> SERVICIO
            </label>
            <select
              className="campo-select"
              value={servicio} onChange={(e) => setServicio(e.target.value)}
            >
              {servicios.map((s) => (
                <option key={s.id} value={s.nombre}>
                  {s.nombre} — S/ {s.precio} ({s.duracion})
                </option>
              ))}
            </select>
          </div>

          <div className="col-12">
            <label className="etiqueta-campo mb-2">
              <i className="bi bi-person-badge me-1"></i> ELIGE TU BARBERO
            </label>
            <div className="row g-2">
              {barberos.map((b) => (
                <div key={b.iniciales} className="col-6 col-md-3">
                  <div
                    className={`opcion-barbero text-center ${barbero === b.nombre ? 'seleccionado' : ''}`}
                    onClick={() => setBarbero(b.nombre)}
                  >
                    <div className="iniciales-barbero">{b.iniciales}</div>
                    <div className="nombre-barbero">{b.nombre}</div>
                    <div className="rol-barbero">{b.rol}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <label className="etiqueta-campo">
              <i className="bi bi-calendar3 me-1"></i> FECHA
            </label>
            <input
              type="date" className="campo-input"
              value={fecha} onChange={(e) => setFecha(e.target.value)} required
            />
          </div>

          <div className="col-md-6">
            <label className="etiqueta-campo">
              <i className="bi bi-clock me-1"></i> HORA
            </label>
            <select
              className="campo-select"
              value={hora} onChange={(e) => setHora(e.target.value)} required
            >
              <option value="">Elige una hora</option>
              <option value="9:00 am">9:00 am</option>
              <option value="10:00 am">10:00 am</option>
              <option value="11:00 am">11:00 am</option>
              <option value="12:00 pm">12:00 pm</option>
              <option value="2:00 pm">2:00 pm</option>
              <option value="3:00 pm">3:00 pm</option>
              <option value="4:00 pm">4:00 pm</option>
              <option value="5:00 pm">5:00 pm</option>
            </select>
          </div>

        </div>

        <button type="submit" className="boton-confirmar mt-4 d-flex align-items-center justify-content-center gap-2">
          <i className="bi bi-check-circle"></i> CONFIRMAR RESERVA
        </button>

      </form>
    </div>
  )
}