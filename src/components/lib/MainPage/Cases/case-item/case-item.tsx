import { FC, ReactNode } from "react";

import styles from "./case-item.module.css";

export type CaseItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const CaseItem: FC<CaseItemProps> = ({ icon, title, description }) => (
  <li className={styles.container}>
    <div className={styles.icon}>
      {icon}
    </div>
    <h4 className={styles.title}>
      {title}
    </h4>
    <p className={styles.description}>
      {description}
    </p>
  </li>
);
