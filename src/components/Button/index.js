import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 10px;
  color: #078d96;
  margin: 0 1em;
  padding: 0.5em 1em;
  border: 1px solid #078d96;
  text-transform: uppercase;

  ${(props) =>
    props.primary &&
    css`
      background: #078d96;
      color: white;
    `};
`;

export default Button;
