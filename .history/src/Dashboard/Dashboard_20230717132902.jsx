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
  const [chartType, setChartType] = useState('candles'); // Default chart type is 'candles'
  let chartInstance;
  let seriesInstance;
  let chartData = [];

  useEffect(() => {
    if (chartContainerRef.current) {
      const chartOptions = {
        layout: {
          textColor: 'black',
          background: {
            type: 'solid',
            color: 'white',
          },
        },
      };

      chartInstance = createChart(chartContainerRef.current, chartOptions);
      seriesInstance = createSeries(chartType);
      seriesInstance.setData(chartData);

      chartInstance.timeScale().fitContent();
    }

    return () => {
      if (chartInstance) {
        chartInstance.remove();
      }
    };
  }, [chartType]);

  const createSeries = (type) => {
    switch (type) {
      case 'candles':
        return chartInstance.addCandlestickSeries();
      case 'line':
        return chartInstance.addLineSeries();
      case 'bars':
        return chartInstance.addBarSeries();
      default:
        return chartInstance.addCandlestickSeries();
    }
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  const handleDataUpdate = () => {
    const updatedData = [
      { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
      { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
      { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
      { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
      { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
      { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
      { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
      { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
      { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
      { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
    ];

    chartData = updatedData;
    seriesInstance.setData(chartData.map(({ time, open, high, low, close }) => ({
      time: new Date(time),
      open,
      high,
      low,
      close,
    })));
  };

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
                <div>
                  <label htmlFor="chartType">Chart Type:</label>
                  <select
                    id="chartType"
                    value={chartType}
                    onChange={handleChartTypeChange}
                  >
                    <option value="candles">Candles</option>
                    <option value="line">Line</option>
                    <option value="bars">Bars</option>
                  </select>
                </div>
                <div
                  ref={chartContainerRef}
                  style={{ width: "800px", height: "400px" }}
                />
                <button onClick={handleDataUpdate}>Update Data</button>
              </div>
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
