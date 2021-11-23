import {Link} from '@chakra-ui/react';
import { Header } from '../main/Header';
import NextLink from 'next/link';
import { Container } from '../lib/Container';
import styles from "../lib/Forms/form.module.css";

export const MainPage = (
  <>
    <Header />
    <br />
    <Container>
    <div className={styles.container}>
      <NextLink href="/admin/requestsCert" >
        <Link>Requests list</Link>
      </NextLink>
    </div>
    <div className={styles.container}>
      <NextLink href="/admin/addCert">
        <Link>Add cert</Link>
      </NextLink>
    </div>
    </Container>
  </>
)
