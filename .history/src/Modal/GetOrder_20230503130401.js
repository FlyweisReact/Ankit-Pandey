/** @format */
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Form, Button } from "react-bootstrap";

export function OrderModal(props) {
  const [data, setData] = useState([]);
  const [tradeData, setTradeData] = useState([]);
  const SessionId = localStorage.getItem("sessionId");

  const fetchTradeOrder = async () => {
    try {
      const { data } = await axios.get(
        "https://ant.aliceblueonline.com/rest/AliceBlueAPIService/api/placeOrder/fetchTradeBook",
        {
          headers: {
            Authorization: `Bearer 764564 ${SessionId} `,
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
            Authorization: `Bearer 764564 ${SessionId} `,
          },
        }
      );
      setData(data);
      console.log(data)
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
  const [show, setShow] = useState(false);
  const SessionId = localStorage.getItem("sessionId");

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
      setShow(true);
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

        {show ? (
          <div className="overflowCont" style={{ marginTop: "5%" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>realisedprofitloss</th>
                  <th>Fillsellamt</th>
                  <th>Netqty</th>
                  <th>Symbol</th>
                  <th>Instname</th>
                  <th> Expdate </th>
                  <th> LTP </th>
                  <th> Opttype </th>
                  <th> BLQty </th>
                  <th> Token </th>
                  <th> Fillbuyamt </th>
                  <th> Fillsellqty </th>
                  <th> Tsym </th>
                  <th> sSqrflg </th>
                  <th> unrealisedprofitloss </th>
                  <th> Buyavgprc </th>
                  <th> MtoM </th>
                  <th> stat </th>
                  <th> s_NetQtyPosConv </th>
                  <th> Sqty </th>
                  <th> Sellavgprc </th>
                  <th> PriceDenomenator </th>
                  <th> PriceNumerator </th>
                  <th> actid </th>
                  <th> posflag </th>
                  <th> Pcode </th>
                  <th> Stikeprc </th>
                  <th> Bqty </th>
                  <th> BEP </th>
                  <th> Exchange </th>
                  <th> Series </th>
                  <th> GeneralDenomenator </th>
                  <th>Type </th>
                  <th> Netamt </th>
                  <th> companyname </th>
                  <th> Fillbuyqty </th>
                  <th> GeneralNumerator </th>
                  <th> Exchangeseg </th>
                  <th> discQty </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((i, index) => (
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
                    <td> {i.s_NetQtyPosConv} </td>
                    <td> {i.Sqty} </td>
                    <td> {i.Sellavgprc} </td>
                    <td> {i.PriceDenomenator} </td>
                    <td> {i.PriceNumerator} </td>
                    <td> {i.actid} </td>
                    <td> {i.posflag} </td>
                    <td> {i.Pcode} </td>
                    <td> {i.Stikeprc} </td>
                    <td> {i.Bqty} </td>
                    <td> {i.BEP} </td>
                    <td> {i.Exchange} </td>
                    <td> {i.Series} </td>
                    <td> {i.GeneralDenomenator} </td>
                    <td> {i.Type} </td>
                    <td> {i.Netamt} </td>
                    <td> {i.companyname} </td>
                    <td> {i.Fillbuyqty} </td>
                    <td> {i.GeneralNumerator} </td>
                    <td> {i.Exchangeseg} </td>
                    <td> {i.discQty} </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          ""
        )}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export function FundsModal(props) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://ant.aliceblueonline.com/rest/AliceBlueAPIService/api/limits/getRmsLimits",
        {
          headers: {
            Authorization: `Bearer 764564 tfhDgNPSo9GdbQXC1Ors3crUV1npKQresY6kBPcXdxmoqN19J4KEMLbW7WUQnKIyLlcQLTb6Uq8ny52k4RTAPt05v23lJayLoOpOP1u25l3hpBmaFznbvbLd2bTm1U8zXfxoIbPJC0gTORLvUZY0h9HEGeNseVCM6AQ5RYMggqyi3zvgI07lu4DXef5bMHePqjL50FdPFi1FUXI7pmWEi5jcnSYPy2OyzLPKjrFWipdgLRNgXSd8Zk1lP1EKiXl5`,
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
      fetchData();
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
        <p className="headP">Funds</p>

        <div className="overflowCont">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> symbol </th>
                <th> cncMarginUsed </th>
                <th> spanmargin </th>
                <th> branchAdhoc </th>
                <th> adhocMargin </th>
                <th>payoutamount</th>
                <th>cdsSpreadBenefit</th>
                <th>adhocscripmargin</th>
                <th>exposuremargin</th>
                <th>scripbasketmargin</th>
                <th>credits</th>
                <th>segment</th>
                <th>net</th>
                <th>turnover</th>
                <th>grossexposurevalue</th>
                <th>mfssAmountUsed</th>
                <th>realizedMtomPrsnt</th>
                <th>product</th>
                <th>stat</th>
                <th>cncSellCrditPrsnt</th>
                <th>debits</th>
                <th>varmargin</th>
                <th>multiplier</th>
                <th>elm</th>
                <th>mfamount</th>
                <th>cashmarginavailable</th>
                <th> brokeragePrsnt </th>
                <th>cncRealizedMtomPrsnt</th>
                <th>notionalCash</th>
                <th>directcollateralvalue</th>
                <th>cncBrokeragePrsnt</th>
                <th>valueindelivery</th>
                <th>nfoSpreadBenefit</th>
                <th>losslimit</th>
                <th>subtotal</th>
                <th>rmsPayInAmnt</th>
                <th>unrealizedMtomPrsnt</th>
                <th>coverOrderMarginPrsnt</th>
                <th>exchange</th>
                <th>category</th>
                <th>collateralvalue</th>
                <th>rmsIpoAmnt</th>
                <th>cncUnrealizedMtomPrsnt</th>
                <th>premiumPrsnt</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {i.symbol} </td>
                  <td> {i.cncMarginUsed} </td>
                  <td> {i.spanmargin} </td>
                  <td> {i.branchAdhoc} </td>
                  <td> {i.adhocMargin} </td>
                  <td> {i.payoutamount} </td>
                  <td> {i.cdsSpreadBenefit} </td>
                  <td> {i.adhocscripmargin} </td>
                  <td> {i.exposuremargin} </td>
                  <td> {i.scripbasketmargin} </td>
                  <td> {i.credits} </td>
                  <td> {i.segment} </td>
                  <td> {i.net} </td>
                  <td> {i.turnover} </td>
                  <td> {i.grossexposurevalue} </td>
                  <td> {i.mfssAmountUsed} </td>
                  <td> {i.realizedMtomPrsnt} </td>
                  <td> {i.product} </td>
                  <td> {i.stat} </td>
                  <td> {i.cncSellCrditPrsnt} </td>
                  <td> {i.debits} </td>
                  <td> {i.varmargin} </td>
                  <td> {i.multiplier} </td>
                  <td> {i.elm} </td>
                  <td> {i.mfamount} </td>
                  <td> {i.cashmarginavailable} </td>
                  <td> {i.brokeragePrsnt} </td>
                  <td> {i.cncRealizedMtomPrsnt} </td>
                  <td> {i.notionalCash} </td>
                  <td> {i.directcollateralvalue} </td>
                  <td> {i.cncBrokeragePrsnt} </td>
                  <td> {i.valueindelivery} </td>
                  <td> {i.nfoSpreadBenefit} </td>
                  <td> {i.losslimit} </td>
                  <td> {i.subtotal} </td>
                  <td> {i.rmsPayInAmnt} </td>
                  <td> {i.unrealizedMtomPrsnt} </td>
                  <td> {i.coverOrderMarginPrsnt} </td>
                  <td> {i.exchange} </td>
                  <td> {i.category} </td>
                  <td> {i.collateralvalue} </td>
                  <td> {i.rmsIpoAmnt} </td>
                  <td> {i.cncUnrealizedMtomPrsnt} </td>
                  <td> {i.premiumPrsnt} </td>
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
