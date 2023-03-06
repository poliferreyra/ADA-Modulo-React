import { useState } from "react"

export const Ejercicio2 = () => {
    const [option, setOption] = useState("Option1")

 const handleOption = (e)=>{
    setOption(e.target.value)
 }
  return (
    <div>
        <h1>Ejercicio 2</h1>
        <select value={option} onChange= {handleOption} >
            <option value="Option1">Op1</option>
            <option value="Option2">Op2</option>
            <option value="Option3">Op3</option>
        </select>
        <p>La opción seleccionada es : {option} </p>
    </div>
  )
}
