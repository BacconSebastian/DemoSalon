import "./Servicios.scss"

const Servicios = () => {

  return (
    <div id="servicios" className="servicios">
      <h2 className="title">Servicios</h2>
      <h3>Ofrecemos diferentes tipos de servicios para adaptarnos de la mejor manera a tus gustos y presupuesto!</h3>
      <div className="about-description">
        <div className="paragraph">
          <div className="marker"></div>
          <div className="img-container">
            <div className="img-horas"></div>
            <p><span>Servicio por hora</span> por un mínimo de 2 horas.</p>
          </div>
        </div>
        <div className="paragraph">
          <div className="marker"></div>
          <div className="img-container">
            <div className="img-animadores"></div>
            <p>
              Contamos con los <span>mejores animadores</span> para que los chicos no se aburran!
            </p>
          </div>
        </div>
        <div className="paragraph">
          <div className="marker"></div>
          <div className="img-container">
            <div className="img-catering"></div>
            <p>
              Ofrecemos <span>servicio de catering</span>. Te ayumos con todo!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicios