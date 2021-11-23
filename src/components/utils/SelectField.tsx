import React, {InputHTMLAttributes} from 'react';
import { Field, useField } from 'formik';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import styles from '../lib/Datepicker/datepicker.module.css'

export interface IOption {
  text: string;
  value: string;
}

type SelectFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  options: Array<IOption>;
  name: string;
};

export const SelectField: React.FC<SelectFieldProps> = ({ size: _, ...props }) => {
  const [field, {error}] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <Field className={styles.trigger}
        {...field}
        {...props}
        id={field.name}
        as="select"
      >
        {props.options.map((item) => (
              <option className={styles.item} key={item.text} value={item.value}>{item.text}</option>
        ))}
      </Field>
      {error ? <FormErrorMessage className={styles.error}>{error}</FormErrorMessage> : null}
    </FormControl>

  );
};
