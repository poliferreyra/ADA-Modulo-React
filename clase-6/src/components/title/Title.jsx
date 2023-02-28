import { useState } from "react";

export function Title() {
  const [title, setTitle] = useState("Clase 6 - useState");

  return (
    <div className="App">
      <h1>{title}</h1>
      <button
        onClick={() => {
          setTitle("New Title");
        }}
      >Modify title</button>
    </div>
  );
}

