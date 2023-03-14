import React, { useState } from "react";

export const Form = () => {
  const [grados, setGrados] = useState();
  const [far, setFar] = useState();

  const calcularGradosAFar = (e) => {
    e.preventDefault()
    setFar((grados * 9/5) + 32)
  };

  return (
    <>
    <h2>Grados centígrados</h2>
    <form onSubmit={calcularGradosAFar}>
      <input
      placeholder="Tipea grados centigrados"
      type="number"
        value={grados}
        onChange={(e) => {
          setGrados(e.target.value);
          console.log(grados);
        }}
      />
    </form>

    <h3>{far} grados Farenheit</h3>
    </>
  );
};