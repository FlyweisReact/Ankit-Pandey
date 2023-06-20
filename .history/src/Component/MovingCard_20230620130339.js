import Draggable from "react-draggable";


const MovingCard = () => {

    const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [homeSDimensions, setHomeSDimensions] = useState({
    width: 0,
    height: 0,
  });
  const secondCardRef = useRef(null);
  const [secondCardWidth, setSecondCardWidth] = useState(0);


  return (
    <div>MovingCard</div>
  )
}

export default MovingCard