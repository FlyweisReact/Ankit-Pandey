/** @format */
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export function PortfoliModal(props) {
  const [data, setData] = useState([]);
  const [tradeData, setTradeData] = useState([]);

  const fetchTradeOrder = async () => {
    try {
      const { data } = await axios.get(
        "https://ant.aliceblueonline.com/rest/AliceBlueAPIService/api/placeOrder/fetchTradeBook",
        {
          headers: {
            Authorization: `Bearer 764564 8NCJcYACJXm7W8TR3TbM76ISfSW0jmEkiXQcfmiyXgdayjZ7TDLIWaJW0gdbVWjDCQ3dJJhoQkaA53N1ArOYe9P0LtmoTvsGDNm6vYSpDAmuNOhdRk4mdIdB4c4ipYEm5jaqcIXFFzYoScKttChs2XWuGXsq3vEU0mV5SrSEOcfZIa0050FAbexTuPOKxitV6YhH37L784Zs57066NBz6dMRYyzuDnuAlYkf4OX7S25XPxBX4bBi7jYXGGzmqTO8 `,
          },
        }
      );
      setTradeData(data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchOrderData = async () => {
    try {
      const { data } = await axios.get(
        "https://ant.aliceblueonline.com/rest/AliceBlueAPIService/api/placeOrder/fetchOrderBook",
        {
          headers: {
            Authorization: `Bearer 764564 8NCJcYACJXm7W8TR3TbM76ISfSW0jmEkiXQcfmiyXgdayjZ7TDLIWaJW0gdbVWjDCQ3dJJhoQkaA53N1ArOYe9P0LtmoTvsGDNm6vYSpDAmuNOhdRk4mdIdB4c4ipYEm5jaqcIXFFzYoScKttChs2XWuGXsq3vEU0mV5SrSEOcfZIa0050FAbexTuPOKxitV6YhH37L784Zs57066NBz6dMRYyzuDnuAlYkf4OX7S25XPxBX4bBi7jYXGGzmqTO8 `,
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
      fetchTradeOrder();
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
        <p className="headP">All Orders</p>
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
                <th>Trantype</th>
                <th>Scripname</th>
                <th>Validity</th>
                <th>series</th>
                <th>remarks</th>
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

        <p className="headP" style={{ marginTop: "5%" }}>
          All Trade Orders
        </p>
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
                <th>Trantype</th>
                <th>Scripname</th>
                <th>Validity</th>
                <th>series</th>
                <th>remarks</th>
              </tr>
            </thead>
            <tbody>
              {tradeData?.map((i, index) => (
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
