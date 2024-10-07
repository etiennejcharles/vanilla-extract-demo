import { createVar, style } from "@vanilla-extract/css";

export const buttonPaddingVar = createVar();
export const buttonColorVar = createVar();

const buttonBaseStyle = style({
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  padding: buttonPaddingVar,
});

export const primaryStyle = style([
  buttonBaseStyle,
  {
    backgroundColor: buttonColorVar,
  },
]);

export const secondaryStyle = style([
  primaryStyle,
  {
    backgroundColor: "gray",
    color: "black",
  },
]);
