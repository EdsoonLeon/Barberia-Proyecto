import FormularioReserva from '../components/FormularioReserva'

export default function Reserva() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">

          <div className="mb-4 text-center">
            <div className="encabezado-seccion justify-content-center">
              <div className="linea-dorada" />
              <span className="texto-seccion">AGENDA TU VISITA</span>
              <div className="linea-dorada" />
            </div>
            <h1 className="titulo-seccion">Formulario de reserva</h1>
            <p className="texto-ayuda">
           
            </p>
          </div>

          <FormularioReserva />

        </div>
      </div>
    </section>
  )
}