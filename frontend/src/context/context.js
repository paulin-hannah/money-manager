import { createContext } from "react";


const appURL = "https://money-manager-backend-wdph.onrender.com/";

const initial = [];

export const Tracker = createContext(initial);

export const Provider = ({ children }) => {

  return (
    <Tracker.Provider
      value={{
        appURL
      }}
    >
      {children}
    </Tracker.Provider>
  );
};
