/** @format */

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export function OrderModal(props) {
  const [data, setData] = useState([]);

  const fetchOrderData = async () => {
    try {
      const { data } = await axios.get(
        "https://ant.aliceblueonline.com/rest/AliceBlueAPIService/api/placeOrder/fetchOrderBook",
        {
          headers: {
            Authorization: `Bearer 764564 tfhDgNPSo9GdbQXC1Ors3crUV1npKQresY6kBPcXdxmoqN19J4KEMLbW7WUQnKIyLlcQLTb6Uq8ny52k4RTAPt05v23lJayLoOpOP1u25l3hpBmaFznbvbLd2bTm1U8zXfxoIbPJC0gTORLvUZY0h9HEGeNseVCM6AQ5RYMggqyi3zvgI07lu4DXef5bMHePqjL50FdPFi1FUXI7pmWEi5jcnSYPy2OyzLPKjrFWipdgLRNgXSd8Zk1lP1EKiXl5 `,
          },
        }
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (props.show) {
      fetchOrderData();
    }
  }, [props.show]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>

        <div className="overflowCont">
        <Table striped bordered hover>
        <thead>
        <tr>
            <th>Price</th>
            <th>DiscQtyPerc</th>
            <th>Qty</th>
            <th>Sym</th>
            <th>Status</th>
            <th>Exseg</th>
            <th>ExchConfrmtime</th>
            <th>ExchOrdID</th>
            <th>Pcode</th>
            <th>Avgprc</th>
            <th>Avgprc</th>
            <th>Avgprc</th>
            <th>Avgprc</th>
            <th>Avgprc</th>
          </tr>
        </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> {i.Prc} </td>
                <td> {i.discQtyPerc} </td>
                <td> {i.Qty} </td>
                <td> {i.Sym} </td>
                <td> {i.Status} </td>
                <td> {i.Exseg} </td>
                <td> {i.ExchConfrmtime} </td>
                <td> {i.ExchOrdID} </td>
                <td> {i.Pcode} </td>
                <td> {i.Avgprc} </td>
                <td> {i.Trantype} </td>
                <td> {i.Scripname} </td>
                <td> {i.Validity} </td>
                <td> {i.series} </td>
                <td> {i.remarks} </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
      
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
