import "./Contact.scss"
import Gmail from "../../assets/gmail.svg"
import Whatsapp from "../../assets/whatsapp.svg"

const Contact = () => {
  return (
    <div id="contactanos" className="contact">
      <h2>Contactactanos!</h2>
      <a className="contact-data clickeable" href="mailto:bacconsebastian@gmail.com?subject=We%20are%20hiring&amp;body=" target="_blank">
        <img className="icon" src={Gmail} alt="" />
        <p>happytime@gmail.com</p>
      </a>
      <a className="contact-data clickeable" href="https://wa.me/+5491133639537?text=Hola!%20Queremos%20mas%20informacion" target="_blank">
        <img className="icon" src={Whatsapp} alt="" />
        <p>+54 9 11 1111-1111</p>
      </a>
    </div>
  )
}

export default Contact