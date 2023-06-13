/** @format */

import React, { useContext, useState } from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import { MyContext } from "../MyContext";
import { MobileBar } from "../../Modal/MobileBar";
import { LoginModal, UserProfileModal } from "../../Modal/GetOrder";
import {  IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import GraphSearch from '../../GraphSearch.json'
import DataArray = 


const Navbar = ({ setHamb, hamb }) => {
  const [modalShow, setModalShow] = useState(false);
  const SessionId = localStorage.getItem("sessionId");
  const [userProfile, setUserProfile] = useState(false);
  const { darkTheme } = useContext(MyContext);
  const [searchConst, setSearchConst] = useState(
    localStorage.getItem("Symbol")
  );
  const UserId = localStorage.getItem("userId");
  const [appConst, setAppConst] = useState(localStorage.getItem("Exchange"));

  const filterData = GraphSearch.filter((i) =>
    i.Symbol?.toLowerCase().includes(searchConst?.toLowerCase())
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
    i.name?.toLowerCase().includes(appConst?.toLowerCase())
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
                {filterAppendix?.length === 0
                  ? Appendix?.map((i) => (
                      <Dropdown.Item
                        onClick={() => {
                          localStorage.setItem("Exchange", i.name);
                          window.location.reload();
                          setAppConst(i.name);
                        }}
                      >
                        {" "}
                        {i.name}
                      </Dropdown.Item>
                    ))
                  : filterAppendix?.map((i) => (
                      <Dropdown.Item
                        onClick={() => {
                          localStorage.setItem("Exchange", i.name);
                          window.location.reload();
                          setAppConst(i.name);
                        }}
                      >
                        {" "}
                        {i.name}
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

              <Dropdown.Menu
                style={{ maxHeight: "500px", overflowY: "scroll" }}
              >
                {filterData?.length === 0
                  ? GraphSearch?.map((i) => (
                      <Dropdown.Item
                        onClick={() => {
                          localStorage.setItem("Symbol", i.Symbol);
                          localStorage.setItem("token", i.Token);
                          localStorage.setItem("Trading_Symbol", i.Trading_Symbol);
                          window.location.reload();
                          setSearchConst(i.name);
                        }}
                      >
                        {" "}
                        {i.Symbol}
                      </Dropdown.Item>
                    ))
                  : filterData?.map((i) => (
                      <Dropdown.Item
                        onClick={() => {
                          localStorage.setItem("Symbol", i.Symbol);
                          localStorage.setItem("token", i.Token);
                          localStorage.setItem("Trading_Symbol", i.Trading_Symbol);
                          window.location.reload();
                          setSearchConst(i.name);
                        }}
                      >
                        {" "}
                        {i.Symbol}{" "}
                      </Dropdown.Item>
                    ))}
              </Dropdown.Menu>
            </Dropdown>

            {SessionId && UserId ? (
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
