/** @format */
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

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
        Port
      </p>

    
        <div className="overflowCont">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Price</th>
                
              </tr>
            </thead>
            <tbody>
            
            </tbody>
          </Table>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
