import { FC } from "react";

import classnames from "classnames";
import styles from "./plan-card.module.css";
import { SmallArrowIcon } from "../Icons";
import { Button } from "../Button";

export type PlanCardProps = {
  title: string;
  price: string;
  items: Array<string>;
  variant?: boolean;
  err_mesg?: string;
  submitText?: string;
  loading: boolean;
  onSubmit: () => void;
};

export const PlanCard: FC<PlanCardProps> = ({
  title,
  price,
  items,
  submitText = "Select plan",
  variant,
  loading,
  onSubmit,
  err_mesg,
}) => (
  <div className={classnames(styles.container, {
    [styles.variant]: variant,
  })}
  >
    <div>
      <div className={styles.header}>
        <span className={styles.title}>
          {title}
        </span>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>
            {price}
          </span>
          <SmallArrowIcon />
        </div>
      </div>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <Button label={submitText} onClick={onSubmit} disabled={loading} />
    {err_mesg ? (
      <span className={styles.title}>
        {err_mesg}
      </span>
    ) : ( null )
    }
  </div>
);
