import { ChangeEvent, FC, useState } from "react";

import styles from "./input.module.css";

export type InputProps = {
  label: string;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
}

export const Input: FC<InputProps> = ({
  label,
  value,
  error,
  onChange,
  onBlur,
}) => {
  const [currentValue, setCurrentValue] = useState<string>(value || "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={styles.container}>
      <span className={styles.label}>
        {label}
      </span>
      <input
        type="text"
        className={styles.input}
        value={currentValue}
        onChange={handleChange}
        onBlur={({ target }) => onBlur && onBlur(target.value)}
        autoComplete="off"
      />
      {error && (
        <span className={styles.error}>
          {error}
        </span>
      )}
    </label>
  );
};
