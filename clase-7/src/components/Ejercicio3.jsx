import { useState } from "react";
const temas = [
    {
      nombre: 'Tema 1',
      backgroundColor: '#FFFFFF',
      color: '#000000',
      borderColor: '#000000'
    },
    {
      nombre: 'Tema 2',
      backgroundColor: '#000000',
      color: '#FFFFFF',
      borderColor: '#FFFFFF'
    },
    {
      nombre: 'Tema 3',
      backgroundColor: '#FF0000',
      color: '#FFFFFF',
      borderColor: '#000000'
    }
  ];

export const Ejercicio3 = () => {
  const [tema, setTema] = useState(temas[0]);
  const changeTema = () => {
    const randomTema = Math.floor(Math.random() * temas.length);
    
    setTema(temas[randomTema]);
    console.log(tema)
  };

  const estilos = {
    backgroundColor: tema.backgroundColor,
    color: tema.color,
    border: `1px solid ${tema.borderColor}`,
    margin: "10px",
    padding: "10px",
  };
  return (
    <div>
      <div style={estilos}>
        <h1>Ejercicio 3</h1>
        <div className="card">
            <h2>{tema.nombre}</h2>
          <button
            onClick={() => {
              changeTema();
            }}
          >
            Cambiar color
          </button>
        </div>
      </div>
    </div>
  );
};
