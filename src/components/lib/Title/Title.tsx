import { FC } from "react";

import styles from "./title.module.css";

export const Title: FC = ({ children }) => (
  <h3 className={styles.container}>
    {children}
  </h3>
);
