import { useState, useEffect } from "react";
import { Container, Front, CardBack, CardFront } from "./CardStyle";
import ReactCardFlip from "react-card-flip";
const Card = ({
  name,
  number,
  front,
  flipCard,
  unflippedCards,
  disableCards,
  secondCard,
  action,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (unflippedCards.includes(number)) {
      setTimeout(() => setIsFlipped(false), 700);
    }
  }, [unflippedCards]);

  const handleClickCard = (e) => {
    const v = flipCard(name, number);
    if (v !== 0) {
      setIsFlipped(!isFlipped);
    }
  };

  const backCardData = {
    text: "?",
  };

  return (
    <Container>
      <ReactCardFlip isFlipped={isFlipped}>
        <CardBack onClick={handleClickCard}>
          <span>{backCardData.text}</span>
        </CardBack>

        <CardFront onClick={handleClickCard}>
          <Front src={front} />
        </CardFront>
      </ReactCardFlip>
    </Container>
  );
};

export default Card;
