// Button.tsx
import { buttonStyle } from "./Button.css";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className={buttonStyle}>{children}</button>;
};
