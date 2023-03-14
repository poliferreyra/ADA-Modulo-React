import { useState } from "react";

import "./App.css";
import { Carrousel } from "./components/Carrousel";
import { TrafficLight } from "./components/ejercicioSemaforo/TrafficLight";
import { Modal } from "./components/modal/Modal";
import { Nav } from "./components/modal/Nav";


function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <h1>Clase 11</h1>
      {/* <Carrousel/> */}
      {/* <TrafficLight/> */}
      <Nav/>
      <h2 onClick={() => {
        setShowModal(true)
      }} >
        Click aquí para abrir modal</h2>
      <Modal showModal = {showModal} setShowModal= {setShowModal} title = "Título desde App">
            
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, perferendis.</p>
      </Modal>
    </div>
  );
}

export default App;
