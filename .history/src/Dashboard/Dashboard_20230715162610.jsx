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

// New Chart
import { createChart } from "lightweight-charts";

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
  const chartRef = useRef(null);

  // Date
  const currentDate = new Date();
  const prevDate = new Date();
  prevDate.setDate(prevDate.getDate() - 10);

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

  // useEffect(() => {
  //   const chartOptions = {
  //     layout: {
  //       textColor: "#fff",
  //       background: { type: "solid", color: "#000" },
  //     },
  //   };
  //   const chart = createChart(
  //     document.getElementById("container"),
  //     chartOptions
  //   );

  //   const candlestickSeries = chart.addCandlestickSeries({
  //     upColor: "#fff",
  //     downColor: "#ef5350",
  //     borderVisible: false,
  //     wickUpColor: "#26a69a",
  //     wickDownColor: "#ef5350",
  //   });

  //   const mappedData = historicalData?.result?.map((i) => {
  //     return {
  //       close: i.close,
  //       high: i.high,
  //       low: i.low,
  //       open: i.open,
  //       time: i.time,
  //     };
  //   });
  //   const dummyData = [
  //     {
  //       close: 2495.55,
  //       high: 2515.4,
  //       low: 2488.7,
  //       open: 2507,
  //       time: "2023-06-26",
  //     },
  //     {
  //       close: 2496.45,
  //       high: 2509.5,
  //       low: 2486.65,
  //       open: 2496.55,
  //       time: "2023-06-27",
  //     },
  //     {
  //       close: 2529.5,
  //       high: 2537.85,
  //       low: 2497.85,
  //       open: 2513,
  //       time: "2023-06-28",
  //     },
  //     {
  //       close: 2550.25,
  //       high: 2556.65,
  //       low: 2533.45,
  //       open: 2546.4,
  //       time: "2023-06-30",
  //     },
  //     {
  //       close: 2615.7,
  //       high: 2622,
  //       low: 2555.35,
  //       open: 2558.05,
  //       time: "2023-07-03",
  //     },
  //     {
  //       close: 2588.75,
  //       high: 2625,
  //       low: 2573.25,
  //       open: 2625,
  //       time: "2023-07-04",
  //     },
  //     {
  //       close: 2584.5,
  //       high: 2609,
  //       low: 2575.8,
  //       open: 2609,
  //       time: "2023-07-05",
  //     },
  //     {
  //       close: 2638.75,
  //       high: 2644.45,
  //       low: 2576.05,
  //       open: 2576.05,
  //       time: "2023-07-06",
  //     },
  //     {
  //       close: 2633.6,
  //       high: 2664.95,
  //       low: 2628,
  //       open: 2635,
  //       time: "2023-07-07",
  //     },
  //   ];

  //   const candlestickData = mappedData?.length > 0 ? mappedData : dummyData;

  //   console.log(candlestickData, "candlestickData One");

  //   candlestickSeries.setData(candlestickData);

  //   chart.timeScale().fitContent();
  // }, [historicalData]);

  useEffect(() => {
    if (historicalData) {
      const chartOptions = {
        layout: {
          textColor: "#fff",
          background: { type: "solid", color: "#000" },
        },
      };

      if (chartRef.current) {
        const chart = chartRef.current;
        const candlestickSeries = chart.addCandlestickSeries({
          upColor: "#fff",
          downColor: "#ef5350",
          borderVisible: false,
          wickUpColor: "#26a69a",
          wickDownColor: "#ef5350",
        });

        const mappedData = historicalData.result.map((i) => {
          return {
            close: i.close,
            high: i.high,
            low: i.low,
            open: i.open,
            time: i.time,
          };
        });
        candlestickSeries.setData(mappedData);
        chart.timeScale().fitContent();
      } else {
        const chart = createChart(
          document.getElementById("container"),
          chartOptions
        );
        chartRef.current = chart;
        const candlestickSeries = chart.addCandlestickSeries({
          upColor: "#fff",
          downColor: "#ef5350",
          borderVisible: false,
          wickUpColor: "#26a69a",
          wickDownColor: "#ef5350",
        });
        const mappedData = [
          {
            close: 2495.55,
            high: 2515.4,
            low: 2488.7,
            open: 2507,
            time: "2023-06-26",
          },
          {
            close: 2496.45,
            high: 2509.5,
            low: 2486.65,
            open: 2496.55,
            time: "2023-06-27",
          },
          {
            close: 2529.5,
            high: 2537.85,
            low: 2497.85,
            open: 2513,
            time: "2023-06-28",
          },
          {
            close: 2550.25,
            high: 2556.65,
            low: 2533.45,
            open: 2546.4,
            time: "2023-06-30",
          },
          {
            close: 2615.7,
            high: 2622,
            low: 2555.35,
            open: 2558.05,
            time: "2023-07-03",
          },
          {
            close: 2588.75,
            high: 2625,
            low: 2573.25,
            open: 2625,
            time: "2023-07-04",
          },
          {
            close: 2584.5,
            high: 2609,
            low: 2575.8,
            open: 2609,
            time: "2023-07-05",
          },
          {
            close: 2638.75,
            high: 2644.45,
            low: 2576.05,
            open: 2576.05,
            time: "2023-07-06",
          },
          {
            close: 2633.6,
            high: 2664.95,
            low: 2628,
            open: 2635,
            time: "2023-07-07",
          },
        ];
        candlestickSeries.setData(mappedData);
        chart.timeScale().fitContent();
      }
    }
  }, [historicalData]);

  const token = localStorage.getItem("token");

  function DateGetter(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const updatedDate = `${year}-${month}-${day}`;
  }

  const GetHistoricalDefault = async () => {
    const payload = { token, resolution: "D", Exchange };
    try {
      const data = await HistoricalDataPrevLogin(payload);
      setHistoricalData(data);
      setMyState(true);
    } catch (e) {
      console.log(e);
    }
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
              <div id="container" />
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
