import { useState, useEffect } from "react";
import { Container, Front, CardBack, CardFront, CardPlace } from "./CardStyle";
import ReactCardFlip from "react-card-flip";

const backCardData = {
  text: "?"
};

const Card = ({
  isFlipped,
  front,
  matched,
  flipCard
  // number,
  // unflippedCards,
  // disableCards,
  // secondCard,
  // action
}) => {
  // const [isFlipped, setIsFlipped] = useState(false);
  //
  // useEffect(() => {
  //   if (unflippedCards.includes(number)) {
  //     setTimeout(() => setIsFlipped(false), 700);
  //   }
  // }, [unflippedCards]);
  //
  // const handleClickCard = e => {
  //   const v = flipCard(name, number);
  //   if (v !== 0) {
  //     setIsFlipped(!isFlipped);
  //   }
  // };

  return (
    <Container>
      {matched ? (
        <CardPlace />
      ) : (
        <ReactCardFlip isFlipped={isFlipped}>
          <CardBack onClick={flipCard}>
            <span>{backCardData.text}</span>
          </CardBack>

          <CardFront onClick={flipCard}>
            <Front src={front} />
          </CardFront>
        </ReactCardFlip>
      )}
    </Container>
  );
};

export default Card;
