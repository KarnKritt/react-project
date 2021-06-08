import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };
  const toggleModal = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <AppContext.Provider
      value={{ toggleModal, toggleSidebar, isSidebarActive, isModalActive }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
