import React, {InputHTMLAttributes} from 'react';
import { Dropdown } from '../lib/Dropdown';
import { IOption } from '../lib/Dropdown/Dropdown';
import { Field } from 'formik';

type SelectFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  list: Array<IOption>;
};

export const SelectField: React.FC<SelectFieldProps> = ({ name, label, list }) => {

  return (
      <Dropdown label={label} options={list} name={name}/>
  );
};
