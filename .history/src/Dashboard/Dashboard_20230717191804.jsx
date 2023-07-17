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
import { createChart, CrosshairMode, LineStyle } from "lightweight-charts";

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
  const [currentTheme, setCurrentTheme] = useState("Dark");

  useEffect(() => {
    if (chartContainerRef.current) {
      const chartOptions = {
        layout: {
          textColor: "black",
          background: {
            type: "solid",
            color: "white",
          },
          grid: {
            vertLines: { color: "#444" },
            horzLines: { color: "#444" },
          },
          rightPriceScale: {
            scaleMargins: {
              top: 0.3,
              bottom: 0.25,
            },
          },
          crosshair: {
            vertLine: {
              width: 4,
              color: "rgba(224, 227, 235, 0.1)",
              style: 0,
            },
            horzLine: {
              visible: false,
              labelVisible: false,
            },
          },
          grid: {
            vertLines: {
              color: "rgba(42, 46, 57, 0)",
            },
            horzLines: {
              color: "rgba(42, 46, 57, 0)",
            },
          },
          handleScroll: {
            vertTouchDrag: false,
          },
        },
      };

      const darkTheme = {
        chart: {
          layout: {
            background: {
              type: "solid",
              color: "#000000",
            },
            lineColor: "#fff",
            textColor: "#fff",
          },
          watermark: {
            color: "rgba(0, 0, 0, 0)",
          },
          crosshair: {
            color: "#fff",
          },
          grid: {
            vertLines: {
              color: "#000",
            },
            horzLines: {
              color: "#000",
            },
          },
        },
        series: {
          topColor: "#fff",
          bottomColor: "#5f1df1",
          lineColor: "#2d0e71",
        },
      };
      const lightTheme = {
        chart: {
          layout: {
            background: {
              type: "solid",
              color: "#FFFFFF",
            },
            lineColor: "#2B2B43",
            textColor: "#191919",
          },
          watermark: {
            color: "rgba(0, 0, 0, 0)",
          },
          grid: {
            vertLines: {
              visible: false,
            },
            horzLines: {
              color: "#f0f3fa",
            },
          },
        },
        series: {
          topColor: "rgba(33, 150, 243, 0.56)",
          bottomColor: "rgba(33, 150, 243, 0.04)",
          lineColor: "rgba(33, 150, 243, 1)",
        },
      };
      const colorfulTheme = {
        chart: {
          layout: {
            background: {
              type: "solid",
              color: "#2e1c8c",
            },
            lineColor: "#fcec60",
            textColor: "#fcec60",
          },
          watermark: {
            color: "rgba(0, 0, 0, 0)",
          },
          crosshair: {
            color: "#fcec60",
          },
          grid: {
            vertLines: {
              color: "#2e1c8c",
            },
            horzLines: {
              color: "#2e1c8c",
            },
          },
        },
        series: {
          topColor: "#fcec60",
          bottomColor: "#301e8c",
          lineColor: "#fcec60",
        },
      };

      var themesData = {
        Dark: darkTheme,
        Light: lightTheme,
        Color: colorfulTheme,
      };

      chartInstance = createChart(chartContainerRef.current, chartOptions);

      function syncToTheme(theme) {
        chartInstance.applyOptions(themesData[theme].chart);
      }

      if (chartType === "candles") {
        const candlestickSeries = chartInstance.addCandlestickSeries({
          upColor: "#26a69a",
          downColor: "#ef5350",
          borderVisible: false,
          wickUpColor: "#26a69a",
          wickDownColor: "#ef5350",
        });
        const data = [
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
        ];
        candlestickSeries.setData(data);
        chartInstance.timeScale().fitContent();
      } else if (chartType === "bars") {
        const barSeries = chartInstance.addBarSeries({
          upColor: "#26a69a",
          downColor: "#ef5350",
        });

        const data = [
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
        ];

        barSeries.setData(data);

        chartInstance.timeScale().fitContent();
      } else if (chartType === "area") {
        const areaSeries = chartInstance.addAreaSeries({
          lineColor: "#2962FF",
          topColor: "#2962FF",
          bottomColor: "rgba(41, 98, 255, 0.28)",
          lineWidth: 2,
          crosshairMarkerVisible: false,
          lastValueVisible: false,
          priceLineVisible: false,
        });

        const data = [
          { value: 0, time: 1642425322 },
          { value: 8, time: 1642511722 },
          { value: 10, time: 1642598122 },
          { value: 20, time: 1642684522 },
          { value: 3, time: 1642770922 },
          { value: 43, time: 1642857322 },
          { value: 41, time: 1642943722 },
          { value: 43, time: 1643030122 },
          { value: 56, time: 1643116522 },
          { value: 46, time: 1643202922 },
        ];

        areaSeries.setData(data);


        var minimumPrice = data[0].value;
        var maximumPrice = minimumPrice;
        for (var i = 1; i < data.length; i++) {
          var price = data[i].value;
          if (price > maximumPrice) {
            maximumPrice = price;
          }
          if (price < minimumPrice) {
            minimumPrice = price;
          }
        }
        var avgPrice = (maximumPrice + minimumPrice) / 2;

        var lineWidth = 2;
        var minPriceLine = {
          price: minimumPrice,
          color: "#be1238",
          lineWidth: lineWidth,
          lineStyle: LineStyle.Solid,
          axisLabelVisible: true,
          title: "minimum price",
        };
        var avgPriceLine = {
          price: avgPrice,
          color: "#be1238",
          lineWidth: lineWidth,
          lineStyle: LineStyle.Solid,
          axisLabelVisible: true,
          title: "average price",
        };
        var maxPriceLine = {
          price: maximumPrice,
          color: "#be1238",
          lineWidth: lineWidth,
          lineStyle: LineStyle.Solid,
          axisLabelVisible: true,
          title: "maximum price",
        };

        lineSeries.createPriceLine(minPriceLine);
        lineSeries.createPriceLine(avgPriceLine);
        lineSeries.createPriceLine(maxPriceLine);

        chartInstance.timeScale().fitContent();
      } else if (chartType === "line") {
        const lineSeries = chartInstance.addLineSeries({
          color: "rgb(0, 120, 255)",
          lineWidth: 2,
          crosshairMarkerVisible: false,
          lastValueVisible: false,
          priceLineVisible: false,
        });

        const data = [
          { time: { year: 2018, month: 1, day: 1 }, value: 27.58405298746434 },
          { time: { year: 2018, month: 1, day: 2 }, value: 31.74088841431117 },
          { time: { year: 2018, month: 1, day: 3 }, value: 35.892978753808926 },
          { time: { year: 2018, month: 1, day: 4 }, value: 39.63642029045179 },
          { time: { year: 2018, month: 1, day: 5 }, value: 40.79167357702531 },
          { time: { year: 2018, month: 1, day: 6 }, value: 47.691740220947764 },
          { time: { year: 2018, month: 1, day: 7 }, value: 49.377161099825415 },
          { time: { year: 2018, month: 1, day: 8 }, value: 52.47379203136591 },
          { time: { year: 2018, month: 1, day: 9 }, value: 50.40209743179448 },
          { time: { year: 2018, month: 1, day: 10 }, value: 61.47316837848548 },
          { time: { year: 2018, month: 1, day: 11 }, value: 58.22831552141069 },
          { time: { year: 2018, month: 1, day: 12 }, value: 59.36868132891698 },
          { time: { year: 2018, month: 1, day: 13 }, value: 62.10845687168416 },
          {
            time: { year: 2018, month: 1, day: 14 },
            value: 51.259701958506724,
          },
          {
            time: { year: 2018, month: 1, day: 15 },
            value: 56.247578870411644,
          },
          {
            time: { year: 2018, month: 1, day: 16 },
            value: 55.483307642385164,
          },
          { time: { year: 2018, month: 1, day: 17 }, value: 55.85295564734231 },
          { time: { year: 2018, month: 1, day: 18 }, value: 48.3138216778343 },
          {
            time: { year: 2018, month: 1, day: 19 },
            value: 53.071901176203866,
          },
          {
            time: { year: 2018, month: 1, day: 20 },
            value: 50.873781097281885,
          },
          { time: { year: 2018, month: 1, day: 21 }, value: 49.7840315054249 },
          { time: { year: 2018, month: 1, day: 22 }, value: 52.34956807336156 },
          { time: { year: 2018, month: 1, day: 23 }, value: 53.79112543285674 },
          {
            time: { year: 2018, month: 1, day: 24 },
            value: 53.984887985424805,
          },
          { time: { year: 2018, month: 1, day: 25 }, value: 58.56902893497121 },
          { time: { year: 2018, month: 1, day: 26 }, value: 54.76191372282466 },
          { time: { year: 2018, month: 1, day: 27 }, value: 63.38042554684846 },
          {
            time: { year: 2018, month: 1, day: 28 },
            value: 55.452618512103065,
          },
          { time: { year: 2018, month: 1, day: 29 }, value: 65.60820758942769 },
          { time: { year: 2018, month: 1, day: 30 }, value: 56.82795136583009 },
          { time: { year: 2018, month: 1, day: 31 }, value: 70.3148022984224 },
          { time: { year: 2018, month: 2, day: 1 }, value: 65.86230944167264 },
          { time: { year: 2018, month: 2, day: 2 }, value: 72.05467846676524 },
          { time: { year: 2018, month: 2, day: 3 }, value: 72.99238887850564 },
          { time: { year: 2018, month: 2, day: 4 }, value: 67.03373730222785 },
          { time: { year: 2018, month: 2, day: 5 }, value: 69.97670934736414 },
          { time: { year: 2018, month: 2, day: 6 }, value: 73.08910595492105 },
          { time: { year: 2018, month: 2, day: 7 }, value: 81.43976528732057 },
          { time: { year: 2018, month: 2, day: 8 }, value: 73.62230936920984 },
          { time: { year: 2018, month: 2, day: 9 }, value: 82.15522801870938 },
          { time: { year: 2018, month: 2, day: 10 }, value: 77.99384538574678 },
          { time: { year: 2018, month: 2, day: 11 }, value: 85.62489628897463 },
          { time: { year: 2018, month: 2, day: 12 }, value: 86.93090666568217 },
          { time: { year: 2018, month: 2, day: 13 }, value: 75.99689788850394 },
          { time: { year: 2018, month: 2, day: 14 }, value: 88.46418548355727 },
          { time: { year: 2018, month: 2, day: 15 }, value: 86.20760396539865 },
          { time: { year: 2018, month: 2, day: 16 }, value: 81.88757639758437 },
          { time: { year: 2018, month: 2, day: 17 }, value: 79.58151786389108 },
          { time: { year: 2018, month: 2, day: 18 }, value: 80.96845249711073 },
          { time: { year: 2018, month: 2, day: 19 }, value: 73.54901807055447 },
          { time: { year: 2018, month: 2, day: 20 }, value: 75.65626118347262 },
          { time: { year: 2018, month: 2, day: 21 }, value: 78.41307347680399 },
          { time: { year: 2018, month: 2, day: 22 }, value: 74.60352602043042 },
          { time: { year: 2018, month: 2, day: 23 }, value: 72.28241570381236 },
          { time: { year: 2018, month: 2, day: 24 }, value: 72.24427397962566 },
          { time: { year: 2018, month: 2, day: 25 }, value: 64.80996965592134 },
          { time: { year: 2018, month: 2, day: 26 }, value: 67.37511361319652 },
          { time: { year: 2018, month: 2, day: 27 }, value: 65.5449131917524 },
          { time: { year: 2018, month: 2, day: 28 }, value: 65.4802711362433 },
          { time: { year: 2018, month: 3, day: 1 }, value: 62.207767815581086 },
          { time: { year: 2018, month: 3, day: 2 }, value: 59.78884720470812 },
          { time: { year: 2018, month: 3, day: 3 }, value: 67.51846586137782 },
          { time: { year: 2018, month: 3, day: 4 }, value: 68.752834400291 },
          { time: { year: 2018, month: 3, day: 5 }, value: 66.63416073573323 },
          { time: { year: 2018, month: 3, day: 6 }, value: 65.58601621691751 },
          { time: { year: 2018, month: 3, day: 7 }, value: 57.33498792621458 },
          { time: { year: 2018, month: 3, day: 8 }, value: 56.93436946311955 },
          { time: { year: 2018, month: 3, day: 9 }, value: 58.31144672902557 },
          { time: { year: 2018, month: 3, day: 10 }, value: 59.96407207657268 },
          { time: { year: 2018, month: 3, day: 11 }, value: 55.7861486424976 },
          { time: { year: 2018, month: 3, day: 12 }, value: 52.91803500214551 },
          {
            time: { year: 2018, month: 3, day: 13 },
            value: 54.491591573038306,
          },
          {
            time: { year: 2018, month: 3, day: 14 },
            value: 51.924409342593385,
          },
          { time: { year: 2018, month: 3, day: 15 }, value: 41.90263950118436 },
          {
            time: { year: 2018, month: 3, day: 16 },
            value: 40.514436076485694,
          },
          {
            time: { year: 2018, month: 3, day: 17 },
            value: 41.065887666854486,
          },
          { time: { year: 2018, month: 3, day: 18 }, value: 40.44445534031683 },
          { time: { year: 2018, month: 3, day: 19 }, value: 42.13922977216152 },
          {
            time: { year: 2018, month: 3, day: 20 },
            value: 42.317162952084495,
          },
          { time: { year: 2018, month: 3, day: 21 }, value: 39.02881877743751 },
          { time: { year: 2018, month: 3, day: 22 }, value: 39.81917993955704 },
          {
            time: { year: 2018, month: 3, day: 23 },
            value: 36.753197056053374,
          },
          { time: { year: 2018, month: 3, day: 24 }, value: 37.02203306330588 },
          { time: { year: 2018, month: 3, day: 25 }, value: 36.36014042161194 },
          { time: { year: 2018, month: 3, day: 26 }, value: 33.56275879100148 },
          { time: { year: 2018, month: 3, day: 27 }, value: 34.39112540787079 },
          { time: { year: 2018, month: 3, day: 28 }, value: 30.57170225544929 },
          { time: { year: 2018, month: 3, day: 29 }, value: 33.56826040802756 },
          { time: { year: 2018, month: 3, day: 30 }, value: 32.89895543218274 },
          {
            time: { year: 2018, month: 3, day: 31 },
            value: 31.015658561825738,
          },
          { time: { year: 2018, month: 4, day: 1 }, value: 33.189179815787455 },
          { time: { year: 2018, month: 4, day: 2 }, value: 29.530756945582162 },
          { time: { year: 2018, month: 4, day: 3 }, value: 29.250978140719916 },
          { time: { year: 2018, month: 4, day: 4 }, value: 27.89635178919736 },
          { time: { year: 2018, month: 4, day: 5 }, value: 26.995427160624686 },
          { time: { year: 2018, month: 4, day: 6 }, value: 25.89631885043023 },
          { time: { year: 2018, month: 4, day: 7 }, value: 28.71812492475548 },
          { time: { year: 2018, month: 4, day: 8 }, value: 23.56476085365468 },
          { time: { year: 2018, month: 4, day: 9 }, value: 23.8550787876547 },
          { time: { year: 2018, month: 4, day: 10 }, value: 23.27046572075657 },
          { time: { year: 2018, month: 4, day: 11 }, value: 25.73099630369951 },
          {
            time: { year: 2018, month: 4, day: 12 },
            value: 23.398760738394646,
          },
          { time: { year: 2018, month: 4, day: 13 }, value: 22.97970501784193 },
          {
            time: { year: 2018, month: 4, day: 14 },
            value: 22.145587244500526,
          },
          {
            time: { year: 2018, month: 4, day: 15 },
            value: 20.622578956226192,
          },
          { time: { year: 2018, month: 4, day: 16 }, value: 21.99297423796017 },
          {
            time: { year: 2018, month: 4, day: 17 },
            value: 20.756081302371527,
          },
          { time: { year: 2018, month: 4, day: 18 }, value: 18.1983338834302 },
          {
            time: { year: 2018, month: 4, day: 19 },
            value: 16.419404563645198,
          },
          { time: { year: 2018, month: 4, day: 20 }, value: 18.38192363882247 },
          { time: { year: 2018, month: 4, day: 21 }, value: 17.41452255210322 },
          { time: { year: 2018, month: 4, day: 22 }, value: 17.39866711593896 },
          {
            time: { year: 2018, month: 4, day: 23 },
            value: 14.859371316920733,
          },
          { time: { year: 2018, month: 4, day: 24 }, value: 14.49488592297959 },
          {
            time: { year: 2018, month: 4, day: 25 },
            value: 14.183858665721397,
          },
          {
            time: { year: 2018, month: 4, day: 26 },
            value: 12.754187935636056,
          },
          {
            time: { year: 2018, month: 4, day: 27 },
            value: 14.467536059608742,
          },
          { time: { year: 2018, month: 4, day: 28 }, value: 14.72962730689032 },
          {
            time: { year: 2018, month: 4, day: 29 },
            value: 16.591675981296518,
          },
          {
            time: { year: 2018, month: 4, day: 30 },
            value: 17.560385679284135,
          },
          { time: { year: 2018, month: 5, day: 1 }, value: 22.386250317504064 },
          { time: { year: 2018, month: 5, day: 2 }, value: 23.697029442697385 },
          { time: { year: 2018, month: 5, day: 3 }, value: 23.453148128592442 },
          { time: { year: 2018, month: 5, day: 4 }, value: 23.164700105036882 },
          { time: { year: 2018, month: 5, day: 5 }, value: 23.919034678006323 },
          { time: { year: 2018, month: 5, day: 6 }, value: 25.18353870528509 },
          { time: { year: 2018, month: 5, day: 7 }, value: 26.982824465076394 },
          { time: { year: 2018, month: 5, day: 8 }, value: 29.122512185000712 },
          { time: { year: 2018, month: 5, day: 9 }, value: 29.60160406576696 },
          {
            time: { year: 2018, month: 5, day: 10 },
            value: 30.845749384528016,
          },
          { time: { year: 2018, month: 5, day: 11 }, value: 33.03296938636202 },
          {
            time: { year: 2018, month: 5, day: 12 },
            value: 33.784707082446104,
          },
          { time: { year: 2018, month: 5, day: 13 }, value: 36.08545410406137 },
          { time: { year: 2018, month: 5, day: 14 }, value: 36.80597815439238 },
          { time: { year: 2018, month: 5, day: 15 }, value: 34.56062188644443 },
          { time: { year: 2018, month: 5, day: 16 }, value: 36.52666657165473 },
          { time: { year: 2018, month: 5, day: 17 }, value: 34.76705735297833 },
          { time: { year: 2018, month: 5, day: 18 }, value: 39.01598033743525 },
          { time: { year: 2018, month: 5, day: 19 }, value: 37.60979560604685 },
          {
            time: { year: 2018, month: 5, day: 20 },
            value: 42.403895121650436,
          },
          { time: { year: 2018, month: 5, day: 21 }, value: 45.55998014298455 },
          { time: { year: 2018, month: 5, day: 22 }, value: 39.76704752577289 },
          { time: { year: 2018, month: 5, day: 23 }, value: 41.83196178430985 },
          { time: { year: 2018, month: 5, day: 24 }, value: 46.99399105885453 },
          {
            time: { year: 2018, month: 5, day: 25 },
            value: 48.553566318637984,
          },
          {
            time: { year: 2018, month: 5, day: 26 },
            value: 48.918166891087594,
          },
          { time: { year: 2018, month: 5, day: 27 }, value: 42.95391588314584 },
          {
            time: { year: 2018, month: 5, day: 28 },
            value: 51.267649950057546,
          },
          { time: { year: 2018, month: 5, day: 29 }, value: 44.86104374986037 },
          { time: { year: 2018, month: 5, day: 30 }, value: 46.7183564731453 },
          {
            time: { year: 2018, month: 5, day: 31 },
            value: 52.753001379260766,
          },
          { time: { year: 2018, month: 6, day: 1 }, value: 56.04835638442964 },
          { time: { year: 2018, month: 6, day: 2 }, value: 54.82119793390652 },
          { time: { year: 2018, month: 6, day: 3 }, value: 57.718938021257685 },
          { time: { year: 2018, month: 6, day: 4 }, value: 53.9914459224653 },
          { time: { year: 2018, month: 6, day: 5 }, value: 59.33050624063286 },
          { time: { year: 2018, month: 6, day: 6 }, value: 50.79074268713266 },
          { time: { year: 2018, month: 6, day: 7 }, value: 53.15657316197036 },
          { time: { year: 2018, month: 6, day: 8 }, value: 59.43675134021954 },
          { time: { year: 2018, month: 6, day: 9 }, value: 63.28437595760727 },
          { time: { year: 2018, month: 6, day: 10 }, value: 58.07099287435428 },
          { time: { year: 2018, month: 6, day: 11 }, value: 56.68728978119396 },
          { time: { year: 2018, month: 6, day: 12 }, value: 57.05079700873323 },
          { time: { year: 2018, month: 6, day: 13 }, value: 65.65087785161663 },
          { time: { year: 2018, month: 6, day: 14 }, value: 59.20877581396441 },
          { time: { year: 2018, month: 6, day: 15 }, value: 64.30200099280857 },
          { time: { year: 2018, month: 6, day: 16 }, value: 68.60774992100288 },
          { time: { year: 2018, month: 6, day: 17 }, value: 67.16628680993453 },
          { time: { year: 2018, month: 6, day: 18 }, value: 62.89644591741811 },
          { time: { year: 2018, month: 6, day: 19 }, value: 61.42888198118138 },
          { time: { year: 2018, month: 6, day: 20 }, value: 64.89813095653885 },
          { time: { year: 2018, month: 6, day: 21 }, value: 72.72701573552945 },
          { time: { year: 2018, month: 6, day: 22 }, value: 67.85006296129148 },
          { time: { year: 2018, month: 6, day: 23 }, value: 74.8567814889 },
          { time: { year: 2018, month: 6, day: 24 }, value: 66.24228046316296 },
          { time: { year: 2018, month: 6, day: 25 }, value: 68.09192660329269 },
          { time: { year: 2018, month: 6, day: 26 }, value: 75.30075953672075 },
          { time: { year: 2018, month: 6, day: 27 }, value: 68.7478054620306 },
          { time: { year: 2018, month: 6, day: 28 }, value: 76.2285023801364 },
          { time: { year: 2018, month: 6, day: 29 }, value: 82.945167109736 },
          { time: { year: 2018, month: 6, day: 30 }, value: 76.91811779365663 },
          { time: { year: 2018, month: 7, day: 1 }, value: 73.4904875247808 },
          { time: { year: 2018, month: 7, day: 2 }, value: 78.37882382739707 },
          { time: { year: 2018, month: 7, day: 3 }, value: 77.00224598364632 },
          { time: { year: 2018, month: 7, day: 4 }, value: 74.96345662377028 },
          { time: { year: 2018, month: 7, day: 5 }, value: 85.54303380001907 },
          { time: { year: 2018, month: 7, day: 6 }, value: 74.23916926437794 },
          { time: { year: 2018, month: 7, day: 7 }, value: 86.38109732705232 },
          { time: { year: 2018, month: 7, day: 8 }, value: 88.36203657839357 },
          { time: { year: 2018, month: 7, day: 9 }, value: 81.63303116061893 },
          { time: { year: 2018, month: 7, day: 10 }, value: 78.05188105610182 },
          { time: { year: 2018, month: 7, day: 11 }, value: 93.73294498110195 },
          { time: { year: 2018, month: 7, day: 12 }, value: 86.3226018109303 },
          { time: { year: 2018, month: 7, day: 13 }, value: 83.18571530136985 },
          { time: { year: 2018, month: 7, day: 14 }, value: 92.45097319531271 },
          { time: { year: 2018, month: 7, day: 15 }, value: 82.61971871486392 },
          { time: { year: 2018, month: 7, day: 16 }, value: 84.39935112744469 },
          { time: { year: 2018, month: 7, day: 17 }, value: 86.84420907417798 },
          { time: { year: 2018, month: 7, day: 18 }, value: 81.50766784637338 },
          { time: { year: 2018, month: 7, day: 19 }, value: 88.74841709228694 },
          { time: { year: 2018, month: 7, day: 20 }, value: 85.84190975050336 },
          { time: { year: 2018, month: 7, day: 21 }, value: 86.9594938103096 },
          { time: { year: 2018, month: 7, day: 22 }, value: 83.72572564120199 },
          { time: { year: 2018, month: 7, day: 23 }, value: 83.42754326770913 },
          { time: { year: 2018, month: 7, day: 24 }, value: 80.40755818165856 },
          { time: { year: 2018, month: 7, day: 25 }, value: 81.40515523172276 },
          { time: { year: 2018, month: 7, day: 26 }, value: 88.6671912474792 },
          { time: { year: 2018, month: 7, day: 27 }, value: 83.98197434091429 },
          { time: { year: 2018, month: 7, day: 28 }, value: 79.93747419607003 },
          { time: { year: 2018, month: 7, day: 29 }, value: 88.74666581089701 },
          { time: { year: 2018, month: 7, day: 30 }, value: 88.4887222568271 },
          { time: { year: 2018, month: 7, day: 31 }, value: 91.70282162754224 },
          { time: { year: 2018, month: 8, day: 1 }, value: 81.82327312829118 },
          { time: { year: 2018, month: 8, day: 2 }, value: 89.56625546634567 },
          { time: { year: 2018, month: 8, day: 3 }, value: 83.60742160062637 },
          { time: { year: 2018, month: 8, day: 4 }, value: 92.16271144958857 },
          { time: { year: 2018, month: 8, day: 5 }, value: 92.93451790057534 },
          { time: { year: 2018, month: 8, day: 6 }, value: 97.10629615852636 },
          { time: { year: 2018, month: 8, day: 7 }, value: 93.18989484413193 },
          { time: { year: 2018, month: 8, day: 8 }, value: 99.52744238602173 },
          { time: { year: 2018, month: 8, day: 9 }, value: 90.84973685659028 },
          { time: { year: 2018, month: 8, day: 10 }, value: 98.37517814040118 },
          { time: { year: 2018, month: 8, day: 11 }, value: 90.13525425607658 },
          { time: { year: 2018, month: 8, day: 12 }, value: 95.55125798221395 },
          { time: { year: 2018, month: 8, day: 13 }, value: 82.77346455876308 },
          { time: { year: 2018, month: 8, day: 14 }, value: 83.24854499361042 },
          { time: { year: 2018, month: 8, day: 15 }, value: 95.41999231944423 },
          { time: { year: 2018, month: 8, day: 16 }, value: 93.80228527345439 },
          { time: { year: 2018, month: 8, day: 17 }, value: 95.6453232668047 },
          { time: { year: 2018, month: 8, day: 18 }, value: 85.15427147925779 },
          { time: { year: 2018, month: 8, day: 19 }, value: 84.96447951638784 },
          { time: { year: 2018, month: 8, day: 20 }, value: 95.92739640648459 },
          { time: { year: 2018, month: 8, day: 21 }, value: 96.44143870862634 },
          {
            time: { year: 2018, month: 8, day: 22 },
            value: 101.23323393804354,
          },
          { time: { year: 2018, month: 8, day: 23 }, value: 92.12092707164649 },
          {
            time: { year: 2018, month: 8, day: 24 },
            value: 101.74117610271144,
          },
          { time: { year: 2018, month: 8, day: 25 }, value: 96.38311956379351 },
          { time: { year: 2018, month: 8, day: 26 }, value: 98.18485692799554 },
          {
            time: { year: 2018, month: 8, day: 27 },
            value: 102.60080903938159,
          },
          { time: { year: 2018, month: 8, day: 28 }, value: 97.48394132428021 },
          {
            time: { year: 2018, month: 8, day: 29 },
            value: 101.41501247525068,
          },
          { time: { year: 2018, month: 8, day: 30 }, value: 94.9501205245301 },
          { time: { year: 2018, month: 8, day: 31 }, value: 89.11429564465982 },
          { time: { year: 2018, month: 9, day: 1 }, value: 104.1842141132897 },
          { time: { year: 2018, month: 9, day: 2 }, value: 97.36185743859737 },
          { time: { year: 2018, month: 9, day: 3 }, value: 97.34376526297034 },
          { time: { year: 2018, month: 9, day: 4 }, value: 103.73609636859413 },
          { time: { year: 2018, month: 9, day: 5 }, value: 86.89420264148593 },
          { time: { year: 2018, month: 9, day: 6 }, value: 90.99445484839778 },
          { time: { year: 2018, month: 9, day: 7 }, value: 92.0197876339847 },
          { time: { year: 2018, month: 9, day: 8 }, value: 87.35412911434453 },
          { time: { year: 2018, month: 9, day: 9 }, value: 97.40224787139312 },
          { time: { year: 2018, month: 9, day: 10 }, value: 98.14732375673768 },
          { time: { year: 2018, month: 9, day: 11 }, value: 101.5147062059064 },
          { time: { year: 2018, month: 9, day: 12 }, value: 93.11950437404803 },
          { time: { year: 2018, month: 9, day: 13 }, value: 98.41765784798642 },
          { time: { year: 2018, month: 9, day: 14 }, value: 89.08499357950659 },
          { time: { year: 2018, month: 9, day: 15 }, value: 96.29213559344964 },
          {
            time: { year: 2018, month: 9, day: 16 },
            value: 103.57528341068684,
          },
          { time: { year: 2018, month: 9, day: 17 }, value: 98.94258099235431 },
          { time: { year: 2018, month: 9, day: 18 }, value: 92.43383394007822 },
          {
            time: { year: 2018, month: 9, day: 19 },
            value: 105.39681697822706,
          },
          {
            time: { year: 2018, month: 9, day: 20 },
            value: 100.52663985092036,
          },
          { time: { year: 2018, month: 9, day: 21 }, value: 98.84754340440189 },
          { time: { year: 2018, month: 9, day: 22 }, value: 93.78502517034752 },
          { time: { year: 2018, month: 9, day: 23 }, value: 95.51435402626828 },
          { time: { year: 2018, month: 9, day: 24 }, value: 91.94633821567461 },
          { time: { year: 2018, month: 9, day: 25 }, value: 98.18484857755837 },
          {
            time: { year: 2018, month: 9, day: 26 },
            value: 102.51694320185617,
          },
          { time: { year: 2018, month: 9, day: 27 }, value: 97.40549024974396 },
          {
            time: { year: 2018, month: 9, day: 28 },
            value: 103.49718807374374,
          },
          {
            time: { year: 2018, month: 9, day: 29 },
            value: 108.24441490057781,
          },
          {
            time: { year: 2018, month: 9, day: 30 },
            value: 103.24675412744978,
          },
          { time: { year: 2018, month: 10, day: 1 }, value: 97.05089568637521 },
          { time: { year: 2018, month: 10, day: 2 }, value: 91.85875309835458 },
          { time: { year: 2018, month: 10, day: 3 }, value: 72.24590653541385 },
          { time: { year: 2018, month: 10, day: 4 }, value: 70.73707674373722 },
          { time: { year: 2018, month: 10, day: 5 }, value: 61.2106378263602 },
          { time: { year: 2018, month: 10, day: 6 }, value: 62.35889407826063 },
          { time: { year: 2018, month: 10, day: 7 }, value: 56.311930696659 },
          {
            time: { year: 2018, month: 10, day: 8 },
            value: 51.462743547904374,
          },
          { time: { year: 2018, month: 10, day: 9 }, value: 47.99928302521288 },
          {
            time: { year: 2018, month: 10, day: 10 },
            value: 42.735011616511976,
          },
          {
            time: { year: 2018, month: 10, day: 11 },
            value: 35.82291867003256,
          },
          {
            time: { year: 2018, month: 10, day: 12 },
            value: 28.706141122035454,
          },
          {
            time: { year: 2018, month: 10, day: 13 },
            value: 24.289344698634036,
          },
          {
            time: { year: 2018, month: 10, day: 14 },
            value: 22.56513000253429,
          },
          {
            time: { year: 2018, month: 10, day: 15 },
            value: 18.862530899060324,
          },
          {
            time: { year: 2018, month: 10, day: 16 },
            value: 18.164416367748263,
          },
          {
            time: { year: 2018, month: 10, day: 17 },
            value: 16.25993836760582,
          },
          {
            time: { year: 2018, month: 10, day: 18 },
            value: 15.849033589978859,
          },
          {
            time: { year: 2018, month: 10, day: 19 },
            value: 12.581184324950792,
          },
          {
            time: { year: 2018, month: 10, day: 20 },
            value: 12.46960767886934,
          },
          {
            time: { year: 2018, month: 10, day: 21 },
            value: 13.203284995561251,
          },
          {
            time: { year: 2018, month: 10, day: 22 },
            value: 12.751819244602629,
          },
          {
            time: { year: 2018, month: 10, day: 23 },
            value: 13.815126496529205,
          },
          {
            time: { year: 2018, month: 10, day: 24 },
            value: 14.44156419046133,
          },
          {
            time: { year: 2018, month: 10, day: 25 },
            value: 12.030505290672643,
          },
          {
            time: { year: 2018, month: 10, day: 26 },
            value: 13.426535837756518,
          },
          {
            time: { year: 2018, month: 10, day: 27 },
            value: 13.141003741491893,
          },
          {
            time: { year: 2018, month: 10, day: 28 },
            value: 12.216411608284261,
          },
          {
            time: { year: 2018, month: 10, day: 29 },
            value: 12.437867813477077,
          },
          {
            time: { year: 2018, month: 10, day: 30 },
            value: 12.228521667932771,
          },
          {
            time: { year: 2018, month: 10, day: 31 },
            value: 13.587126038913974,
          },
          {
            time: { year: 2018, month: 11, day: 1 },
            value: 12.016792589137491,
          },
          { time: { year: 2018, month: 11, day: 2 }, value: 13.01948020515645 },
          { time: { year: 2018, month: 11, day: 3 }, value: 12.70475528902004 },
          {
            time: { year: 2018, month: 11, day: 4 },
            value: 13.018454073452016,
          },
          {
            time: { year: 2018, month: 11, day: 5 },
            value: 12.505487262036313,
          },
          {
            time: { year: 2018, month: 11, day: 6 },
            value: 13.467522897553604,
          },
          {
            time: { year: 2018, month: 11, day: 7 },
            value: 13.748796553616549,
          },
          {
            time: { year: 2018, month: 11, day: 8 },
            value: 11.974873751121669,
          },
          { time: { year: 2018, month: 11, day: 9 }, value: 11.8316362912944 },
          {
            time: { year: 2018, month: 11, day: 10 },
            value: 13.864291857325023,
          },
          {
            time: { year: 2018, month: 11, day: 11 },
            value: 12.071675684436165,
          },
          {
            time: { year: 2018, month: 11, day: 12 },
            value: 12.314581956701367,
          },
          {
            time: { year: 2018, month: 11, day: 13 },
            value: 13.223445358310986,
          },
          {
            time: { year: 2018, month: 11, day: 14 },
            value: 12.346191421746546,
          },
          { time: { year: 2018, month: 11, day: 15 }, value: 12.0232072259563 },
          {
            time: { year: 2018, month: 11, day: 16 },
            value: 13.367039701380252,
          },
          {
            time: { year: 2018, month: 11, day: 17 },
            value: 12.232635114201212,
          },
          {
            time: { year: 2018, month: 11, day: 18 },
            value: 13.348220671014012,
          },
          {
            time: { year: 2018, month: 11, day: 19 },
            value: 13.508314659502604,
          },
          {
            time: { year: 2018, month: 11, day: 20 },
            value: 12.630893498655155,
          },
          {
            time: { year: 2018, month: 11, day: 21 },
            value: 12.632952849963768,
          },
          {
            time: { year: 2018, month: 11, day: 22 },
            value: 11.645073051089117,
          },
          {
            time: { year: 2018, month: 11, day: 23 },
            value: 13.845637677048611,
          },
          {
            time: { year: 2018, month: 11, day: 24 },
            value: 12.567519871595463,
          },
          {
            time: { year: 2018, month: 11, day: 25 },
            value: 13.927270152127294,
          },
          {
            time: { year: 2018, month: 11, day: 26 },
            value: 12.179362670863737,
          },
          {
            time: { year: 2018, month: 11, day: 27 },
            value: 12.471835488646303,
          },
          {
            time: { year: 2018, month: 11, day: 28 },
            value: 11.71761488042106,
          },
          {
            time: { year: 2018, month: 11, day: 29 },
            value: 12.181312973409113,
          },
          {
            time: { year: 2018, month: 11, day: 30 },
            value: 12.662272671374286,
          },
          {
            time: { year: 2018, month: 12, day: 1 },
            value: 13.859774226603497,
          },
          {
            time: { year: 2018, month: 12, day: 2 },
            value: 11.643237368800426,
          },
          {
            time: { year: 2018, month: 12, day: 3 },
            value: 11.646083130428282,
          },
          { time: { year: 2018, month: 12, day: 4 }, value: 13.3486102643562 },
          {
            time: { year: 2018, month: 12, day: 5 },
            value: 13.421817450001853,
          },
          {
            time: { year: 2018, month: 12, day: 6 },
            value: 13.734844672048157,
          },
          {
            time: { year: 2018, month: 12, day: 7 },
            value: 11.808371821628475,
          },
          {
            time: { year: 2018, month: 12, day: 8 },
            value: 13.906976670383472,
          },
          {
            time: { year: 2018, month: 12, day: 9 },
            value: 13.161627469585584,
          },
          {
            time: { year: 2018, month: 12, day: 10 },
            value: 13.642368164712535,
          },
          {
            time: { year: 2018, month: 12, day: 11 },
            value: 12.755167209621261,
          },
          {
            time: { year: 2018, month: 12, day: 12 },
            value: 12.13947468588139,
          },
          {
            time: { year: 2018, month: 12, day: 13 },
            value: 13.68979129854326,
          },
          {
            time: { year: 2018, month: 12, day: 14 },
            value: 11.812050924695251,
          },
          {
            time: { year: 2018, month: 12, day: 15 },
            value: 11.71992287051065,
          },
          {
            time: { year: 2018, month: 12, day: 16 },
            value: 13.003823991463284,
          },
          {
            time: { year: 2018, month: 12, day: 17 },
            value: 13.124946877570311,
          },
          {
            time: { year: 2018, month: 12, day: 18 },
            value: 11.844736927132542,
          },
          {
            time: { year: 2018, month: 12, day: 19 },
            value: 11.770961792864846,
          },
          {
            time: { year: 2018, month: 12, day: 20 },
            value: 10.926179837275598,
          },
          {
            time: { year: 2018, month: 12, day: 21 },
            value: 11.155771630851676,
          },
          {
            time: { year: 2018, month: 12, day: 22 },
            value: 11.63008791780728,
          },
          {
            time: { year: 2018, month: 12, day: 23 },
            value: 10.216268005840389,
          },
          {
            time: { year: 2018, month: 12, day: 24 },
            value: 13.611694182717626,
          },
          {
            time: { year: 2018, month: 12, day: 25 },
            value: 17.47706580052263,
          },
          {
            time: { year: 2018, month: 12, day: 26 },
            value: 20.900697260373697,
          },
          {
            time: { year: 2018, month: 12, day: 27 },
            value: 20.44940301651778,
          },
          {
            time: { year: 2018, month: 12, day: 28 },
            value: 23.47128311932538,
          },
          {
            time: { year: 2018, month: 12, day: 29 },
            value: 28.63506505828928,
          },
          {
            time: { year: 2018, month: 12, day: 30 },
            value: 29.567577074788517,
          },
        ];

        lineSeries.setData(data);

        var minimumPrice = data[0].value;
        var maximumPrice = minimumPrice;
        for (var i = 1; i < data.length; i++) {
          var price = data[i].value;
          if (price > maximumPrice) {
            maximumPrice = price;
          }
          if (price < minimumPrice) {
            minimumPrice = price;
          }
        }
        var avgPrice = (maximumPrice + minimumPrice) / 2;

        var lineWidth = 2;
        var minPriceLine = {
          price: minimumPrice,
          color: "#be1238",
          lineWidth: lineWidth,
          lineStyle: LineStyle.Solid,
          axisLabelVisible: true,
          title: "minimum price",
        };
        var avgPriceLine = {
          price: avgPrice,
          color: "#be1238",
          lineWidth: lineWidth,
          lineStyle: LineStyle.Solid,
          axisLabelVisible: true,
          title: "average price",
        };
        var maxPriceLine = {
          price: maximumPrice,
          color: "#be1238",
          lineWidth: lineWidth,
          lineStyle: LineStyle.Solid,
          axisLabelVisible: true,
          title: "maximum price",
        };

        lineSeries.createPriceLine(minPriceLine);
        lineSeries.createPriceLine(avgPriceLine);
        lineSeries.createPriceLine(maxPriceLine);

        chartInstance.timeScale().fitContent();
      }

      syncToTheme(currentTheme);
    }

    return () => {
      if (chartInstance) {
        chartInstance.remove();
      }
    };
  }, [chartType, currentTheme]);

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

              <div>
                <label>Chart Theme :</label>
                <select
                  value={chartType}
                  onChange={(e) => setCurrentTheme(e.target.value)}
                >
                  <option value=""></option>
                  <option value="Dark">Dark</option>
                  <option value="Light">Light</option>
                  <option value="Color">Color</option>
                </select>
              </div>
              <div
                ref={chartContainerRef}
                id="container"
                style={{
                  width: "800px",
                  height: "400px",
                  position: "relative",
                }}
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
