import { useState } from "react";
import { perros } from "../data/perros.js";

export const Carrousel = () => {
  const [index, setIndex] = useState(0);

  const { src, alt } = perros[index];

  const addIndex = () => {
    if (index === perros.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const substractIndex = () => {
    if (index === 0) {
        setIndex(perros.length - 1);
    } else {
        setIndex(index - 1);
    }
  };

  return (
    <div>
      <h2>Ejercicio Carousel</h2>
      <div style={{ display: "flex" }}>
      <button onClick={substractIndex}>◀</button>
      <img src={src} alt={alt} style={{ width: 300, height: 200 }} />
      <button onClick={addIndex}>▶</button>
      </div>
    </div>
  );
};
