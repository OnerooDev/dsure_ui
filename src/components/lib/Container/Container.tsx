import { FC } from "react";

import classnames from "classnames";
import styles from "./container.module.css";

type ContainerProps = {
  flexSb?: boolean;
  alignCenter?: boolean;
}

export const Container: FC<ContainerProps> = ({ children, flexSb, alignCenter }) => (
  <div className={classnames(styles.container, {
    [styles.flexSb]: flexSb,
    [styles.alignCenter]: alignCenter,
  })}
  >
    {children}
  </div>
);
