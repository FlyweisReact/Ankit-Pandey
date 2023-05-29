/** @format */
import Modal from "react-bootstrap/Modal";
import { useState, useEffect, useCallback, useContext } from "react";
import axios from "axios";
import { Table, Form, Button, Alert, Container } from "react-bootstrap";
import { MyContext } from "../Homepage/MyContext";

export function OrderModal(props) {
  const [data, setData] = useState([]);
  const [tradeData, setTradeData] = useState([]);
  const SessionId = localStorage.getItem("sessionId");
  const UserId = localStorage.getItem("userId");

  const fetchTradeOrder = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://ant.aliceblueonline.com/rest/AliceBlueAPIService/api/placeOrder/fetchTradeBook",
        {
          headers: {
            Authorization: `Bearer ${UserId} ${SessionId} `,
          },
        }
      );
      setTradeData(data);
    } catch (e) {
      console.log(e);
    }
  }, [SessionId, UserId]);

  const putCash = useCallback(async () => {
    try {
      const { data } = await axios.put(
        `https://kc1ey9vyn6.execute-api.ap-south-1.amazonaws.com/dev/api/v1/profile/cash/${UserId}`
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }, [UserId]);

  const fetchOrderData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://ant.aliceblueonline.com/rest/AliceBlueAPIService/api/placeOrder/fetchOrderBook",
        {
          headers: {
            Authorization: `Bearer ${UserId} ${SessionId} `,
          },
        }
      );
      setData(data);
      putCash();
    } catch (e) {
      console.log(e);
    }
  }, [SessionId, UserId, putCash]);

  useEffect(() => {
    if (props.show) {
      fetchOrderData();
      fetchTradeOrder();
    }
  }, [props.show, fetchTradeOrder, fetchOrderData]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="headingClose">
          <p></p>
          <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>
        </div>
        <p className="headP">All Orders</p>
        {data?.emsg === "No Data" ? (
          <Alert>No Data Found</Alert>
        ) : (
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
        )}

        <p className="headP" style={{ marginTop: "5%" }}>
          All Trade Orders
        </p>
        {data?.emsg === "No Data" ? (
          <Alert>No Data Found</Alert>
        ) : (
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
        )}
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
  const UserId = localStorage.getItem("userId");

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
            Authorization: `Bearer ${UserId} ${SessionId} `,
          },
        }
      );
      console.log("portfolio", data);
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
      <Modal.Body>
        <div className="headingClose">
          <p className="headP">Portfolio</p>
          <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>
        </div>

        <Form onSubmit={postHandler} className="mb-3">
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
          data?.emsg === "No Data" ? (
            <Alert>No Data Found</Alert>
          ) : (
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
          )
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
  const SessionId = localStorage.getItem("sessionId");
  const UserId = localStorage.getItem("userId");

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://ant.aliceblueonline.com/rest/AliceBlueAPIService/api/limits/getRmsLimits",
        {
          headers: {
            Authorization: `Bearer ${UserId} ${SessionId}`,
          },
        }
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }, [SessionId, UserId]);

  useEffect(() => {
    if (props.show) {
      fetchData();
    }
  }, [props.show, fetchData]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="headingClose">
          <p className="headP">Funds</p>
          <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>
        </div>

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

export function HistoricalModal(props) {
  const UserId = localStorage.getItem("userId");
  const [token, setToken] = useState("");
  const [resolution, setResolution] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [exchange, setExchange] = useState("");
  const SessionId = localStorage.getItem("sessionId");
  const { setMyState, setHistoricalData } = useContext(MyContext);

  const HistoricalData = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://ant.aliceblueonline.com/rest/AliceBlueAPIService/api/chart/history",
        {
          token,
          resolution,
          from,
          to,
          exchange,
        },
        {
          headers: {
            Authorization: `Bearer ${UserId} ${SessionId}`,
          },
        }
      );
      setHistoricalData(data);
      setMyState(true);
      props.onHide();
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
      <Modal.Body>
        <div className="headingClose">
          <p>Historical Data</p>
          <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>
        </div>
        <Form onSubmit={HistoricalData}>
          <Form.Group className="mb-3">
            <Form.Label>token</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setToken(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Resolution</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setResolution(e.target.value)}
            />
          </Form.Group>
          <Form.Select aria-label="Default select example" className="mb-3">
      <option>-- Select Resolution -- </option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
          <Form.Group className="mb-3">
            <Form.Label>From</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setFrom(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>To</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setTo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Exchange</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setExchange(e.target.value)}
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button type="submit" variant="outline-success">
              Submit
            </Button>

            <Button
              variant="outline-info"
              onClick={() => {
                props.onHide();
                setMyState(true);
              }}
            >
              Open Historical Chart
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export function PlaceOrderModal(props) {
  const UserId = localStorage.getItem("userId");
  const SessionId = localStorage.getItem("sessionId");
  const [complexty, setComplexty] = useState("");
  const [discqty, setDiscqty] = useState("");
  const [pCode, setpCode] = useState("");
  const [prctyp, setPrctyp] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [ret, setRet] = useState("");
  const [symbol_id, setSymbolId] = useState("");
  const [trading_symbol, setTradingSymbol] = useState("");
  const [transtype, setTranstype] = useState("");
  const [trigPrice, setTrigPrice] = useState("");
  const exch = localStorage.getItem("Exchange");

  const postHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `https://ant.aliceblueonline.com/rest/AliceBlueAPIService/api/placeOrder/executePlaceOrder`,
        [
          {
            complexty,
            discqty,
            exch,
            pCode,
            prctyp,
            price,
            qty,
            ret,
            symbol_id,
            trading_symbol,
            transtype,
            trigPrice,
          },
        ],
        {
          headers: {
            Authorization: `Bearer ${UserId} ${SessionId}`,
          },
        }
      );
      alert("Submited");
      props.onHide();
      console.log(data);
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
      <Modal.Body>
        <div className="headingClose">
          <p>Place Order</p>
          <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>
        </div>
        <div>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setComplexty(e.target.value)}
              >
                <option>-- Select Complexty --</option>
                <option value="REGULAR">RGLR</option>
                <option value="BO">BO</option>
                <option value="AMO">AMO</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>discqty</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setDiscqty(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setpCode(e.target.value)}
              >
                <option>-- Select PCode --</option>
                <option value="MIS">MIS</option>
                <option value="CO">CO</option>
                <option value="BO">BO</option>
                <option value="CNC">CNC</option>
                <option value="NRML">NRML</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setPrctyp(e.target.value)}
              >
                <option>-- Select prctyp --</option>
                <option value="MKT">MARKET</option>
                <option value="L">LIMIT</option>
                <option value="SL">SL</option>
                <option value="SL-M">SL-M</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>price</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>qty</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setQty(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ret</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setRet(e.target.value)}
              >
                <option>-- Select ret --</option>
                <option value="DAY">DAY</option>
                <option value="IOC">IOC</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>symbol_id</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setSymbolId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>trading_symbol</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTradingSymbol(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>transtype</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setTranstype(e.target.value)}
              >
                <option>-- Select Transtype --</option>
                <option value="BUY">Buy</option>
                <option value="SELL">Sell</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>trigPrice</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setTrigPrice(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="outline-success">
              Submit
            </Button>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export function LoginModal(props) {
  const [userId, setUserId] = useState("");
  const [key, setKey] = useState("");
  const [LoginMessage, setLoginMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const LoginUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://kc1ey9vyn6.execute-api.ap-south-1.amazonaws.com/dev/api/v1/auth",
        { key, userId }
      );
      if (data.message.stat === "Ok") {
        localStorage.setItem("sessionId", data?.message?.sessionID);
        localStorage.setItem("userId", data?.userId);
        setLoginMessage(true);
        setTimeout(() => {
          window.location.reload(true);
        }, [1000]);
      } else {
        setErrorMessage(true);
      }
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
      <Modal.Body>
        <div className="headingClose">
          <p>Login</p>
          <i class="fa-solid fa-x" onClick={() => props.onHide()}></i>
        </div>

        <Form onSubmit={LoginUser}>
          {LoginMessage ? <Alert variant="success">Logged In </Alert> : ""}
          {errorMessage ? (
            <Alert variant="danger"> Check Your Credentials </Alert>
          ) : (
            ""
          )}
          <Form.Group className="mb-3">
            <Form.Label>User Id</Form.Label>
            <Form.Control
              type="number"
              required
              onChange={(e) => setUserId(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Key</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setKey(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="outline-success">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export function UserProfileModal(props) {
  const [data, setData] = useState([]);
  const UserId = localStorage.getItem("userId");

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://kc1ey9vyn6.execute-api.ap-south-1.amazonaws.com/dev/api/v1/profile/me/${UserId}`
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }, [UserId]);

  useEffect(() => {
    if (props.show) {
      fetchData();
    }
  }, [props, fetchData]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <p className="profile">
            {" "}
            <strong>Account Name : </strong>
            {data?.message?.accountName}
          </p>
          <p className="profile">
            {" "}
            <strong>cellAddr : </strong>
            {data?.message?.cellAddr}
          </p>
          <p className="profile">
            {" "}
            <strong>accountStatus : </strong>
            {data?.message?.accountStatus}
          </p>
          <p className="profile">
            {" "}
            <strong>dpType : </strong>
            {data?.message?.dpType}
          </p>
          <p className="profile">
            {" "}
            <strong>accountId : </strong>
            {data?.message?.accountId}
          </p>
          <p className="profile">
            {" "}
            <strong>sBrokerName : </strong>
            {data?.message?.sBrokerName}
          </p>
          <p className="profile">
            {" "}
            <strong>product : </strong>
            {data?.message?.product?.map((i, index) => (
              <span key={index}> {i} </span>
            ))}
          </p>
          <p className="profile">
            {" "}
            <strong>exchEnabled : </strong>
            {data?.message?.exchEnabled}
          </p>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
