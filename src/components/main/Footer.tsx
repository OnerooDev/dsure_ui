import { FC } from "react";

import styles from "./styles/footer.module.css";
import { Container } from "../lib/Container";
import { LogoIcon } from "../lib/Icons";

export const Footer: FC = () => (
  <footer className={styles.container}>
    <Container flexSb alignCenter>
      <div className={styles.logoContainer}>
        <LogoIcon />
        <span className={styles.description}>
          Because you deserve a healthy and peaceful life.
        </span>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="/#" className={styles.link}>
            How it works
          </a>
        </li>
        <li className={styles.item}>
          <a href="/#" className={styles.link}>
            Plans
          </a>
        </li>
        <li className={styles.item}>
          <a href="/#" className={styles.link}>
            FAQ
          </a>
        </li>
      </ul>
    </Container>
  </footer>
);
