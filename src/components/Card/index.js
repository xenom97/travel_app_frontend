import React from "react";
import styled, { css } from "styled-components";

const Card = (props) => {
  if (props.header) {
    return (
      <StyledCard {...props} noPadding>
        <img height="100%" width="100%" src={props.header} />
        {props.children}
      </StyledCard>
    );
  }

  return <StyledCard {...props} />;
};

const StyledCard = styled.div`
  background: ${(props) => (props.theme.mode === "light" ? "#fff" : "#0a0a0a")};
  border-radius: 5px;
  padding: ${(props) => (props.noPadding ? "0" : "10px")};
  transition: 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  ${(props) =>
    css`
      width: ${props.width}px;
      justify-content: ${props.center ? "center" : null};
      align-items: ${props.center ? "center" : null};
    `};
`;

export default Card;
