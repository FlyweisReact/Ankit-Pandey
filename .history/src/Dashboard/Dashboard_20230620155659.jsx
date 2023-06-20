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
  const { myState, secondTab, Exchange, symbol  } = useContext(MyContext);
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

  return (
    <>
      <HistoricalModal show={modalShow} onHide={() => setModalShow(false)} />

      <div className="homeS">
        <div className="tradingview-widget-container">
          <div id="technical-analysis-chart-demo" />
          <div className="tradingview-widget-copyright"></div>
        </div>

        <div className="gridCont">
          {myState ? <MovingCard2 /> : ""}
          {secondTab ? 
          
            <Draggable
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        bounds={{
          left: -homeSDimensions.width + cardWidth + secondCardWidth,
          top: 0,
          right: homeSDimensions.width - secondCardWidth,
          bottom: homeSDimensions.height,
        }}
      >
        <div ref={secondCardRef}>
          <Card className="clear2">
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
          
           : ""}
        </div>
      </div>
    </>
  );
};
export default HOC(Dashboard);