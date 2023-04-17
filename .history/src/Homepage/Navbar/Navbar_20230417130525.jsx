import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import { IoMdArrowDropdown } from "react-icons/io";
import {Modal} from 'react-bootstrap'

const Navbar = ({ width, setWidth }) => {


  const [ modalShow , setModalShow] = useState(false)


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


  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
      </Modal>
    );
  }
  

  return (
    <>

    <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(true)} />

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
                <Dropdown.Item
                //  onClick={() => Live()}
                onClick={}
                
                >Live</Dropdown.Item>
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
