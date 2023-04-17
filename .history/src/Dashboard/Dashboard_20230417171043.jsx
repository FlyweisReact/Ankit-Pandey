/** @format */

import React from "react";
import HOC from "../HOC";
import "./Dashboard.css";
import { GrClose } from "react-icons/gr";
import Card from "react-bootstrap/Card";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const Dashboard = () => {
  return (
    <>
      <div className="homeS">
        <div className="gridCont">
          <Card className="clear" id="clearP">
            <Card.Body>
              <div className="filterDiv">
                <div
                //  style={{ display: "flex" }}
                className="left"
                
                >
                  <p className="clearP">
                    {" "}
                    <AiOutlineSearch
                      style={{ width: "25px", height: "25px" }}
                    />{" "}
                    Filter{" "}
                    <IoMdArrowDropdown
                      style={{ width: "25px", height: "25px" }}
                    />
                  </p>
                </div>
                <div className="right">
                <AiOutlineClose
                  style={{
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    
                  }}
                  onClick={() =>
                    (document.getElementById("clearP").style.display = "none")
                  }
                />
                </div>
               
              </div>
            </Card.Body>
          </Card>
          <Card className="clear2" id="clear2">
            <Card.Body>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "280px",
                    border: "2px solid #041668",
                    backgroundColor: "rgba(12, 52, 240, 0.2)",
                    padding: "5px",
                    borderRadius: "15px",
                    marginRight: "5%",
                    color: "#041668",

                    fontWeight: "900",
                  }}
                >
                  {" "}
                  <AiOutlineSearch
                    style={{ width: "25px", height: "25px" }}
                  />{" "}
                  Filter
                  <IoMdArrowDropdown
                    style={{ width: "25px", height: "25px" }}
                  />
                </p>
                <GrClose
                  color="black"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginTop: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    (document.getElementById("clear2").style.display = "none")
                  }
                />
              </div>
            </Card.Body>
          </Card>
          <Card className="clear3" id="clear3">
            <Card.Body>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "280px",
                    border: "2px solid #041668",
                    backgroundColor: "rgba(12, 52, 240, 0.2)",
                    padding: "5px",
                    borderRadius: "15px",
                    marginRight: "5%",
                    color: "#041668",
                    fontWeight: "900",
                  }}
                >
                  {" "}
                  <AiOutlineSearch
                    style={{ width: "25px", height: "25px" }}
                  />{" "}
                  Graph Search{" "}
                  <IoMdArrowDropdown
                    style={{ width: "25px", height: "25px" }}
                  />
                </p>
                <GrClose
                  color="black"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginTop: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    (document.getElementById("clear3").style.display = "none")
                  }
                />
              </div>
            </Card.Body>
          </Card>
        </div>

        <div style={{ display: "flex" }}>
          <Card
            className="clear3"
            style={{ width: "330px", marginLeft: "23px" }}
            id="clear4"
          >
            <Card.Body>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "280px",
                    border: "2px solid #041668",
                    backgroundColor: "rgba(12, 52, 240, 0.2)",
                    padding: "5px",
                    borderRadius: "15px",
                    marginRight: "5%",
                    color: "#041668",
                    fontWeight: "900",
                  }}
                >
                  {" "}
                  <AiOutlineSearch
                    style={{ width: "25px", height: "25px" }}
                  />{" "}
                  Filter{" "}
                  <IoMdArrowDropdown
                    style={{ width: "25px", height: "25px" }}
                  />
                </p>

                <GrClose
                  color="black"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginTop: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    (document.getElementById("clear4").style.display = "none")
                  }
                />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
export default HOC(Dashboard);
