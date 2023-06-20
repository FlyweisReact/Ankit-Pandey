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
import { MyContext } from "../Homepage/MyContext";
import { HistoricalModal } from "../Modal/GetOrder";
import MovingCard from "../Component/MovingCard";
import MovingCard2 from "../Component/MovingCard2";

let tvScriptLoadingPromise;


const Dashboard = () => {
  const { myState, secondTab, Exchange, symbol } = useContext(MyContext);
  const onLoadScriptRef = useRef();
  const [modalShow, setModalShow] = useState(false);

  const [Total, setTotal] = useState(symbol);

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

  useEffect(() => CheckingValue(), [CheckingValue]);

  const gridContRef = useRef(null);
  return (
    <>
      <HistoricalModal show={modalShow} onHide={() => setModalShow(false)} />

      <div className="homeS">
        <div className="tradingview-widget-container">
          <div id="technical-analysis-chart-demo" />
          <div className="tradingview-widget-copyright"></div>
        </div>

        <div className="gridCont" ref={gridContRef}>
          {myState ? <MovingCard2 /> : ""}
          {secondTab ? <MovingCard /> : ""}
        </div>
      </div>
    </>
  );
};
export default HOC(Dashboard);
