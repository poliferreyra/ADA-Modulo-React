import { useState } from "react"
import { Light } from "./Light"

import "../ejercicioSemaforo/Style.css"

export const TrafficLight = () => {
  const [lightColor, setLightColor] = useState("gray")
  
  return (
    <div>
        <h2>Ejercicio Semaforo</h2>
        <div className="container">
          <Light idColor="red" lightColor={lightColor} setLightColor={setLightColor}/>
          {/* genero las propiedades para luego pasarlas por prop - idColor para identificar en cual hago click */}
          <Light idColor="yellow" lightColor={lightColor} setLightColor={setLightColor}/>
          <Light idColor="green" lightColor={lightColor} setLightColor={setLightColor}/>
        </div>
    </div>
  )
}
