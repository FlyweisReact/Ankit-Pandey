/** @format */

import React, { useContext, useState } from "react";
import Navbar from "./Homepage/Navbar/Navbar";
import Sidebar from "./Homepage/Sidebar/Sidebar";
import "./HOC.css";
import { MyContext } from "./Homepage/MyContext";

const HOC = (Wcomponent) => {
  return function Component() {
    const [width, setWidth] = useState(false);
    const { darkTheme } = useContext(MyContext);
    const [hamb, setHamb] = useState(true);

    return (
      <>
        <div className={darkTheme ? "flex darkTheme" : "flex"}>
          
            <div>
            <Sidebar width={width} />
            </div>
          <div style={{ width: "100%" }}>
            <Navbar width={width} setWidth={setWidth} />

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
