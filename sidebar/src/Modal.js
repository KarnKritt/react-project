import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { toggleModal, isModalActive } = useGlobalContext();
  return (
    <div className={`modal ${isModalActive ? "active" : ""}`}>
      <div className="card">
        <button className="times" onClick={toggleModal}>
          <i className="fas fa-times"></i>
        </button>
        <h2>This is the Modal</h2>
      </div>
    </div>
  );
};

export default Modal;
