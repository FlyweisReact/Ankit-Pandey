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
        <div className={darkTheme ? "darkTheme" : ""}>
        <div
          className={
            width
              ? "tem false-sidebar block sideBar activeSide"
              : "true-side false-sidebar sideBar nonActiveSide "
          }
        >
          <div className="false-logo">Logo fx </div>
          <i className="fa-solid fa-x" onClick={() => setWidth(false)}></i>

          <div className="DropdownDiv">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="dropDn">
                Window tab Filter
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropMenu">
                <Dropdown.Item onClick={() => setOpenModal2(true)}>
                  Historical Data
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSecondState(!secondTab)}>
                  Second Tab
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="false-sidebar-menu">
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
              <div className="sideItem" onClick={() => setPrice(!price)}>
                {" "}
                <VscAccount style={{ width: " 20px", height: "20px" }} /> Your
                Account
              </div>
              {price ? (
                <span
                  style={{
                    marginLeft: "60%",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  (Rs {cashback}){" "}
                </span>
              ) : (
                ""
              )}
              {/* <div className="sideItem">
                <BsCashCoin style={{ width: " 20px", height: "20px" }} />{" "}
                Cashback
              </div> */}
              <div
                className="sideItem"
                onClick={() => {
                  setOpenPModal(false);
                  setOrderOpen(false);
                  setModalShow(true);
                  setFundModalOpen(false);
                }}
              >
                <BsCashCoin style={{ width: " 20px", height: "20px" }} />
                BUY / SELL
              </div>
              <div
                className="sideItem"
                onClick={() => {
                  setOpenPModal(false);
                  setOrderOpen(false);
                  setModalShow(false);
                  setFundModalOpen(true);
                }}
              >
                <BsCashCoin style={{ width: " 20px", height: "20px" }} />
                FUNDS
              </div>
              <div
                className="sideItem"
                onClick={() => {
                  setOrderOpen(false);
                  setModalShow(false);
                  setOpenPModal(true);
                  setFundModalOpen(false);
                }}
              >
                <BsCashCoin style={{ width: " 20px", height: "20px" }} />
                PORTFOLIO
              </div>
              <div
                className="sideItem"
                onClick={() => {
                  setModalShow(false);
                  setOpenPModal(false);
                  setOrderOpen(true);
                  setFundModalOpen(false);
                }}
              >
                <BsCashCoin style={{ width: " 20px", height: "20px" }} />
                HOLDING
              </div>
              <Dropdown
                style={{ marginLeft: "0px" }}
                className="ThemeDropDown "
              >
                <Dropdown.Toggle id="dropdown-basic" className="dropDwn">
                  <AiFillSetting
                    style={{
                      width: " 20px",
                      height: "20px",
                      marginLeft: "0px",
                    }}
                  />{" "}
                  Setting
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setDarkTheme(true)}>
                    Dark Mode
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDarkTheme(false)}>
                    Light Mode
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {SessionId ? (
                <div className="sideItem" onClick={() => LogOut()}>
                  <AiOutlineLogin style={{ width: " 20px", height: "20px" }} />{" "}
                  Logout
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
