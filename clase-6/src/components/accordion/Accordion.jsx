import { useState } from "react";

export const Accordion = () => {
    const [show, setShow] = useState(false)

  return (
    <div>
      <h1 onClick ={()=>{
        setShow(!show)
      }}>Accordion</h1>
      {show && <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure alias
        neque consequuntur enim distinctio impedit dolore placeat incidunt
        labore asperiores, cum at! Quos deleniti molestias minus labore,
        explicabo aut maxime.
      </p>}
    </div>
  );
};
