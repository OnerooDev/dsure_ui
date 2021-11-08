import { FC } from "react";

import classnames from "classnames";
import styles from "./description.module.css";

export interface DescriptionProps {
  desktopSmall?: boolean;
  mobileLarge?: boolean;
  alignLeft?: boolean;
}

export const Description: FC<DescriptionProps> = ({
  children,
  desktopSmall,
  mobileLarge,
  alignLeft,
}) => (
  <p className={classnames(styles.container, {
    [styles.desktopSmall]: desktopSmall,
    [styles.alignLeft]: alignLeft,
    [styles.mobileLarge]: mobileLarge,
  })}
  >
    {children}
  </p>
);
