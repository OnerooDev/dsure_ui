import {Link} from '@chakra-ui/react';
import { Header } from './Header';
import NextLink from 'next/link';
import { Container } from '../lib/Container';
import styles from "../lib/Forms/form.module.css";
import { Steps } from "./MainPage/Steps";
export const MainPage = (
  <>
    <Header />
    <br />
    <Container>
    <div className={styles.container}>
      <Steps />
    </div>
    </Container>
  </>
)
