import React, {InputHTMLAttributes} from 'react';
import { useField } from 'formik';
import { FormControl, Input, FormErrorMessage } from '@chakra-ui/react';
import styles from '../lib/Input/input.module.css'
type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export const InputField: React.FC<InputFieldProps> = ({ label, size: _, ...props }) => {
  const [field, {error}] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <span className={styles.label}>
      {label}
      </span>

      <Input
        {...field}
        {...props}
        id={field.name}
        className={styles.input}
      />
      {error ? <FormErrorMessage className={styles.error}>{error}</FormErrorMessage> : null}
    </FormControl>

  );
};
