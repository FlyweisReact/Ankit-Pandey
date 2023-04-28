/** @format */
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Form, Button } from "react-bootstrap";

export function OrderModal(props) {
  const [data, setData] = useState([]);
  const [tradeData, setTradeData] = useState([]);

  const fetchTradeOrder = async () => {
    try {
      const { data } = await axios.get(
        "https://ant.aliceblueonline.com/rest/AliceBlueAPIService/api/placeOrder/fetchTradeBook",
        {
          headers: {
            Authorization: `Bearer 764564 tfhDgNPSo9GdbQXC1Ors3crUV1npKQresY6kBPcXdxmoqN19J4KEMLbW7WUQnKIyLlcQLTb6Uq8ny52k4RTAPt05v23lJayLoOpOP1u25l3hpBmaFznbvbLd2bTm1U8zXfxoIbPJC0gTORLvUZY0h9HEGeNseVCM6AQ5RYMggqyi3zvgI07lu4DXef5bMHePqjL50FdPFi1FUXI7pmWEi5jcnSYPy2OyzLPKjrFWipdgLRNgXSd8Zk1lP1EKiXl5 `,
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

export function PortfoliModal(props) {
  const [ret, setRet] = useState("");
  const [data, setData] = useState([]);
  const [ show , setShow] = useState(false)

  const postHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://ant.aliceblueonline.com/rest/AliceBlueAPIService/api/positionAndHoldings/positionBook",
        {
          ret,
        },
        {
          headers: {
            Authorization: `Bearer 764564 tfhDgNPSo9GdbQXC1Ors3crUV1npKQresY6kBPcXdxmoqN19J4KEMLbW7WUQnKIyLlcQLTb6Uq8ny52k4RTAPt05v23lJayLoOpOP1u25l3hpBmaFznbvbLd2bTm1U8zXfxoIbPJC0gTORLvUZY0h9HEGeNseVCM6AQ5RYMggqyi3zvgI07lu4DXef5bMHePqjL50FdPFi1FUXI7pmWEi5jcnSYPy2OyzLPKjrFWipdgLRNgXSd8Zk1lP1EKiXl5 `,
          },
        }
      );
      setData(data);
      setShow(true)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <p className="headP">Portfolio</p>

        <Form onSubmit={postHandler}>
          <Form.Select
            aria-label="Default select example"
            className="mb-3"
            onChange={(e) => setRet(e.target.value)}
          >
            <option>-- Select RET --</option>
            <option value="DAY">DAY</option>
            <option value="IOC">IOC</option>
          </Form.Select>

          <Button variant="outline-success" type="submit">
            Submit
          </Button>
        </Form>

        <div className="overflowCont" style={{marginTop : '5%'}}>
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
                {data?.map((i , index) => (
                  <tr key={index}>
                    <td> {i.realisedprofitloss} </td>
                    <td> {i.Fillsellamt} </td>
                    <td> {i.Netqty} </td>
                    <td> {i.Symbol} </td>
                    <td> {i.Instname} </td>
                    <td> {i.Expdate} </td>
                    <td> {i.LTP} </td>
                    <td> {i.Opttype} </td>
                    <td> {i.BLQty} </td>
                    <td> {i.Token} </td>
                    <td> {i.Fillbuyamt} </td>
                    <td> {i.Fillsellqty} </td>
                    <td> {i.Tsym} </td>
                    <td> {i.sSqrflg} </td>
                    <td> {i.unrealisedprofitloss} </td>
                    <td> {i.Buyavgprc} </td>
                    <td> {i.MtoM} </td>
                    <td> {i.stat} </td>
                    <td> {i.MtoM} </td>
                    <td> {i.MtoM} </td>
                    <td> {i.MtoM} </td>
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
