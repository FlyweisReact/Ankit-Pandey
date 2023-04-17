import React from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = ({ width, setWidth }) => {
  const Live = () => {
    let defaultAccount = document.getElementById("defaultAccount");
    defaultAccount.style.display = "none";

    let Demo = document.getElementById("DemoAcccount");
    Demo.style.display = "none";

    let target = document.getElementById("LiveAcccount");
    target.style.display = "block";
  };

  const Demo = () => {
    let defaultAccount = document.getElementById("defaultAccount");
    defaultAccount.style.display = "none";

    let target = document.getElementById("LiveAcccount");
    target.style.display = "none";

    let Demo = document.getElementById("DemoAcccount");
    Demo.style.display = "block";
  };

  return (
    <>
      <div>
        <div className="false-navbar">
          <p style={{ marginRight: "3%" }}>
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#0E155A",
                  textAlign: "center",
                }}
                id="dropdown-basic"
              >
                Account
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => Live()}>Live</Dropdown.Item>
                <Dropdown.Item onClick={() => Demo()}>Demo</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </p>

          <p
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "250px",
              border: "2px solid #041668",
              backgroundColor: "#041668",
              padding: "5px",
              borderRadius: "15px",
              marginRight: "1rem",
            }}
          >
            {" "}
            <AiOutlineSearch style={{ width: "25px", height: "25px" }} />{" "}
            <input type="search" placeholder="Search" className="Search" />
            <IoMdArrowDropdown style={{ width: "25px", height: "25px" }} />
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "250px",
              border: "2px solid #041668",
              backgroundColor: "#041668",
              padding: "5px",
              borderRadius: "15px",
              // marginRight: "5%",
              marginRight: "1rem",
            }}
          >
            {" "}
            <AiOutlineSearch style={{ width: "25px", height: "25px" }} />
            <input
              type="search"
              placeholder=" GraphSearch"
              className="Search"
            />
            <IoMdArrowDropdown style={{ width: "25px", height: "25px" }} />
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
