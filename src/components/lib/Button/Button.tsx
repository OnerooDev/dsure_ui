/* eslint-disable react/button-has-type */
import { FC } from "react";
import classnames from "classnames";

import styles from "./button.module.css";

export type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  size?: "small" | "normal";
  center?: boolean;
  stretch?: boolean;
  type?: "button" | "submit" | "reset";
};

export const Button: FC<ButtonProps> = ({
  label,
  disabled,
  onClick,
  size,
  center,
  stretch,
  type = "button",
}) => (
  <button
    className={classnames(styles.button, {
      [styles.buttonSmall]: size === "small",
      [styles.center]: center,
      [styles.stretch]: stretch,
    })}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);
