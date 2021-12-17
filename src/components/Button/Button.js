import React from "react";
import { Container, BtnSection } from "./ButtonStyle";
function Button({ handleClickButton }) {
  const buttonData = {
    textBtn: "Restart",
  };
  return (
    <Container>
      <BtnSection onClick={handleClickButton}>
        <span>{buttonData.textBtn}</span>
      </BtnSection>
    </Container>
  );
}

export default Button;
