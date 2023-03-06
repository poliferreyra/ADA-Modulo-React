import { useState } from "react";

export const Ejercicio1 = () => {
  const [password, setPassword] = useState(false);

  return (
    <form>
      <div>
        <h3>Ejercicio 1</h3>
        <label htmlFor="password"></label>
        <input type={password ? "text" : "password"} name="password" id="password" />
      </div>
      <p>{password}</p>
      <div>
        <button type="button" onClick={()=>{
            setPassword(!password)
           }}>
          <i>👁</i>
        </button>
      </div>
    </form>
  );
};
