/** @format */

import React, { useContext, useState } from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import { MyContext } from "../MyContext";
import { MobileBar } from "../../Modal/MobileBar";
import { LoginModal, UserProfileModal } from "../../Modal/GetOrder";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const Navbar = ({ setHamb, hamb }) => {
  const [modalShow, setModalShow] = useState(false);
  const SessionId = localStorage.getItem("sessionId");
  const [userProfile, setUserProfile] = useState(false);
  const { darkTheme } = useContext(MyContext);
  const [searchConst, setSearchConst] = useState("");
  const [appConst, setAppConst] = useState("");

  const data = [
    {
      name: "011NSETEST",
      token : "14747"
    },
    {
      name: "021NSETEST",
      token : "14751"
    },
    {
      name: "041NSETEST",
      token : '14753'
    },
    {
      name: "031NSETEST",
      token : '14755'
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

      <UserProfileModal
        show={userProfile}
        onHide={() => setUserProfile(false)}
      />

      <div className={darkTheme ? "darkNavbar" : ""}>
        <p className="nav-logo-text"> Logo fx</p>

        <div className="false-navbar">
          <div>
            <div className="mobileSide">
              <MobileBar />
            </div>
            <div className="hamber">
          
              {hamb ? (
                <IoMdArrowDropright
                  className="text-4xl"
                  onClick={() => setHamb(false)}
                />
              ) : (
                <IoMdArrowDropleft
                  className="text-4xl"
                  onClick={() => setHamb(true)}
                />
              )}
            </div>
          </div>

          <div className="right">
            <div></div>

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
                  placeholder="Select Exchange"
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
                  placeholder="Graph Symbol"
                  className="Search"
                  value={searchConst}
                  onChange={(e) => setSearchConst(e.target.value)}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {filterData?.map((i) => (
                  <Dropdown.Item onClick={() => {
                    localStorage.setItem('Symbol' , i.name)
                    localStorage.setItem('token' , i.token)
                    window.loca
                    setSearchConst(i.name)}}>
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