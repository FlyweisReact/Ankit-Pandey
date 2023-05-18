/** @format */

import React, { useCallback, useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Alert,
  Button,
  Container,
  Dropdown,
  Modal,
} from "react-bootstrap";
import axios from "axios";
import { MyContext } from "../MyContext";
import { MobileBar } from "../../Modal/MobileBar";
import { LoginModal } from "../../Modal/GetOrder";

const Navbar = ({ setHamb, hamb }) => {
  const [modalShow, setModalShow] = useState(false);
  const SessionId = localStorage.getItem("sessionId");
  const [userProfile, setUserProfile] = useState(false);
  const { darkTheme } = useContext(MyContext);
  const [searchConst, setSearchConst] = useState("");
  const [appConst, setAppConst] = useState("");

  function ViewUser(props) {
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

  const data = [
    {
      name: "first",
    },
    {
      name: "Second",
    },
    {
      name: "महिला  ",
    },
  ];

  const filterData = data.filter((i) =>
    i?.name?.toLowerCase().includes(searchConst?.toLowerCase())
  );

  const Appendix = [
    {
      name: "NSE",
    },

    {
      name: "BSE",
    },

    {
      name: "NFO",
    },

    {
      name: "MCX",
    },

    {
      name: "CDS",
    },

    {
      name: "BFO",
    },

    {
      name: "BCD",
    },

    {
      name: "NCO",
    },

    {
      name: "BCO",
    },
  ];

  const filterAppendix = Appendix.filter((i) =>
    i.name.toLowerCase().includes(appConst.toLowerCase())
  );

  return (
    <>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />

      <ViewUser show={userProfile} onHide={() => setUserProfile()} />

      <div className={darkTheme ? "darkNavbar" : ""}>
        <div className="false-navbar">
          <div>
            <div className="mobileSide">
              <MobileBar />
            </div>
            <div className="hamber">
              <i
                className="fa-solid fa-bars"
                onClick={() => setHamb(!hamb)}
              ></i>
            </div>
          </div>

          <div className="right">
            {SessionId ? (
              ""
            ) : (
              <button className="loginbtn" onClick={() => setModalShow(true)}>
                Login
              </button>
            )}

            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className="dropdown-button-search-1"
              >
                <AiOutlineSearch style={{ width: "25px", height: "25px" }} />
                <input
                  type="search"
                  placeholder="Search"
                  className="Search"
                  value={appConst}
                  onChange={(e) => setAppConst(e.target.value)}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {filterAppendix?.map((i) => (
                  <Dropdown.Item
                    onClick={() => {
                      localStorage.setItem("Exchange", i.name);
                      setAppConst(i.name);
                    }}
                  >
                    {" "}
                    {i.name}{" "}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                className="dropdown-button-search-1"
                id="dropdown-basic"
              >
                <AiOutlineSearch style={{ width: "25px", height: "25px" }} />
                <input
                  type="search"
                  placeholder="Graph Search"
                  className="Search"
                  value={searchConst}
                  onChange={(e) => setSearchConst(e.target.value)}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {filterData?.map((i) => (
                  <Dropdown.Item onClick={() => setSearchConst(i.name)}>
                    {" "}
                    {i.name}{" "}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {SessionId ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt=""
                className="profileImage"
                onClick={() => setUserProfile(true)}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;