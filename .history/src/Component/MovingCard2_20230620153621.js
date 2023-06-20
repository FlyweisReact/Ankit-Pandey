/** @format */

import { useRef, useState, useEffect, useContext } from "react";
import Draggable from "react-draggable";
import { Card, Table } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { MyContext } from "../Homepage/MyContext";
import { HistoricalModal } from "../Modal/GetOrder";

const MovingCard2 = () => {
  const { myState, setMyState, secondTab, historicalData, Exchange, symbol } = useContext(MyContext);
  
  const [modalShow, setModalShow] = useState(false);
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
      
    </>
  );
};

export default MovingCard2;
