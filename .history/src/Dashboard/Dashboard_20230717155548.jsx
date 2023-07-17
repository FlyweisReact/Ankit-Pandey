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
import { GetDashboardData, HistoricalDataPrevLogin } from "../Api/Api";
import { createChart } from "lightweight-charts";

// New Chart

// let tvScriptLoadingPromise;
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
    setHistoricalData,
  } = useContext(MyContext);
  const onLoadScriptRef = useRef();
  const [modalShow, setModalShow] = useState(false);
  const cardRef = useRef(null);
  const [Total, setTotal] = useState(symbol);
  const [marketToday, setMarketToday] = useState([]);
  const [ThemeSelector, setThemeSelector] = useState("");

  useEffect(() => {
    setThemeSelector(darkTheme ? "#2c3236" : "#fff");
  }, [darkTheme]);

  // Date
  const currentDate = new Date();
  const calculatePrevDate = () => {
    const prevDate = new Date();
    prevDate.setDate(prevDate.getDate() - 365);
    return prevDate;
  };

  const prevDate = calculatePrevDate();

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  const CheckingValue = useCallback(() => {
    if (Exchange === "NSE") {
      setTotal(symbol);
    } else if (Exchange === "BSE") {
      setTotal(Exchange + ":" + symbol);
    }
  }, [Exchange, symbol]);

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
  //       document.getElementById("technical-analysis-chart-demo") &&
  //       "TradingView" in window
  //     ) {
  //       new window.TradingView.widget({
  //         container_id: "technical-analysis-chart-demo",
  //         width: "100%",
  //         height: "100%",
  //         autosize: true,
  //         symbol: Total,
  //         interval: "D",
  //         timezone: "exchange",
  //         theme: darkTheme ? "dark" : "light",
  //         style: "1",
  //         toolbar_bg: "#f1f3f6",
  //         withdateranges: true,
  //         hide_side_toolbar: false,
  //         allow_symbol_change: true,
  //         save_image: false,
  //         studies: [
  //           "ROC@tv-basicstudies",
  //           "StochasticRSI@tv-basicstudies",
  //           "MASimple@tv-basicstudies",
  //         ],
  //         show_popup_button: true,
  //         popup_width: "1000",
  //         popup_height: "650",
  //         locale: "in",
  //       });
  //     }
  //   }
  // }, [Total, darkTheme]);

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

  function DateGetter() {
    const parsedDate = new Date(prevDate);
    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
    const day = String(parsedDate.getDate()).padStart(2, "0");
    const updatedDate = `${year}-${month}-${day}`;
    convertDateToEpoch(updatedDate);
  }
  const convertDateToEpoch = (date) => {
    const selectedDate = new Date(date);
    selectedDate.setHours(9);
    selectedDate.setMinutes(30);
    selectedDate.setSeconds(0);
    selectedDate.setMilliseconds(0);
    const epoch = selectedDate.getTime();
    setFrom(epoch.toString());
  };

  function FormatDateTo() {
    const parsedDate = new Date(currentDate);
    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
    const day = String(parsedDate.getDate()).padStart(2, "0");
    const updatedDate = `${year}-${month}-${day}`;
    PrevDateConvertor(updatedDate);
  }

  const PrevDateConvertor = (dateString) => {
    const selectedDate = new Date(dateString);
    selectedDate.setHours(15);
    selectedDate.setMinutes(30);
    selectedDate.setSeconds(0);
    selectedDate.setMilliseconds(0);
    const epoch = selectedDate.getTime();
    setTo(epoch.toString());
  };

  function NewFunc() {
    if (to && from) {
      GetHistoricalDefault();
    }
  }

  useEffect(() => {
    DateGetter();
    FormatDateTo();
  }, [to, from]);

  const token = localStorage.getItem("token");

  const GetHistoricalDefault = async () => {
    const payload = {
      token,
      resolution: "D",
      exchange: Exchange,
      from,
      to,
    };
    try {
      const data = await HistoricalDataPrevLogin(payload);
      setHistoricalData(data);
    } catch (e) {
      console.log(e);
    }
  };

  // LightWeight Chart
  const chartContainerRef = useRef(null);
  let chartInstance;
  const [chartType, setChartType] = useState("candles");
  const [chartData, setChartData] = useState([]);
  const [createSeries, setCreateSeries] = useState(null);

  useEffect(() => {
    if (chartType === "candles") {
      setChartData([
        {
          time: "2018-12-22",
          open: 75.16,
          high: 82.84,
          low: 36.16,
          close: 45.72,
        },
      ]);
    } else if (chartType === "line") {
      setChartData([
        { value: 0, time: 1642425322 },
        { value: 8, time: 1642511722 },
        { value: 10, time: 1642598122 },
      ]);
    } else if (chartType === "bars") {
      setChartData([
        { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
        { open: 9.55, high: 10.3, low: 9.42, close: 9.94, time: 1642514276 },
        { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
        { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
        { open: 9.51, high: 10.46, low: 9.1, close: 10.17, time: 1642773476 },
        {
          open: 10.17,
          high: 10.96,
          low: 10.16,
          close: 10.47,
          time: 1642859876,
        },
        {
          open: 10.47,
          high: 11.39,
          low: 10.4,
          close: 10.81,
          time: 1642946276,
        },
        {
          open: 10.81,
          high: 11.6,
          low: 10.3,
          close: 10.75,
          time: 1643032676,
        },
        {
          open: 10.75,
          high: 11.6,
          low: 10.49,
          close: 10.93,
          time: 1643119076,
        },
        {
          open: 10.93,
          high: 11.53,
          low: 10.76,
          close: 10.96,
          time: 1643205476,
        },
      ]);
    } else if (chartType === "area") {
      setChartData([
        { time: "2018-12-22", value: 32.51 },
        { time: "2018-12-23", value: 31.11 },
        { time: "2018-12-24", value: 27.02 },
        { time: "2018-12-25", value: 27.32 },
        { time: "2018-12-26", value: 25.17 },
        { time: "2018-12-27", value: 28.89 },
        { time: "2018-12-28", value: 25.46 },
        { time: "2018-12-29", value: 23.92 },
        { time: "2018-12-30", value: 22.68 },
        { time: "2018-12-31", value: 22.67 },
      ]);
    }
  }, [chartType]);

  useEffect(() => {
    setCreateSeries((chartType) => {
      switch (chartType) {
        case "candles":
          return chartInstance.addCandlestickSeries({
            upColor: "#26a69a",
            downColor: "#ef5350",
            borderVisible: false,
            wickUpColor: "#26a69a",
            wickDownColor: "#ef5350",
          });
        case "line":
          return chartInstance.addLineSeries({ color: "#2962FF" });
        case "bars":
          return chartInstance.addBarSeries({
            upColor: "#26a69a",
            downColor: "#ef5350",
          });
        case "area":
          return chartInstance.addAreaSeries({
            lineColor: "#2962FF",
            topColor: "#2962FF",
            bottomColor: "rgba(41, 98, 255, 0.28)",
          });
        default:
          return chartInstance.addCandlestickSeries({
            upColor: "#26a69a",
            downColor: "#ef5350",
            borderVisible: false,
            wickUpColor: "#26a69a",
            wickDownColor: "#ef5350",
          });
      }
    });
  }, [chartType , createSeries]);

  useEffect(() => {
    if (chartInstance) {
      const series = createSeries(chartType);
      series.setData(chartData);
      chartInstance.timeScale().fitContent();
    }
  }, [chartData, createSeries]);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chartOptions = {
        layout: {
          textColor: "black",
          background: {
            type: "solid",
            color: "white",
          },
        },
      };

      chartInstance = createChart(chartContainerRef.current, chartOptions);
    }

    return () => {
      if (chartInstance) {
        chartInstance.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (chartInstance) {
      const series = createSeries(chartType);
      series.setData(chartData);
      chartInstance.timeScale().fitContent();
    }
  }, [chartType, createSeries]);

  return (
    <>
      <HistoricalModal show={modalShow} onHide={() => setModalShow(false)} />

      <div className="homeS">
        {Exchange && symbol ? (
          <>
            {/* <div className="tradingview-widget-container">
            <div id="technical-analysis-chart-demo" />
            <div className="tradingview-widget-copyright"></div>
          </div> */}

            <div className="Graph">
              <div>
                <label>Chart Type:</label>
                <select
                  value={chartType}
                  onChange={(e) => setChartType(e.target.value)}
                >
                  <option value="candles">Candles</option>
                  <option value="line">Line</option>
                  <option value="bars">Bars</option>
                  <option value="area">Area</option>
                </select>
              </div>
              <div
                ref={chartContainerRef}
                style={{ width: "800px", height: "400px" }}
              />
            </div>
          </>
        ) : (
          <div className="Content_Box">
            <p className="head">Market Today</p>
            <div className="div_Box">
              {marketToday?.map((item, index) => (
                <div
                  onClick={() => {
                    localStorage.setItem(
                      "Exchange",
                      item.ExchangeData?.exchange
                    );
                    localStorage.setItem("Symbol", item.ExchangeData?.Symbol);
                    localStorage.setItem("token", item.ExchangeData?.token);
                    setExchange(item.ExchangeData?.exchange);
                    setSymbol(item.ExchangeData?.Symbol);
                  }}
                  className="Item"
                  key={index}
                >
                  <div>
                    <p className="title"> {item.name} </p>
                    <p className="price"> {item.lp} </p>
                    <p
                      className={`percent  ${item.pc < 0 ? "minus" : "plus"} `}
                    >
                      {" "}
                      ({item.pc}%){" "}
                    </p>
                  </div>
                  <i
                    className={`${
                      item.pc < 0
                        ? "fa-solid fa-arrow-trend-down"
                        : "fa-solid fa-arrow-trend-up"
                    }`}
                  ></i>
                </div>
              ))}
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
