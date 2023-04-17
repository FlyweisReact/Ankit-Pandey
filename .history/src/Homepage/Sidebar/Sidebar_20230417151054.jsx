/** @format */

import React, { useState } from "react";
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

const Sidebar = ({ width }) => {
  const show = () => {
    let target = document.getElementById("HideText");
    target.style.display = "block";
  };

  const show2 = () => {
    let target = document.getElementById("NewText");
    target.style.display = "block";
  };

  const firstTab = () => {
    let target = document.getElementById("clearP");
    target.style.display = "block";
  };
  const secondTab = () => {
    let target = document.getElementById("clear2");
    target.style.display = "block";
  };
  const thirdTab = () => {
    let target = document.getElementById("clear3");
    target.style.display = "block";
  };
  const fourthTab = () => {
    let target = document.getElementById("clear4");
    target.style.display = "block";
  };

  const [modalShow, setModalShow] = useState(false);

  // Session Id
  const SessionId = localStorage.getItem("sessionId");

  function LogOut() {
    localStorage.clear();
    window.location.reload();
  }

  // Modal

  function MyVerticallyCenteredModal(props) {

    const [complexty , setComplexty ] = useState("")
    const [discqty , setDiscqty ] = useState("")
    const [exch , setExch ] = useState("")
    const [ pCode , setpCode] = useState("")
    const [ prctyp , setPrctyp] = useState("")
    const [ price , setPrice] = useState("")
    const [qty , setQty ] = useState("")
    const [ret , setRet ] = useState("")
    const [symbol_id , setSymbolId ] = useState("")
    const [ trading_symbol , setTradingSymbol] = useState("")
    const [transtype , setTranstype ] = useState("")
    const [trigPrice , setTrigPrice ] = useState("")

    const postHandler = async (e) => {
      e.preventDefault()
      try{

      }catch(e) { 
        console.log(e)
      }
      
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Select aria-label="Default select example">
                <option>-- Select Complexty --</option>
                <option value="RGLR">RGLR</option>
                <option value="BO">BO</option>
                <option value="AMO">AMO</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>discqty</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select aria-label="Default select example">
                <option>-- Select Exch --</option>
                <option value="NSE">NSE</option>
                <option value="BSE">BSE</option>
                <option value="NFO">NFO</option>
                <option value="MCX">MCX</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select aria-label="Default select example">
                <option>-- Select PCode --</option>
                <option value="MIS">MIS</option>
                <option value="CNC">CNC</option>
                <option value="MTF">MTF</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select aria-label="Default select example">
                <option>-- Select prctyp --</option>
                <option value="MARKET">MARKET</option>
                <option value="LIMIT">LIMIT</option>
                <option value="SL">SL</option>
                <option value="SL-M">SL-M</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>price</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>qty</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ret</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>-- Select ret --</option>
                <option value="DAY">DAY</option>
                <option value="IOC">IOC</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>symbol_id</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>trading_symbol</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>transtype</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>-- Select transtype --</option>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>trigPrice</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Button type="submit" variant="outline-success">
              Submit
            </Button>
          </Form>
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
              <Dropdown.Item onClick={() => firstTab()}>
                First Tab
              </Dropdown.Item>
              <Dropdown.Item onClick={() => secondTab()}>
                Second Tab
              </Dropdown.Item>
              <Dropdown.Item onClick={() => thirdTab()}>
                Third Tab
              </Dropdown.Item>
              <Dropdown.Item onClick={() => fourthTab()}>
                {" "}
                Fourth Tab
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

{
  /* <div
          className="false-sidebar-menu"
          style={{
            border: "2px solid  #a4c0ed",
            margin: "5%",
            backgroundColor: "#a4c0ed",
            padding: "15%",
            minHeight: "500px",
            borderRadius: "10px",
          }}
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
              {menuItem[0].img} {menuItem[0].title}
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
              {menuItem[1].img} {menuItem[1].title}
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
              {menuItem[2].img} {menuItem[2].title}
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
              {menuItem[3].img} {menuItem[3].title}
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
              {menuItem[4].img} {menuItem[4].title}
            </div>
          </div>

        </div> */
}
