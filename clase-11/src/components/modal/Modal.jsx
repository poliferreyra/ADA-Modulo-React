import React from "react";
import "./Modal.css";

export const Modal = ({
  children,
  showModal,
  title = "Título por defecto",
  setShowModal,
  btn = true
  
}) => {
  return (
    showModal && (
    <div className="modal-container">
      <div className="overlay"/>
        <div className="modal">
          <h2>{title}</h2>
          {btn && <button
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cerrar modal 
          </button>}
          {children}
        </div>
        </div>
      )
  );
};