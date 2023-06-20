/** @format */

import { useRef, useState, useEffect  ,useContext} from "react";
import Draggable from "react-draggable";
import { Card } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { MyContext } from "../Homepage/MyContext";

const MovingCard = () => {
  const { myState, setMyState, secondTab, setSecondState, historicalData } =
  useContext(MyContext);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [homeSDimensions, setHomeSDimensions] = useState({
    width: 0,
    height: 0,
  });
  const secondCardRef = useRef(null);
  const [secondCardWidth, setSecondCardWidth] = useState(0);

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

  useEffect(() => {
    if (secondCardRef.current) {
      setSecondCardWidth(secondCardRef.current.offsetWidth);
    }
  }, [secondCardRef]);

  return (
    <div>
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
                //   onClick={() => setSecondState(false)}
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
    </div>
  );
};

export default MovingCard;
