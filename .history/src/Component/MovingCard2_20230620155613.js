/** @format */

import { useRef, useState, useEffect, useContext } from "react";
import Draggable from "react-draggable";
import { Card, Table } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { MyContext } from "../Homepage/MyContext";
import { HistoricalModal } from "../Modal/GetOrder";

const MovingCard2 = () => {
  const { setMyState, historicalData , gridContRef } = useContext(MyContext);
  const [modalShow, setModalShow] = useState(false);

  const { setSecondState } = useContext(MyContext);
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
    <>
      <HistoricalModal show={modalShow} onHide={() => setModalShow(false)} />
  
        <Draggable
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={position}
        bounds={bounds} 
        >
          <div ref={secondCardRef} className="handle">
            <Card className="clear">
              <Card.Body>
                <i
                  className="fa-solid fa-x"
                  onClick={() => setMyState(false)}
                ></i>

                <div
                  className="filterDiv "
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
          </div>
        </Draggable>
   
    </>
  );
};

export default MovingCard2;
