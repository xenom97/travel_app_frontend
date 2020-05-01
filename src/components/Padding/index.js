import styled, { css } from "styled-components";

const Padding = styled.div`
  ${(props) =>
    css`
      padding-top: ${props.top || props.top === 0 ? props.top + "px" : "10px"};
      padding-left: ${props.left || props.left === 0
        ? props.left + "px"
        : "10px"};
      padding-bottom: ${props.bottom || props.bottom === 0
        ? props.bottom + "px"
        : "10px"};
      padding-right: ${props.right || props.right === 0
        ? props.right + "px"
        : "10px"};
    `};
`;

export default Padding;
