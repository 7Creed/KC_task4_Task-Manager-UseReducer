import React, { useContext, useState } from "react";

const AppContext = React.createContext("");

const AppProvider = ({ children }) => {
  let cleared = { title: "", desc: "", due_date: "" };

  const [newTask, setNewTask] = useState(cleared);
  return (
    <AppContext.Provider value={{ newTask, setNewTask }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
