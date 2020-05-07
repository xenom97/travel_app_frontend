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
  \ &:hover {
    background: ${(props) => props.theme.hoverPrimary};
    // box-shadow: 2px 2px 1px 1px #ddd;
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
