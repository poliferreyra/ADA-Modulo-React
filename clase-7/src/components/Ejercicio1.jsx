import { useState } from "react";

const fondoColor = [
  "orange",
  "tomato",
  "magenta",
  "azure",
  "yellow",
  "deepPink",
  "aqua",
];

export const Ejercicio1 = () => {
  const [color, setColor] = useState(fondoColor[0]);
  console.log(color) // orange

  const cambiarFondo = () => {
    const randomColor = Math.floor(Math.random() * fondoColor.length);
        console.log(fondoColor[randomColor]); 
        setColor(fondoColor[randomColor]) // fondoColor[va a indicar el indice del array de manera random]
  };

  return (
    <div style={{ backgroundColor: color }}>
      <h1>Ejercicio 1</h1>
      <h2>Cambiar color de fondo</h2>
      <button onClick={cambiarFondo}>Cambiar</button>
    </div>
  );
};
