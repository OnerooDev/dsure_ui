import { FC } from "react";

import styles from "./certificate.module.css";

import {
  CheckCircleIcon,
  ClockCircleIcon,
  InfoCircleIcon,
  ProtectedIcon,
} from "../Icons";

export type CertificateProps = {
  status: "active" | "wait";
  deposit_status: "active" | "wait";
  activeTill?: string;
  cert_activeTill?: string;
  cert_number?: string;
  staked: string;
  plan: string;
  items: Array<string>;
};

export const Certificate: FC<CertificateProps> = ({
  status,
  deposit_status,
  activeTill,
  cert_activeTill,
  cert_number,
  staked,
  plan,
  items,
}) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <span className={styles.title}>
        Certificate of Insurance
      </span>
      <ProtectedIcon />
    </div>
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.itemTitle}>
          Plan
        </span>
        <div className={styles.itemDescriptionWrapper}>
          <span className={styles.itemDescriptionTitle}>
            {plan}
          </span>
          <InfoCircleIcon />
        </div>
      </li>
      <li className={styles.item}>
        <span className={styles.itemTitle}>
          Status
        </span>
        <div className={styles.itemDescriptionWrapper}>
          {status === "active" ? (
            <>
              <div className={styles.itemDescriptionContentWrapper}>
                <span className={styles.itemDescriptionTitle}>
                  Active
                </span>
                {cert_activeTill && (
                  <span className={styles.itemDescriptionContent}>
                    till
                    {" "}
                    {cert_activeTill}
                  </span>
                )}
              </div>
              <CheckCircleIcon />
            </>
          ) : (
            <>
              <span className={styles.itemDescriptionContent}>
                Waiting for Certificate...
              </span>
              <ClockCircleIcon />
            </>
          )}
        </div>
      </li>
      {status === "active" ? (
        <>
        <li className={styles.item}>
          <span className={styles.itemTitle}>
            Certificate № {cert_number}
          </span>
          <div className={styles.itemDescriptionWrapper}>
            <span className={styles.itemDescriptionTitle}>
              Active
            </span>
          </div>
        </li>
        </>
      ) : (
        <>

        </>
      )}
      <li className={styles.item}>
        <span className={styles.itemTitle}>
          Coverage
        </span>
        <div className={styles.itemDescriptionWrapper}>
          <ul className={styles.itemDescriptionList}>
            {items.map((item) => (
              <li key={item} className={styles.itemDescriptionItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </li>
      <li className={styles.item}>
        <span className={styles.itemTitle}>
          Staked
        </span>
        <div className={styles.itemDescriptionWrapper}>
          <div className={styles.itemDescriptionWrapper}>
            {deposit_status === "active" ? (
              <>
                <div className={styles.itemDescriptionContentWrapper}>
                  <span className={styles.itemDescriptionTitle}>
                    {staked}
                  </span>
                  {activeTill && (
                    <span className={styles.itemDescriptionContent}>
                      till
                      {" "}
                      {activeTill}
                    </span>
                  )}
                </div>
                <CheckCircleIcon />
              </>
            ) : (
              <>
                <span className={styles.itemDescriptionContent}>
                  Waiting for blockchain...
                </span>
                <ClockCircleIcon />
              </>
            )}
          </div>
        </div>
      </li>
    </ul>
  </div>
);
