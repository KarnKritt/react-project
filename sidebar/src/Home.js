import React from "react";
import { useGlobalContext } from "./context";

const Home = () => {
  const { toggleSidebar, toggleModal } = useGlobalContext();

  return (
    <div className="Home">
      <button className="bars" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </button>
      <button className="modalBtn" onClick={toggleModal}>
        Show Modal
      </button>
    </div>
  );
};

export default Home;
