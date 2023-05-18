/** @format */

import React, { useContext, useState } from "react";
import Navbar from "./Homepage/Navbar/Navbar";
import Sidebar from "./Homepage/Sidebar/Sidebar";
import "./HOC.css";
import { MyContext } from "./Homepage/MyContext";

const HOC = (Wcomponent) => {
  return function Component() {
    const [width, setWidth] = useState(false);
    const { darkTheme  } = useContext(MyContext)
    const [ hamb , setHamb ] = useState(false)
    
    return (
      <>
        <div className={
            darkTheme ? "flex darkTheme" : 'flex'
        } >
          <Sidebar width={width}  />
          <div style={{ width: "100%" }}>
          <div className={hamb ? "d-none" : ""}>
          <Navbar width={width} setWidth={setWidth} />
          </div>
            <div className="wcom" >
              <Wcomponent  />
            </div>
          </div>
        </div>
      </>
    );
  };
};

export default HOC;
