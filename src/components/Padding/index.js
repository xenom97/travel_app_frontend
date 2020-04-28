import styled, { css } from "styled-components";

const Padding = styled.div`
  ${(props) =>
    css`
      padding-top: ${props.top ? props.top + "px" : "10px"};
      padding-left: ${props.left ? props.left + "px" : "10px"};
      padding-bottom: ${props.bottom ? props.bottom + "px" : "10px"};
      padding-right: ${props.right ? props.right + "px" : "10px"};
    `};
`;

export default Padding;
