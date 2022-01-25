import { FC } from "react";

import styles from "./steps.module.css";
import { StepItem, StepItemProps } from "../../../lib/MainPage/StepItem";
import { StepsDepositIcon, StepsGetInsuranceIcon, StepsSelectIcon } from "../../../lib/Icons/steps";

const stepItems: Array<StepItemProps> = [
  {
    icon: <StepsSelectIcon />,
    description: "Select your country and insurance properties",
  },
  {
    icon: <StepsDepositIcon />,
    description: "Deposit stablecoins into a smart contract",
  },
  {
    icon: <StepsGetInsuranceIcon />,
    description: "Get a health insurance from best providers",
  },
];

export const Steps: FC = () => (
  <ul className={styles.container}>
    {stepItems.map((item) => (
      <StepItem
        key={item.description}
        icon={item.icon}
        description={item.description}
      />
    ))}
  </ul>
);
