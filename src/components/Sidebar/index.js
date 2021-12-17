import React from "react";
import {
  SidebarContainer,
  Option,
  OptionContainer,
  Title,
  BtnBox,
  SelectOptionBox,
  TextBox,
  SelectBox,
  Score,
  ScoreContainer,
  ScoreTitle,
  ScoreRating,
  BoxNumberLeft,
  BoxCenter,
  BoxNumberRight,
  TriesBox,
  TriesBoxNumber,
  TriesBoxText,
} from "./SidebarStyle";
import Button from "../Button/Button";
import Select from "../Select/Select";

function Sidebar({ tries, score, handleClickButton }) {
  const optionData = {
    title: "Option",
    text: "Size",
  };
  const scoreData = {
    scoreTitle: "Score",
    scoreBox: "/",
    scorenumberRight: 10,
    triesText: "Tries: ",
  };

  return (
    <SidebarContainer>
      <Score>
        <ScoreContainer>
          <ScoreTitle>
            <h1>{scoreData.scoreTitle}</h1>
          </ScoreTitle>
          <ScoreRating>
            <BoxNumberLeft>{score}</BoxNumberLeft>
            <BoxCenter>{scoreData.scoreBox}</BoxCenter>
            <BoxNumberRight>{scoreData.scorenumberRight}</BoxNumberRight>
          </ScoreRating>
          <TriesBox>
            <TriesBoxText>{scoreData.triesText}</TriesBoxText>
            <TriesBoxNumber>{tries}</TriesBoxNumber>
          </TriesBox>
        </ScoreContainer>
      </Score>

      <Option>
        <OptionContainer>
          <Title>
            <h1>{optionData.title}</h1>
          </Title>
          <SelectOptionBox>
            <TextBox>
              <p>{optionData.text}</p>
            </TextBox>
            <SelectBox>
              <Select />
            </SelectBox>
          </SelectOptionBox>
          <BtnBox>
            <Button handleClickButton={handleClickButton} />
          </BtnBox>
        </OptionContainer>
      </Option>
    </SidebarContainer>
  );
}

export default Sidebar;
