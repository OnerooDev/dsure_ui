import React, {InputHTMLAttributes} from 'react';
import { FormControl, FormLabel, Select } from '@chakra-ui/react';

type SelectFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  list: Array<string>;
};

export const SelectField: React.FC<SelectFieldProps> = ({ name, label, list }) => {

  return (
    <FormControl
      id={name}
      isRequired
    >
      <FormLabel>{label}</FormLabel>
      <Select
        id={name}
        placeholder="Select your country..."
      >
      {list.map((val, i) => {
        return (
          <option key={i} value={val}>
            {val}
          </option>
        );
      })}
      </Select>
    </FormControl>

  );
};
