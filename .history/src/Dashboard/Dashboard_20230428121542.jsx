/** @format */

import React, { useState , useContext } from "react";
import HOC from "../HOC";
import "./Dashboard.css";
import { GrClose } from "react-icons/gr";
import Card from "react-bootstrap/Card";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { MyContext } from "../Homepage/MyContext";

const Dashboard = () => {
  const [ modalShow  , setModalShow] = useState(true)

  const { myState , setMyState   } = useContext(MyContext)

  return (
    <>
      <div className="homeS">
        <div className="gridCont">
          {myState ? (
            <Card className="clear" >
              <Card.Body>
                <div className="filterDiv">
                  <div className="left">
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
                      onClick={() => setShow(false)}
                    />
                  </div>
                </div>

                <Table
                  striped
                  bordered
                  hover
                  style={{ backgroundColor: "#fff" }}
                >
                  <thead>
                    <tr>
                      <th>Demo</th>
                      <th>Demo</th>
                      <th>Demo</th>
                      <th>Demo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Demo</td>
                      <td>Demo</td>
                      <td>Demo</td>
                      <td>Demo</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          ) : (
            ""
          )}

          {
            modalShow ?
            <Card className="clear2" >
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
                  onClick={() => setModalShow(false)}
                />
              </div>
            </Card.Body>
          </Card> :""
          }

         
        </div>
      </div>
    </>
  );
};
export default HOC(Dashboard);
