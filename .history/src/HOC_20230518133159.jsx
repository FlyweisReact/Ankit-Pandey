/** @format */

import React, { useContext, useState } from "react";
import Navbar from "./Homepage/Navbar/Navbar";
import Sidebar from "./Homepage/Sidebar/Sidebar";
import "./HOC.css";
import { MyContext } from "./Homepage/MyContext";

const HOC = (Wcomponent) => {
  return function Component() {
    const [width, setWidth] = useState(true);
    const { darkTheme } = useContext(MyContext);
    const [hamb, setHamb] = useState(false);

    return (
      <>
        <div className={darkTheme ? "flex darkTheme" : "flex"}>
          
            <div className={hamb ? 'd-none' : ""}>
            <Sidebar width={width}  setHamb={setHamb} setWidth={setWidth} />
            </div>
          <div style={{ width: "100%" }}>
            <Navbar setHamb={setHamb} hamb={hamb} />
            <div className="wcom">
              <Wcomponent />
            </div>
          </div>
        </div>
      </>
    );
  };
};

export default HOC;
