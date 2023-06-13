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
import { useDrop } from 'react-dnd';
import { useDrag } from 'react-dnd';

let tvScriptLoadingPromise;
const Dashboard = () => {
  const { myState, setMyState, secondTab, setSecondState, historicalData } =
    useContext(MyContext);
  const onLoadScriptRef = useRef();
  const Exchange = localStorage.getItem("Exchange");
  const Symbol = localStorage.getItem("Symbol");
  const [modalShow, setModalShow] = useState(false);

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
          symbol: Symbol,
          interval: "D",
          timezone: Exchange,
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
  }, [Exchange, Symbol]);


  const [{ isDragging }, drag] = useDrag({
    item: { type: 'box' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const boxStyle = {
    opacity: isDragging ? 0.5 : 1,
    cursor: 'move',
    padding: '0.5rem',
    backgroundColor: 'lightblue'
  };

 
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
                  style={{ backgroundColor: "#fff" }}
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
          ) : (
            ""
          )}

          {secondTab ? (
            <Card className="clear2">
              <Card.Body>
                <i
                  className="fa-solid fa-x"
                  onClick={() => setSecondState(false)}
                ></i>
                <div className="filterDiv">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      width: "100%",
                      border: "2px solid #041668",
                      backgroundColor: "rgba(12, 52, 240, 0.2)",
                      padding: "5px",
                      borderRadius: "15px",
                      marginRight: "5%",
                      color: "#041668",
                      alignItems: "center",
                      fontWeight: "900",
                    }}
                  >
                    {" "}
                    <AiOutlineSearch
                      style={{ width: "25px", height: "25px" }}
                    />{" "}
                    Filter
                    <IoMdArrowDropdown
                      style={{ width: "25px", height: "25px" }}
                    />
                  </p>
                </div>
              </Card.Body>
            </Card>
          ) : (
            ""
          )}


          

          
         
        </div>
      </div>
    </>
  );
};
export default HOC(Dashboard);
