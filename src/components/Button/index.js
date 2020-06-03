import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 5px;
  color: ${(props) => props.fontColor || props.theme.primary};
  padding: 0.75em 1em;
  border: ${(props) => "1px solid " + props.theme.primary};
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
  outline: none;
  width: ${(props) => props.width || null};
  height: ${(props) => props.height || null};

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

  ${(props) =>
    props.success &&
    css`
      background: ${props.theme.success};
      color: white;
      border: none;
    `};

  ${(props) =>
    props.danger &&
    css`
      background: ${props.theme.danger};
      color: white;
      border: none;
    `};

  ${(props) =>
    props.warning &&
    css`
      background: ${props.theme.warning};
      color: white;
      border: none;
    `};
`;

export default Button;
