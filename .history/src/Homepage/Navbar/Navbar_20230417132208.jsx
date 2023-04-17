/** @format */

import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import { IoMdArrowDropdown } from "react-icons/io";
import { Button, Form, Modal } from "react-bootstrap";
import axios from 'axios'

const Navbar = ({ width, setWidth }) => {
  const [modalShow, setModalShow] = useState(false);
  const SessionId = localStorage.getItem("sessionId")

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

    const [userId , setUserId] = useState("")
    const [key , setKey] = useState("")


    const LoginUser = async (e) => {
      e.preventDefault()
      try{
        const { data} = await axios.post("https://kc1ey9vyn6.execute-api.ap-south-1.amazonaws.com/dev//api/v1/auth" ,  { key , userId })
        localStorage.setItem("sessionId" , data?.message?.sessionID)
        console.log(data?.message?.sessionID)
        setModalShow(false)
        alert("Logged In Successfully")
      }catch(e) {
         console.log(e)
         alert("Check Credentials")
      }
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={LoginUser}>
            <Form.Group className="mb-3">
              <Form.Label>User Id</Form.Label>
              <Form.Control type="number" onChange={(e) => setUserId(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Key</Form.Label>
              <Form.Control type="text" onChange={(e) => setKey(e.target.value)}  />
            </Form.Group>
            <Button type="submit" variant="outline-success">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(true)}
      />

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
                  onClick={() => setModalShow(true)}
                >
                  Live
                </Dropdown.Item>
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
          {SessionId ? :"" }
        </div>
      </div>
    </>
  );
};

export default Navbar;
