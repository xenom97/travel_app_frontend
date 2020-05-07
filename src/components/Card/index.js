import React from "react";
import styled, { css } from "styled-components";
import Text from "../Text";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  if (props.header) {
    return (
      <StyledCard {...props} noPadding>
        <img height="100%" width="100%" src={props.header} alt="Card Header" />
        {props.children}
      </StyledCard>
    );
  }

  if (props.title) {
    return (
      <StyledCard {...props}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text uppercase size="18">
            {props.title}
          </Text>
          {props.action ? (
            <Button onClick={props.action.onPress} primary>
              <FontAwesomeIcon color="#fff" icon={props.action.icon} />
              {props.action.title}
            </Button>
          ) : null}
        </div>
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
