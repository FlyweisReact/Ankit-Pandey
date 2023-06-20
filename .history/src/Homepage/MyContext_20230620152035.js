/** @format */

import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [myState, setMyState] = useState(false);
  const [secondTab, setSecondState] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [historicalData, setHistoricalData] = useState([]);
  const [Exchange, setEx] = useState(localStorage.getItem("Exchange"));
  const [searchConst, setSearchConst] = useState(
    localStorage.getItem("Symbol")
  );

  return (
    <MyContext.Provider
      value={{
        myState,
        setMyState,
        secondTab,
        setSecondState,
        darkTheme,
        setDarkTheme,
        historicalData,
        setHistoricalData,
        appConst,
        setAppConst,
        searchConst , 
        setSearchConst
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
