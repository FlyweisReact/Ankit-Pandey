/** @format */

import React, { useContext, useEffect, useRef } from "react";
import HOC from "../HOC";
import "./Dashboard.css";
import { GrClose } from "react-icons/gr";
import Card from "react-bootstrap/Card";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { MyContext } from "../Homepage/MyContext";

// let tvScriptLoadingPromise;
let tvScriptLoadingPromise;
const Dashboard = () => {
  const { myState, setMyState, secondTab, setSecondState, historicalData } =
    useContext(MyContext);
    const onLoadScriptRef = useRef();


  // const onLoadScriptRef = useRef();

  // useEffect(() => {
  //   onLoadScriptRef.current = createWidget;

  //   if (!tvScriptLoadingPromise) {
  //     tvScriptLoadingPromise = new Promise((resolve) => {
  //       const script = document.createElement("script");
  //       script.id = "tradingview-widget-loading-script";
  //       script.src = "https://s3.tradingview.com/tv.js";
  //       script.type = "text/javascript";
  //       script.onload = resolve;

  //       document.head.appendChild(script);
  //     });
  //   }

  //   tvScriptLoadingPromise.then(
  //     () => onLoadScriptRef.current && onLoadScriptRef.current()
  //   );

  //   return () => (onLoadScriptRef.current = null);

  //   function createWidget() {
  //     if (
  //       document.getElementById("tradingview_a9364") &&
  //       "TradingView" in window
  //     ) {
  //       new window.TradingView.widget({
  //         width : "100%" , 
  //         height : 900 ,
  //         symbol: "NASDAQ:AAPL",
  //         interval: "D",
  //         timezone: "Etc/UTC",
  //         theme: "dark",
  //         style: "1",
  //         locale: "in",
  //         toolbar_bg: "#f1f3f6",
  //         enable_publishing: false,
  //         hide_top_toolbar: true,
  //         container_id: "tradingview_a9364",
  //       });
  //     }
  //   }
  // }, []);

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('technical-analysis-chart-demo') && 'TradingView' in window) {
          new window.TradingView.widget({
            container_id: "technical-analysis-chart-demo",
            width: "100%",
            height: "100%",
            autosize: true,
            symbol: "AAPL",
            interval: "D",
            timezone: "exchange",
            theme: "light",
            style: "1",
            toolbar_bg: "#f1f3f6",
            withdateranges: true,
            hide_side_toolbar: false,
            allow_symbol_change: true,
            save_image: false,
            studies: ["ROC@tv-basicstudies","StochasticRSI@tv-basicstudies","MASimple@tv-basicstudies"],
            show_popup_button: true,
            popup_width: "1000",
            popup_height: "650",
            locale: "in"
          });
        }
      }
    },
    []
  );


  return (
    <>
      <div className="homeS">
        {/* <div className="tradingview-widget-container">
          <div id="tradingview_a9364" />
        </div> */}

        <div className='tradingview-widget-container'>
      <div id='technical-analysis-chart-demo' />
      <div className="tradingview-widget-copyright">
      </div>
    </div>

        <div className="gridCont">
          {myState ? (
            <Card className="clear">
              <Card.Body>
                <div className="filterDiv">
                  <div className="left">
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
                  <div className="right">
                    <AiOutlineClose
                      style={{
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                      }}
                      onClick={() => setMyState(false)}
                    />
                  </div>
                </div>

                <Table
                  striped
                  bordered
                  hover
                  style={{ backgroundColor: "#fff" }}
                >
                  <thead>
                    <tr>
                      <th>Volume</th>
                      <th>High</th>
                      <th>Low</th>
                      <th>Time</th>
                      <th>Close</th>
                      <th>Open</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historicalData?.result?.map((i, index) => (
                      <tr key={index}>
                        <td> {i.volume} </td>
                        <td> {i.high} </td>
                        <td> {i.low} </td>
                        <td> {i.time} </td>
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
                <div className="filterDiv">
             
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      width: "280px",
                      border: "2px solid #041668",
                      backgroundColor: "rgba(12, 52, 240, 0.2)",
                      padding: "5px",
                      borderRadius: "15px",
                      marginRight: "5%",
                      color: "#041668",
                      alignItems : 'center' ,
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
                  <GrClose
                    color="black"
                    style={{
                      width: "40px",
                      height: "40px",
                      cursor: "pointer",
                    }}
                    onClick={() => setSecondState(false)}
                  />
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
