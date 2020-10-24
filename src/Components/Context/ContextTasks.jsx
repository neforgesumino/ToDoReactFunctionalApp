
import React, { createContext, useState } from 'react'

export const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [allTasks, setAllTasks] = useState([]);

  return (
    <TasksContext.Provider value={{ show, setShow, allTasks, setAllTasks }}>
      {children}
    </TasksContext.Provider>
  );
}
