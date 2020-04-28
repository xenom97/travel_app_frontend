import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Text from "../Text";

const Input = (props) => {
  return (
    <div>
      <ContainerInput error={props.error}>
        <FontAwesomeIcon icon={props.icon} color="#eee" />
        <StyledInput {...props} />
      </ContainerInput>
      <Text color="red" size="11" align="right" bold uppercase>
        {props.errorText}
      </Text>
    </div>
  );
};

const ContainerInput = styled.div`
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-around;
  max-width: 250px;
  align-items: center;
  transition: 0.5s;
  background: ${(props) => props.theme.hoverPrimary};

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  ${(props) =>
    props.error &&
    css`
      background: red;
    `};
`;

const StyledInput = styled.input`
  color: #fff;
  border: none;
  padding: 0.75em 1em;
  outline: none;
  margin-left: 5px;
  border-radius: 5px;
  background: ${(props) => props.theme.hoverPrimary};

  ${(props) =>
    props.error &&
    css`
      background: red;
    `};

  ::placeholder {
    color: #fff;
  }
`;

export default Input;
