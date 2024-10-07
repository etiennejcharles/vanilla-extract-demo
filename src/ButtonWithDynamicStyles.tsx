// Button.tsx
import {
  primaryStyle,
  buttonPaddingVar,
  buttonColorVar,
  secondaryStyle,
} from "./ButtonWithDynamicStyles.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

type ButtonProps = {
  padding?: string;
  color?: string;
  children: React.ReactNode;
  variant: "primary" | "secondary";
};
export const ButtonWithDynamicStyles: React.FC<ButtonProps> = ({
  padding = "10px 20px",
  color = "white",
  children,
  variant,
}) => {
  return (
    <button
      className={variant === "secondary" ? secondaryStyle : primaryStyle}
      style={assignInlineVars({
        [buttonPaddingVar]: padding,
        [buttonColorVar]: color,
      })}
    >
      {children}
    </button>
  );
};
