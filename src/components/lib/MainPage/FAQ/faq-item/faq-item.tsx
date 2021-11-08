import { FC, useState } from "react";

import classnames from "classnames";
import styles from "./faq-item.module.css";
import { SmallArrowIcon } from "../../../Icons";

export type FaqItemProps = {
  title: string;
  description: string;
};

export const FaqItem: FC<FaqItemProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSwitchOpenedState = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <li className={classnames(styles.container, {
      [styles.containerOpened]: isOpen,
    })}
    >
      <button
        type="button"
        onClick={handleSwitchOpenedState}
        className={styles.header}
      >
        <span className={styles.title}>
          {title}
        </span>
        <SmallArrowIcon />
      </button>
      {isOpen && (
        <span className={styles.description}>
          {description}
        </span>
      )}
    </li>
  );
};
