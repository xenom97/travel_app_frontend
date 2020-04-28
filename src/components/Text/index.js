import styled, { css } from "styled-components";

const Text = styled.p((props) => {
  const textColor = props.primary ? props.theme.primary : props.color;
  return {
    fontSize: props.size + "px" || "12px",
    color: textColor || "#000",
    margin: 3,
    fontWeight: props.bold ? "bold" : null,
    textAlign: props.align,
    textTransform: props.uppercase ? "uppercase" : null,
  };
});

export default Text;
