/** @format */

import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import HOC from "../HOC";
import "./Dashboard.css";
import Card from "react-bootstrap/Card";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { Table } from "react-bootstrap";
import { MyContext } from "../Homepage/MyContext";
import { HistoricalModal } from "../Modal/GetOrder";
import Draggable from "react-draggable";
import { GetDashboardData } from "../Api/Api";

let tvScriptLoadingPromise;
const Dashboard = () => {
  const {
    myState,
    setMyState,
    secondTab,
    historicalData,
    Exchange,
    setSecondState,
    symbol,
    darkTheme,
    setExchange,
    setSymbol,
  } = useContext(MyContext);
  const onLoadScriptRef = useRef();
  const [modalShow, setModalShow] = useState(false);
  const cardRef = useRef(null);
  const [Total, setTotal] = useState(symbol);
  const [marketToday, setMarketToday] = useState([]);

  const CheckingValue = useCallback(() => {
    if (Exchange === "NSE") {
      setTotal(symbol);
    } else if (Exchange === "BSE") {
      setTotal(Exchange + ":" + symbol);
    }
  }, [Exchange, symbol]);

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
          theme: darkTheme ? "dark" : "light",
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
  }, [Total, darkTheme]);

  useEffect(() => {
    CheckingValue();
  }, [CheckingValue]);

  // Get Dashboard Data ( Nifty 50 , Nifty Bank etc...)
  const fetchData = async () => {
    try {
      const response = await GetDashboardData();
      setMarketToday(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <HistoricalModal show={modalShow} onHide={() => setModalShow(false)} />

      <div className="homeS">
        {Exchange && symbol ? (
          <div className="tradingview-widget-container">
            <div id="technical-analysis-chart-demo" />
            <div className="tradingview-widget-copyright"></div>
          </div>
        ) : (
          <div className="Content_Box">
            <p className="head">Market Today</p>
            <div className="div_Box">
              <div
                onClick={() => {
                  localStorage.setItem("Exchange", "NSE");
                  localStorage.setItem("Symbol", "NIFTY 50");
                  localStorage.setItem("token", "26000");
                  setExchange("NSE");
                  setSymbol("NIFTY 50");
                }}
              >
                <p>NIFTY 50</p>
              </div>
              <div
                onClick={() => {
                  localStorage.setItem("Exchange", "NSE");
                  localStorage.setItem("Symbol", "NIFTY BANK");
                  localStorage.setItem("token", "26009");
                  setExchange("NSE");
                  setSymbol("NIFTY BANK");
                }}
              >
                <p>NIFTY BANK</p>
              </div>
              <div
                onClick={() => {
                  localStorage.setItem("Exchange", "NSE");
                  localStorage.setItem("Symbol", "NIFTY FIN SERVICE");
                  localStorage.setItem("token", "26037");
                  setExchange("NSE");
                  setSymbol("NIFTY FIN SERVICE");
                }}
              >
                <p>NIFTY FIN SERVICE</p>
              </div>
              <div
                onClick={() => {
                  localStorage.setItem("Exchange", "BSE");
                  localStorage.setItem("Symbol", "SENSEX");
                  localStorage.setItem("token", "1");
                  setExchange("BSE");
                  setSymbol("SENSEX");
                }}
              >
                <p>SENSEX</p>
              </div>
              <div
                onClick={() => {
                  localStorage.setItem("Exchange", "NSE");
                  localStorage.setItem("Symbol", "INDIA VIX");
                  localStorage.setItem("token", "26017");
                  setExchange("NSE");
                  setSymbol("INDIA VIX");
                }}
              >
                
                <div>
                  <p>INDIA VIX</p>
                  <p>19439.95</p>
                  <p>0.29%</p>
                </div>

                <i class="fa-solid fa-arrow-trend-up"></i>
              </div>

              {/* {marketToday?.map((item, index) => (
                <div key={index}>
                </div>
              ))} */}
            </div>
          </div>
        )}

        <div className="gridCont">
          {myState ? (
            <Draggable
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              bounds=".homeS"
            >
              <div ref={cardRef} className="handle">
                <Card className="clear ">
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

                    <div className="overflow_Table">
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
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Draggable>
          ) : (
            ""
          )}

          {secondTab ? (
            <Draggable
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              bounds=".homeS"
            >
              <div ref={cardRef}>
                <Card className="clear2 handle">
                  <Card.Body>
                    <i
                      className="fa-solid fa-x"
                      onClick={() => setSecondState(false)}
                    ></i>
                    <div className="filterDiv handle">
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
              </div>
            </Draggable>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
export default HOC(Dashboard);
