import { FC, ReactNode } from "react";

import styles from "./step-item.module.css";

export type StepItemProps = {
  icon: ReactNode;
  description: string;
};

export const StepItem: FC<StepItemProps> = ({ icon, description }) => (
  <li className={styles.container}>
    <div className={styles.icon}>
      {icon}
    </div>
    <p className={styles.description}>
      {description}
    </p>
  </li>
);
