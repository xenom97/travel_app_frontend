import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 10px;
  color: ${(props) => props.theme.primary};
  padding: 0.75em 1em;
  border: ${(props) => "1px solid " + props.theme.primary};
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
  outline: none;

  &:hover {
    background: ${(props) => props.theme.hoverPrimary};
  }

  ${(props) =>
    props.primary &&
    css`
      background: ${props.theme.primary};
      color: white;
      border: none;
    `};
`;

export default Button;
