/** @format */

import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

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
