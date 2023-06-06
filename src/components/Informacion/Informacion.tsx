import { useEffect, useState } from "react";

import "./Informacion.scss";
import Cars from "../../assets/cars.jpg"
import SwipeLeft from "../../assets/swipe-left.svg"

const Informacion = () => {

  const [swipeLeft, setSwipteLeft] = useState<boolean>(true)
  
  useEffect(() => {
    const informacionContainer = document.getElementById("scroll")
    informacionContainer?.addEventListener("scroll", () => {
      if (informacionContainer.scrollWidth > 0) {
        setSwipteLeft(false)
      }
    });
  }, [])

  return (
    <div id="informacion" className="informacion">
      <div className="informacion-container" id="scroll">
        <div className={"experience"}>
          <div className="left-side">
            <h2 className="title">Cumpleaños temático</h2>
            <img src={Cars} alt="" />
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>Tenetur quisquam</span> explicabo illum, atque officia excepturi incidunt aspernatur. <br /><br /> Ullam nulla quo velit ea quis dolorum? Totam necessitatibus odio reprehenderit earum aperiam minima labore mollitia dolorum saepe.
          </p>
        </div>
        <div className={"experience"}>
          <div className="left-side">
            <h2 className="title">Cumpleaños temático</h2>
            <img src={Cars} alt="" />
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam explicabo illum, atque <span>officia excepturi incidunt</span> aspernatur. <br /><br /> Ullam nulla quo velit ea quis dolorum? Totam necessitatibus odio <span>reprehenderit</span> earum aperiam minima labore mollitia dolorum saepe.
          </p>
        </div>
        <div className={"experience"}>
          <div className="left-side">
            <h2 className="title">Cumpleaños temático</h2>
            <img src={Cars} alt="" />
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam explicabo illum, atque officia excepturi incidunt aspernatur. <br /><br /> <span>Ullam nulla quo velit</span> ea quis dolorum? Totam necessitatibus odio reprehenderit earum aperiam minima labore mollitia dolorum saepe.
          </p>
        </div>
        <div className={"experience"}>
          <div className="left-side">
            <h2 className="title">Cumpleaños temático</h2>
            <img src={Cars} alt="" />
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>Tenetur quisquam</span> explicabo illum, atque officia excepturi incidunt aspernatur. <br /><br /> Ullam nulla quo velit ea quis dolorum? Totam necessitatibus odio <span>reprehenderit earum</span> aperiam minima labore mollitia dolorum saepe.
          </p>
        </div>
        {
          swipeLeft &&
          <div className="right-pointer">
            <img className="icon" src={SwipeLeft} alt="" />
          </div>
        }
      </div>
    </div>
  )
}

export default Informacion