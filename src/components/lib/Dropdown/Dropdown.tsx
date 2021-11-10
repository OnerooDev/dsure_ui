import { FC } from "react";

import classnames from "classnames";
import styles from "./dropdown.module.css";
import { Field } from 'formik';

export interface IOption {
  text: string;
  value: string;
}

export type DropdownProps = {
  label: string;
  options: Array<IOption>;
  name: string;
  // eslint-disable-next-line no-unused-vars
  onSelect?: (option: IOption) => void;
}

export const Dropdown: FC<DropdownProps> = ({ label, options, name }) => {

  return (
    <div
      className={classnames(styles.container)}
    >
      <span className={styles.label}>
        {label}
      </span>
      <div className={styles.content}>
      <Field className={styles.trigger} as='select' id={name} name={name}>
            {options.map((item) => (
                  <option className={styles.item} key={item.text} value={item.value}>{item.text}</option>
            ))}
      </Field>
      </div>
    </div>
  );
};
