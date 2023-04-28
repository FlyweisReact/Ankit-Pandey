/** @format */

import React, { useState } from "react";
import HOC from "../HOC";
import "./Dashboard.css";
import { GrClose } from "react-icons/gr";
import Card from "react-bootstrap/Card";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { Table } from "react-bootstrap";

const Dashboard = () => {
  const [show, setShow] = useState(true);
  const [ modalShow  , setModalShow] = useState(true)

  return (
    <>
      <div className="homeS">
        <div className="gridCont">
          {show ? (
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
            modalShow ? :""
          }

         
        </div>
      </div>
    </>
  );
};
export default HOC(Dashboard);
