import { useRef , useState } from "react";
import Draggable from "react-draggable";


const MovingCard = () => {

    const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [homeSDimensions, setHomeSDimensions] = useState({
    width: 0,
    height: 0,
  });

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


  return (
    <div>MovingCard</div>
  )
}

export default MovingCard