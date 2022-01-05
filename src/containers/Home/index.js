import { useState, useEffect } from "react";
import { Container, Header, Section, CardsZone } from "./HomeStyle";

import Card from "../../components/Card";
import { getImages } from "../../Data/DataImg";
import Sidebar from "../../components/Sidebar";

function Home() {
  const [cards, setCards] = useState([]);
  // const [firstCard, setFirstCard] = useState({});
  // const [secondCard, setSecondCard] = useState({});
  //
  // const [disableCards, setDisableCards] = useState([]);
  // const [unflippedCards, setUnflippedCards] = useState([]);

  const [tries, setTries] = useState(0);
  const [score, setScore] = useState(0);
  const [turn, setTurn] = useState([]);
  const [matches, setMatches] = useState([]);

  const scoreMatch = () => {
    setScore(score + 1);
  };
  const scoreTries = () => {
    setTries(tries + 1);
  };

  const resetGame = () => {
    setTries(0);
    setScore(0);
    shuffleArray(getImages(10));
    setCards(getImages(10));
    setTurn([]);
    setMatches([]);
    reset();
  };

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };
  useEffect(() => {
    shuffleArray(getImages(10));
    setCards(getImages(10));
    reset();
  }, []);

  const reset = () => {
    setTurn(getImages(10));
    setTimeout(() => {
      setTurn([]);
    }, 5000);
  };

  const flipCard = club => {
    //[]
    if (turn.length < 2) {
      setTurn([...turn, club]);
    }
    //turn  ["rca", "wac"]
  };

  useEffect(() => {
    if (turn.length === 2) {
      scoreTries();
      setTimeout(() => {
        if (turn[0].club === turn[1].club) {
          scoreMatch();
          setMatches([...matches, turn[0].club]);
        }
        setTurn([]);
      }, 1000);
    }
  }, [turn]);

  // const flipCard = (name, number) => {
  //   if (firstCard.name === name && firstCard.number === number) {
  //     return 0;
  //   }
  //   if (!firstCard.name) {
  //     setFirstCard({ name, number });
  //   } else if (!secondCard.name) {
  //     setSecondCard({ name, number });
  //   }
  //   return 1;
  // };
  //
  // const checkForMatch = () => {
  //   if (firstCard.name && secondCard.name) {
  //     const match = firstCard.name === secondCard.name;
  //
  //     match ? disableCard() : unflippedCard();
  //   }
  // };
  //
  // useEffect(() => {
  //   checkForMatch();
  // }, [secondCard]);
  //
  // const disableCard = () => {
  //   setDisableCards([firstCard.number, secondCard.number]);
  //   resetCard();
  //   scoreMatch();
  // };
  //
  // const unflippedCard = () => {
  //   setUnflippedCards([firstCard.number, secondCard.number]);
  //   resetCard();
  //   scoreTries();
  // };
  //
  // const resetCard = () => {
  //   setFirstCard({});
  //   setSecondCard({});
  // };

  const isFlipped = card => {
    return turn.find(c => c.id === card.id) ? true : false;
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
                key={card.id}
                front={card.src}
                flipCard={() => {
                  flipCard(card);
                }}
                isFlipped={isFlipped(card)}
                matched={matches.includes(card.club)}
              />
            ))}
          </CardsZone>
          <Sidebar tries={tries} score={score} resetGame={resetGame} />
        </Section>
      </>
    </Container>
  );
}

export default Home;
