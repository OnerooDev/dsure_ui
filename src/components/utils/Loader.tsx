import React, {InputHTMLAttributes} from 'react';
import { Spinner } from '@chakra-ui/react';
import { Container } from '../lib/Container';
import styles from "../lib/Forms/form.module.css";

type LoaderProps = InputHTMLAttributes<HTMLInputElement> & {
};

export const Loader: React.FC<LoaderProps> = () => {
  return (
    <Container>
    <div className={styles.container}>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='#8BA4AC'
        color='#50EFF5'
        size='xl'
      />
    </div>
    </Container>
  );
};
