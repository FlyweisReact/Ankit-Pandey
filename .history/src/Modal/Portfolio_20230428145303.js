/** @format */
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Table } from "react-bootstrap";

export function PortfoliModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
      <p className="headP" style={{marginTop : '5%'}}>
       Portfolio
      </p>

        <Form>
         </Form>

    
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
