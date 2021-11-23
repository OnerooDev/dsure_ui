import { FC } from "react";

import classnames from "classnames";
import styles from "./dropdown.module.css";
import { SelectField } from '../../utils/SelectField';

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
        <SelectField className={styles.trigger} name={name} options={options}/>
      </div>
    </div>
  );
};
