import {Navbar} from "./componets/navbar/Navbar";

const App = () => {
  const nombre = "Poli";
  const apellido = "Ferreyra";
  return (
  <div>
    <Navbar />
    <h1>{nombre}</h1>
    <h2>{apellido}</h2>
  </div>
  )
}

export default App;
