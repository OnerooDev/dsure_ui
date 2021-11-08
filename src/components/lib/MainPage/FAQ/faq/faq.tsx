import { FC } from "react";

import styles from "./faq.module.css";
import { FaqItem } from "../faq-item";

export type Item = {
  title: string;
  description: string;
}

export type FaqProps = {
  items: Array<Item>;
};

export const Faq: FC<FaqProps> = ({ items }) => (
  <ul className={styles.container}>
    {items.map((item, index) => (
      // eslint-disable-next-line react/no-array-index.ts-key
      <FaqItem key={`${item.description}-${index}`} title={item.title} description={item.description} />
    ))}
  </ul>
);
