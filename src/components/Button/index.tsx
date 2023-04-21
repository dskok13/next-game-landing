import React, { CSSProperties, FC } from "react";
import styles from "styles/Button.module.css";

type ButtonProps = {
  onClick: () => void;
  children: string;
  bgColor: string;
  color: string;
  width: string;
  height: string;
};

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  color,
  width,
  height,
  bgColor,
}) => {
  const specificStyle = {
    "--button-color": bgColor,
    "--font-color": color,
    "--width": `${width}px`,
    "--height": `${height}px`,
  } as CSSProperties;

  return (
    <button className={styles.button} onClick={onClick} style={specificStyle}>
      {children}
    </button>
  );
};

export default Button;
