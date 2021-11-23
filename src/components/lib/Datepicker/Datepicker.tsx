import { FC } from "react";

import classnames from "classnames";
import styles from "./datepicker.module.css";
import { daysList, monthList, yearList } from './data';
import { SelectField } from '../../utils/SelectField';

export interface IOption {
  text: string;
  value: string;
}

export type DatepickerProps = {
  label: string;
}

export const Datepicker: FC<DatepickerProps> = ({ label }) => {

  return (
    <div
      className={classnames(styles.container)}
    >
      <span className={styles.label}>
        {label}
      </span>
      <div className={styles.content}>
        <SelectField options={daysList} name="day" />
      </div>
      <div className={styles.content}>
        <SelectField options={monthList} name="month" />
      </div>
      <div className={styles.content}>
        <SelectField options={yearList} name="year" />
      </div>
    </div>
  );
};
