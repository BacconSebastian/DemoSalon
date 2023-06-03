import { useEffect, useState } from "react"

import "./Navbar.scss"
import CloseIcon from '@mui/icons-material/Close';
import Icon from "../../assets/icono.png"
import Click from '../../assets/click.png';

const Navbar = () => {

  const [expanded, setExpanded] = useState<boolean>(false)
  const [clicked, setClicked] = useState<boolean>(false)

  const handleExpand = (expand: boolean) => {
    setExpanded(expand)
    setClicked(true)
  }

  useEffect(() => {
    console.log("CLICKER: ", clicked)
  }, [clicked])
  

  return (
    <nav>
      <div className="brand-mark">
        <img className="icon" src={Icon} alt="" />
        <p className="name">HAPPY TIME</p>
      </div>
      
      <div className={expanded ? "hamburguer-icon expanded" : "hamburguer-icon"} onClick={() => handleExpand(true)}></div>
      <button className={expanded ? "close-expanded expanded" : "close-expanded"} onClick={() => handleExpand(false)}><CloseIcon /></button>
      
      <div className={expanded ? "nav-buttons expanded" : "nav-buttons"}>
        <a href="#servicios" onClick={() => {handleExpand(false)}} className="nav-button">Servicios</a>
        <a href="#sobre" onClick={() => {handleExpand(false)}} className="nav-button">Sobre HappyTime</a>
        <a href="#contactanos" onClick={() => {handleExpand(false)}} className="nav-button">Contactanos</a>
      </div>
      {
        !clicked &&
        <img className="click-here" src={Click} alt="" />
      }
    </nav>
  )
}

export default Navbar;