import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador : {count}</h1>
      <button
        onClick={() => {
          setCount(count +1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};
