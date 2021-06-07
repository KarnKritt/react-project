import React, { useEffect } from "react";

const Modal = ({ show, msg, type, setModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setModal();
    }, 1500);
  }, [show]);

  return (
    <div className={`modal ${type}`}>
      <p>{msg}</p>
    </div>
  );
};

export default Modal;
