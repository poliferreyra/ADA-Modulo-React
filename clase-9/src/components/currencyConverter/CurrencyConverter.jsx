import { useState } from "react";

export const CurrencyConverter = () => {
  const [ars, setArs] = useState();
  const [dolar, setDolar] = useState();

  const cambioPesoADolar = (e) => {
    const inputValue = e.target.value;
    setArs(inputValue);
    setDolar((inputValue / 380).toFixed(3));
  };
  const cambioDolarAPesos = (e) => {
    const inputValue = e.target.value;
    setDolar(inputValue);
    setArs((inputValue * 380).toFixed(3));
  };
  return (
    <>
    <h1>Currency Converter</h1>
    <form>
      <div>
        <label htmlFor="pesos">Pesos Argentinos</label>
        <input
          value={ars}
          name="ars"
          id="pesos"
          type="number"
          onChange={cambioPesoADolar}
        />
      </div>
      <div>
        <label htmlFor="dolar">Dolar EEUU</label>
        <input
          value={dolar}
          name="dolar"
          id="dolar"
          type="number"
          onChange={cambioDolarAPesos}
        />
      </div>
    </form>
    </>
    
  );
};
