/** @format */
import React, { useState, useContext, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { VscAccount } from "react-icons/vsc";
import Dropdown from "react-bootstrap/Dropdown";
import { BsCashCoin } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import { MyContext } from "../MyContext";
import 


import { OrderModal, PortfoliModal, FundsModal } from "./GetOrder";


export function MobileBar() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <i className="fa-solid fa-bars" onClick={handleShow}></i> 
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
