import { useState } from 'react'

import './App.css'
import { Carrousel } from './components/Carrousel'
import { TrafficLight } from './components/ejercicioSemaforo/TrafficLight'

function App() {

  return (
    <div className="App">
      <h1>Clase 11</h1>
      {/* <Carrousel/> */}
      <TrafficLight/>
    </div>
  )
}

export default App
