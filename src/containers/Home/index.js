import { useState, useEffect } from "react";
import { Container, Header, Section, CardsZone } from "./HomeStyle";

import Card from "../../components/Card";
import { images } from "../../Data/DataImg";
import Sidebar from "../../components/Sidebar";

function Home() {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const [disableCards, setDisableCards] = useState([]);
  const [unflippedCards, setUnflippedCards] = useState([]);

  const [tries, setTries] = useState(0);
  const [score, setScore] = useState(0);

  const scoreMatch = () => {
    setScore(score + 1);
  };
  const scoreTries = () => {
    setTries(tries + 1);
  };

  const handleClickButton = () => {
    setTries(0);
    setScore(0);
    shuffleArray(images);
    setCards(images);
    resetCard();
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };
  useEffect(() => {
    shuffleArray(images);
    setCards(images);
  }, []);

  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    } else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  };

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;

      match ? disableCard() : unflippedCard();
    }
  };

  useEffect(() => {
    checkForMatch();
  }, [secondCard]);

  const disableCard = () => {
    setDisableCards([firstCard.number, secondCard.number]);
    resetCard();
    scoreMatch();
  };

  const unflippedCard = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCard();
    scoreTries();
  };

  const resetCard = () => {
    setFirstCard({});
    setSecondCard({});
  };

  return (
    <Container>
      <>
        <Header>
          <h1>Find the pairs</h1>
        </Header>
        <Section>
          <CardsZone>
            {cards.map((card, index) => (
              <Card
                name={card.club}
                number={index}
                front={card.src}
                flipCard={flipCard}
                unflippedCards={unflippedCards}
                disableCards={disableCards}
              />
            ))}
          </CardsZone>
          <Sidebar
            tries={tries}
            score={score}
            handleClickButton={handleClickButton}
          />
        </Section>
      </>
    </Container>
  );
}

export default Home;
