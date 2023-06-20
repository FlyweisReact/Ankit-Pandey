/** @format */

import React, { useContext, useEffect, useRef, useState } from "react";
import HOC from "../HOC";
import "./Dashboard.css";
import Card from "react-bootstrap/Card";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { Table } from "react-bootstrap";
import { MyContext } from "../Homepage/MyContext";
import { HistoricalModal } from "../Modal/GetOrder";
import Draggable from "react-draggable";
import MovingCard from "../Component/MovingCard";
import MovingCard2 from "../Component/MovingCard2";

let tvScriptLoadingPromise;
const Dashboard = () => {
  const { myState, setMyState, secondTab , historicalData  ,appConst  ,searchConst} =
    useContext(MyContext);
  const onLoadScriptRef = useRef();
  const Exchange = localStorage.getItem("Exchange");
  const Symbol = localStorage.getItem("Symbol");
  const [modalShow, setModalShow] = useState(false);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [homeSDimensions, setHomeSDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [ Total , setTotal ] = useState(Symbol)


  console.log(Total)

  function CheckingValue () {
      if(Exchange === 'NSE') { 
        setTotal(Symbol)
      }else if (Exchange === 'BSE') {
        setTotal( Exchange + ":" + Symbol)
      }
  }


  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("technical-analysis-chart-demo") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          container_id: "technical-analysis-chart-demo",
          width: "100%",
          height: "100%",
          autosize: true,
          symbol: Total,
          interval: "D",
          timezone: "exchange",
          theme: "dark",
          style: "1",
          toolbar_bg: "#f1f3f6",
          withdateranges: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          save_image: false,
          studies: [
            "ROC@tv-basicstudies",
            "StochasticRSI@tv-basicstudies",
            "MASimple@tv-basicstudies",
          ],
          show_popup_button: true,
          popup_width: "1000",
          popup_height: "650",
          locale: "in",
        });
      }
    }
  }, [Total]);

  useEffect(() => {
    const homeS = document.querySelector(".homeS");
    if (homeS) {
      const { width, height } = homeS.getBoundingClientRect();
      setHomeSDimensions({ width, height });
    }
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
  }, [cardRef]);

  useEffect(() => (
    CheckingValue()
  ),[])



  return (
    <>
      <HistoricalModal show={modalShow} onHide={() => setModalShow(false)} />

      <div className="homeS">
        <div className="tradingview-widget-container">
          <div id="technical-analysis-chart-demo" />
          <div className="tradingview-widget-copyright"></div>
        </div>

        <div className="gridCont">
          {myState ? (
            <Draggable
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              bounds={{
                left: -homeSDimensions.width + cardWidth,
                top: 0,
                right: homeSDimensions.width - cardWidth,
                bottom: homeSDimensions.height,
              }}
              
            >
              <div ref={cardRef}>
                <Card className="clear">
                  <Card.Body>
                    <i
                      className="fa-solid fa-x"
                      onClick={() => setMyState(false)}
                    ></i>

                    <div
                      className="filterDiv"
                      onClick={() => setModalShow(true)}
                      style={{ cursor: "pointer" }}
                    >
                      <p className="clearP">
                        {" "}
                        <AiOutlineSearch
                          style={{ width: "25px", height: "25px" }}
                        />{" "}
                        Filter{" "}
                        <IoMdArrowDropdown
                          style={{ width: "25px", height: "25px" }}
                        />
                      </p>
                    </div>

                    <Table
                      striped
                      bordered
                      hover
                      style={{ backgroundColor: "#fff"}}
                    >
                      <thead>
                        <tr>
                          <th>Time</th>
                          <th>Volume</th>
                          <th>High</th>
                          <th>Low</th>
                          <th>Close</th>
                          <th>Open</th>
                        </tr>
                      </thead>
                      <tbody>
                        {historicalData?.result?.map((i, index) => (
                          <tr key={index}>
                            <td> {i.time} </td>
                            <td> {i.volume} </td>
                            <td> {i.high} </td>
                            <td> {i.low} </td>
                            <td> {i.close} </td>
                            <td> {i.open} </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </div>
            </Draggable>
          ) : (
            ""
          )}

          {secondTab ? (
            <MovingCard />
          ) : (
            ""
          )}

          <MovingCard2 />
        </div>
      </div>
    </>
  );
};
export default HOC(Dashboard);


