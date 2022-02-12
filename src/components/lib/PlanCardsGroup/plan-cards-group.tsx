import { FC } from "react";

import styles from "./plan-cards-group.module.css";
import { PlanCard } from "../PlanCard";

export const basicItems: Array<string> = [
  "Hospitalization",
  "Emergency help",
  "Up to $50,000",
  "153 countries",
  "Lifetime",
];

export const advancedItems: Array<string> = [
  "Hospitalization",
  "Emergency help",
  "Ambulant treatment",
  "Up to $200,000",
  "153 countries",
  "Lifetime",
];

export type PlanCardsGroupProps = {
  onSubmit: (plan: string) => void;
  loading: boolean;
  BasText: string;
  AdvText: string;
  err_mesg?: string;
};

export const PlanCardsGroup: FC<PlanCardsGroupProps> = ({ onSubmit, loading, BasText, AdvText, err_mesg }) => (
  <div className={styles.container}>
    <PlanCard
      title="Basic"
      price="9,750 USDT"
      items={basicItems}
      submitText={BasText}
      loading={loading}
      onSubmit={() => onSubmit("basic")}
      err_mesg={err_mesg}
    />
    <PlanCard
      title="Advanced"
      price="13,950 USDT"
      items={advancedItems}
      submitText={AdvText}
      loading={loading}
      onSubmit={() => onSubmit("advanced")}
      variant
      err_mesg={err_mesg}
    />
  </div>
);
