import "./App.css";

import LogoReact from "./assets/react.svg";

import { Button } from "./components/Button";
import { Alert } from "./components/alert/Alert";
import { Card } from "./components/Card";
import { AppLayout } from "./layout/AppLayout";

function App() {
  return (
    <AppLayout>
      <div className="App">
        <h2>Clase 3 - PROPS</h2>
        <img src={LogoReact} alt="logo de React" />
        <img src="/vite.svg" alt="logo de Vite" />

        <div className="container">
          <Button color="orange">Btn1 con children</Button>
          <Button color="yellowgreen">Btn2 con children</Button>
          <Button color="aqua" />
        </div>
        <div className="container">
          <Alert>
            <p><strong>ALERT por defecto</strong></p>
          </Alert>
          <Alert type="success">
            <p><strong>ALERT Tipo Success</strong></p>
          </Alert>
          <Alert type="error">
            <img src="/vite.svg" alt="logo de Vite" />
            <p><strong>ALERT Tipo Error</strong></p>
          </Alert>
          <Alert type="warning">
            <p><strong>ALERT Tipo Warning</strong></p>
          </Alert>
        </div>
        <div className="container">
          <Card
            title="Card Title"
            img="https://illustoon.com/photo/350.png"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, repellat."
          />
        </div>
      </div>
    </AppLayout>
  );
}

export default App;
