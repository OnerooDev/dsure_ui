import { FC } from "react";
import styles from "./hero.module.css";

import { Button } from "../../Button";
import { Container } from "../../Container";
import { HeroCovidIcon } from "../../Icons";

export const Hero: FC = () => (
  <Container>
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src="/assets/img/hero.png" alt="" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.covid}>
          <HeroCovidIcon />
        </div>
        <div className={styles.contentWrapper}>
          <span className={styles.subTitle}>
            Stake your stablecoins
          </span>
          <h1 className={styles.title}>
            Get worldwide health insurance for a lifetime
          </h1>
          <Button label="Calculate prices" stretch/>
        </div>
      </div>
    </div>
  </Container>
);
