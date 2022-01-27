import {Link} from '@chakra-ui/react';
import { Sidebar } from './MainPage/Sidebar';
import NextLink from 'next/link';
import { Container } from '../lib/Container';
import styles from "../lib/Forms/form.module.css";
import { Steps } from "./MainPage/Steps";
export const MainPage = (
  <>
    <Sidebar />
    <br />
    <Container>
    <div className={styles.container}>
      <Steps />
    </div>
    </Container>
  </>
)
