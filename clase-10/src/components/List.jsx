import { useState } from "react";
import {Item} from "./Item"

const animalList = [
  { id: "1", text: "Elefante" },
  { id: "2", text: "Ballena azul" },
  { id: "3", text: "Jirafa" },
  { id: "4", text: "Hipopótamo" },
];

export const List = () => {
  const [data, setData] = useState(animalList)

  const removeAnimal = (id)=>{
    setData(data.filter((a)=> id !== a.id) )
  }

  return (
    <div>
      <h1>Ejercicio elevando estado</h1>
    {data.map((animal)=> <Item key={animal.id}  animal={animal} removeAnimal={removeAnimal}/>)}
    {/* en animal={le paso el objeto entero} */}
    </div>
  );
};
