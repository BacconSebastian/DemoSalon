import "./About.scss"
import Icon from "../../assets/icono.png"
import Salon from "../../assets/salon.jpg"

const About = () => {
  return (
    <div id="nosotros" className="nosotros">
      <div className="left-container">
        <img className="profile" src={Salon} alt="" />
        <div className="head-info">
          <h1>Happy Time!</h1>
          <h2>Salon de cumpleaños</h2>
        </div>
      </div>
      <div className="description">
        <div className="icons-container">
          <img className="icon" src={Icon} alt=""/>
          <img className="icon" src={Icon} alt=""/>
          <img className="icon" src={Icon} alt=""/>
        </div>
        <p>Somos un salon donde los chicos vienen a pasar sus cumpleaños de la mejor manera. <br /><br /> Y donde los padres dejan toda la organización en nuestra buenas manos.</p>
      </div>
    </div>
  )
}

export default About