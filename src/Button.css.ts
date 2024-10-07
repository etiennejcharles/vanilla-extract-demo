// styles/Button.css.ts
import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  padding: "12px 24px",
  backgroundColor: "blue",
  color: "white",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "darkblue",
  },
});
