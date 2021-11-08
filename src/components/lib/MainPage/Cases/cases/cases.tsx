import { FC } from "react";

import styles from "./cases.module.css";
import {
  FifthCaseIcon,
  FirstCaseIcon,
  FourthCaseIcon,
  SecondCaseIcon, SixthCaseIcon,
  ThirdCaseIcon,
} from "../../../Icons/cases";
import { CaseItem, CaseItemProps } from "../case-item";

const caseItems: Array<CaseItemProps> = [
  {
    icon: <FirstCaseIcon />,
    title: "Planned or emergency",
    description: "You can use :Dsure for any medical case you might have. Any planned medical services are included in your package.",
  },
  {
    icon: <SecondCaseIcon />,
    title: "153+ countries",
    description: "We know you love to travel. Our insurance work in all major tourist destinations. ",
  },
  {
    icon: <ThirdCaseIcon />,
    title: "Quality matters",
    description: "Careful selection and quality assurance on every step. You will love our medical service providers.",
  },
  {
    icon: <FourthCaseIcon />,
    title: "Dentals included",
    description: "Yes, they are. We don’t have any hidden limits for medical service types. We have everything you need.",
  },
  {
    icon: <FifthCaseIcon />,
    title: "Travel visa compatible",
    description: "We know you open visas often. :Dsure will help prepare needed documents.",
  },
  {
    icon: <SixthCaseIcon />,
    title: "Fast reimbursements",
    description: "Send us needed documents and receive funds on your personal account.",
  },
];

export const Cases: FC = () => (
  <ul className={styles.container}>
    {caseItems.map((item) => (
      <CaseItem
        key={item.title}
        icon={item.icon}
        title={item.title}
        description={item.description}
      />
    ))}
  </ul>
);
