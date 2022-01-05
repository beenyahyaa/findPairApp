import React from "react";
import { Container, BtnSection } from "./ButtonStyle";
function Button({ onClick }) {
  const buttonData = {
    textBtn: "Restart"
  };
  return (
    <Container>
      <BtnSection onClick={onClick}>
        <span>{buttonData.textBtn}</span>
      </BtnSection>
    </Container>
  );
}

export default Button;
