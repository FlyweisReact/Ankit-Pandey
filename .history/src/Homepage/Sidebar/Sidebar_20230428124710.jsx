/** @format */

import React, { useState  ,useContext} from "react";
import "./Sidebar.css";
import { VscAccount } from "react-icons/vsc";
import Dropdown from "react-bootstrap/Dropdown";
import { BsCashCoin } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import { MyContext } from "../MyContext";

const Sidebar = ({ width }) => {
  const show = () => {
    let target = document.getElementById("HideText");
    target.style.display = "block";
  };

  const show2 = () => {
    let target = document.getElementById("NewText");
    target.style.display = "block";
  };

 

  const { myState , setMyState , secondTab , setSecondState } = useContext(MyContext)

  const [modalShow, setModalShow] = useState(false);

  // Session Id
  const SessionId = localStorage.getItem("sessionId");

  function LogOut() {
    localStorage.clear();
    window.location.reload();
  }


  function MyVerticallyCenteredModal(props) {
    const [complexty, setComplexty] = useState("");
    const [discqty, setDiscqty] = useState("");
    const [exch, setExch] = useState("");
    const [pCode, setpCode] = useState("");
    const [prctyp, setPrctyp] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [ret, setRet] = useState("");
    const [symbol_id, setSymbolId] = useState("");
    const [trading_symbol, setTradingSymbol] = useState("");
    const [transtype, setTranstype] = useState("");
    const [trigPrice, setTrigPrice] = useState("");

    const [stopLoss, setStopLoss] = useState("");
    const [target, setTarget] = useState("");
    const [trailing_stop_loss, setTrailingStopLoss] = useState("");

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
              Authorization:
                "Bearer 764564 VFx1VtYkbM7qxTzP9OgiEsYeLoaY4HedeazU6MutcYTKrvGMSd0fGME8eVxInrZV86hhKu2iuscahCyde2vz5l7YqIx2x4vS2YKpCMdJ6uDDgR48063U5lLDKl2jHUnnOQPNl1uYiXUCQ1qetvJqrHFqCOhcGNt9bBHxbNhMzuBmOxsazCHTLto9Y5anva14Cyy4KFjZt27kpdnOd6qU1CZeYl2NkzVddez5hvfrcg9ZVqFZ4EnunAe8S6qSrdi5",
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

    const AnotherPostHandler = async (e) => {
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
              stopLoss,
              symbol_id,
              target,
              trading_symbol,
              trailing_stop_loss,
              transtype,
              trigPrice,
            },
          ],
          {
            headers: {
              Authorization:
                "Bearer 764564 VFx1VtYkbM7qxTzP9OgiEsYeLoaY4HedeazU6MutcYTKrvGMSd0fGME8eVxInrZV86hhKu2iuscahCyde2vz5l7YqIx2x4vS2YKpCMdJ6uDDgR48063U5lLDKl2jHUnnOQPNl1uYiXUCQ1qetvJqrHFqCOhcGNt9bBHxbNhMzuBmOxsazCHTLto9Y5anva14Cyy4KFjZt27kpdnOd6qU1CZeYl2NkzVddez5hvfrcg9ZVqFZ4EnunAe8S6qSrdi5",
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
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="d-flex gap-2 justify-content-evenly">
            <Form onSubmit={postHandler}>
              <p>Place Order</p>
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
                  onChange={(e) => setExch(e.target.value)}
                >
                  <option>-- Select Exch --</option>
                  <option value="NSE">NSE</option>
                  <option value="BSE">BSE</option>
                  <option value="NFO">NFO</option>
                  <option value="MCX">MCX</option>
                </Form.Select>
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
            <Form onSubmit={AnotherPostHandler}>
              <p>Bracket Order</p>
              <Form.Group className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setComplexty(e.target.value)}
                >
                  <option>-- Select Complexty --</option>
                  <option value="regular">RGLR</option>
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
                  onChange={(e) => setExch(e.target.value)}
                >
                  <option>-- Select Exch --</option>
                  <option value="NSE">NSE</option>
                  <option value="BSE">BSE</option>
                  <option value="NFO">NFO</option>
                  <option value="MCX">MCX</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setpCode(e.target.value)}
                >
                  <option>-- Select PCode --</option>
                  <option value="MIS">MIS</option>
                  <option value="CO">CO</option>
                  <option value="bo">BO</option>
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
                <Form.Label>Stop Loss</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setStopLoss(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>symbol_id</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setSymbolId(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Target</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setTarget(e.target.value)}
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
                <Form.Label>Trailing Stop Loss</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setTrailingStopLoss(e.target.value)}
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

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div
        className={
          width ? "tem false-sidebar block" : "true-side false-sidebar "
        }
      >
        <div className="false-logo">Logo fx</div>
        <div style={{ textAlign: "center" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: "#041668",
                border: "2px solid #041668",
                marginBottom: "15%",
              }}
              id="dropdown-basic"
            >
              Window tab Filter
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{ height: "200px", width: "190px", textAlign: "center" }}
            >
              <Dropdown.Item onClick={() => setMyState(!myState)}>
                Historical Data
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSecondState(!secondTab)}>
                Second Tab
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Default Account */}

        <div
          className="false-sidebar-menu"
          style={{
            border: "2px solid  #a4c0ed",
            margin: "5%",
            backgroundColor: "#a4c0ed",
            padding: "15%",
            minHeight: "500px",
            borderRadius: "10px",
          }}
          id="defaultAccount"
        >
          <p
            style={{
              color: "#0E155A",
              fontSize: "1.4rem",
              textAlign: "center",
            }}
          >
            Profile
          </p>

          <div>
            {" "}
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "16px",
                marginTop: "40px",
                cursor: "pointer",
              }}
              onClick={() => show()}
            >
              {" "}
              <VscAccount style={{ width: " 20px", height: "20px" }} /> Your
              Account
            </div>
            <span
              style={{
                marginLeft: "60%",
                fontSize: "13px",
                fontWeight: "600",
                display: "none",
                cursor: "pointer",
              }}
              id="HideText"
            >
              {" "}
              (Rs 800){" "}
            </span>
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "14px",
                marginTop: "40px",
                cursor: "pointer",
              }}
              onClick={() => show2()}
            >
              {" "}
              <VscAccount style={{ width: " 20px", height: "20px" }} /> Demo
              Account
            </div>
            <span
              style={{
                marginLeft: "60%",
                fontSize: "13px",
                fontWeight: "600",
                display: "none",
                cursor: "pointer",
              }}
              id="NewText"
            >
              {" "}
              (Rs 20){" "}
            </span>
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "16px",
                cursor: "pointer",
                marginTop: "40px",
              }}
            >
              <BsCashCoin style={{ width: " 20px", height: "20px" }} /> Cashback
            </div>
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "16px",
                marginTop: "40px",
                cursor: "pointer",
              }}
            >
              <AiFillSetting style={{ width: " 20px", height: "20px" }} />{" "}
              Setting
            </div>
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "16px",
                marginTop: "40px",
                cursor: "pointer",
              }}
              onClick={() => setModalShow(!modalShow)}
            >
              <BsCashCoin style={{ width: " 20px", height: "20px" }} />
              BUY
            </div>
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "16px",
                marginTop: "40px",
                cursor: "pointer",
              }}
            >
              <BsCashCoin style={{ width: " 20px", height: "20px" }} />
              HOLDING
            </div>
            {SessionId ? (
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  fontSize: "16px",
                  marginTop: "40px",
                  cursor: "pointer",
                }}
                onClick={() => LogOut()}
              >
                <AiOutlineLogin style={{ width: " 20px", height: "20px" }} />{" "}
                Logout
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* ----Default Account -------- */}

        {/* Live Account */}

        <div
          className="false-sidebar-menu"
          style={{
            border: "2px solid  #a4c0ed",
            margin: "5%",
            backgroundColor: "#a4c0ed",
            padding: "15%",
            minHeight: "500px",
            borderRadius: "10px",
            display: "none",
          }}
          id="LiveAcccount"
        >
          <p
            style={{
              color: "#0E155A",
              fontSize: "1.4rem",
              textAlign: "center",
            }}
          >
            Profile
          </p>
          <p style={{ textAlign: "center", color: "black" }}>Live Account</p>
          <div>
            {" "}
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "16px",
                marginTop: "40px",
                cursor: "pointer",
              }}
            >
              <GrMoney style={{ width: " 20px", height: "20px" }} /> Balance
            </div>
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "14px",
                marginTop: "40px",
                cursor: "pointer",
              }}
            >
              <BsCashCoin style={{ width: " 20px", height: "20px" }} /> CashBack
            </div>
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "16px",
                cursor: "pointer",
                marginTop: "40px",
              }}
            >
              <FaHandHoldingUsd style={{ width: " 20px", height: "20px" }} />{" "}
              Holdings
            </div>
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "16px",
                marginTop: "40px",
                cursor: "pointer",
              }}
            >
              <GiProfit style={{ width: " 20px", height: "20px" }} /> Portfolio
            </div>
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "16px",
                marginTop: "40px",
                cursor: "pointer",
              }}
            >
              {" "}
              <AiFillSetting style={{ width: " 20px", height: "20px" }} />{" "}
              Settings
            </div>
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "16px",
                marginTop: "40px",
                cursor: "pointer",
              }}
            >
              <AiOutlineLogin style={{ width: " 20px", height: "20px" }} />{" "}
              LogOut
            </div>
          </div>
        </div>
        {/* ------- Live Account ---------- */}

        {/* Demo Account */}
        <div
          className="false-sidebar-menu"
          style={{
            border: "2px solid  #a4c0ed",
            margin: "5%",
            backgroundColor: "#a4c0ed",
            padding: "15%",
            minHeight: "500px",
            borderRadius: "10px",
            display: "none",
          }}
          id="DemoAcccount"
        >
          <p
            style={{
              color: "#0E155A",
              fontSize: "1.4rem",
              textAlign: "center",
            }}
          >
            Profile
          </p>

          <p style={{ textAlign: "center", color: "black" }}>Demo Account</p>

          <div>
            {" "}
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "16px",
                marginTop: "40px",
                cursor: "pointer",
              }}
            >
              <GrMoney style={{ width: " 20px", height: "20px" }} /> Balance
            </div>
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "14px",
                marginTop: "40px",
                cursor: "pointer",
              }}
            >
              <BsCashCoin style={{ width: " 20px", height: "20px" }} /> Balance
              refill
            </div>
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "16px",
                cursor: "pointer",
                marginTop: "40px",
              }}
            >
              <FaHandHoldingUsd style={{ width: " 20px", height: "20px" }} />{" "}
              Holdings
            </div>
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "16px",
                marginTop: "40px",
                cursor: "pointer",
              }}
            >
              <GiProfit style={{ width: " 20px", height: "20px" }} /> Portfolio
            </div>
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "16px",
                marginTop: "40px",
                cursor: "pointer",
              }}
            >
              {" "}
              <AiFillSetting style={{ width: " 20px", height: "20px" }} />{" "}
              Settings
            </div>
            <div
              style={{
                display: "flex",
                gap: "6px",
                fontSize: "16px",
                marginTop: "40px",
                cursor: "pointer",
              }}
            >
              <AiOutlineLogin style={{ width: " 20px", height: "20px" }} />{" "}
              LogOut
            </div>
          </div>
        </div>
        {/* ---------------Demo Account ----------- */}
      </div>
    </>
  );
};

export default Sidebar;

