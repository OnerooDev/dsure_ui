import { FC } from "react";

import styles from "./certificate.module.css";
import {Button} from '../Button';

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
  onSubmit?: any;
  isSubmitting?: boolean;
  btn_label: string;
  timeout?: number;
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
  onSubmit,
  isSubmitting,
  btn_label,
  timeout
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
            Certificate №
          </span>
          <div className={styles.itemDescriptionWrapper}>
            <span className={styles.itemDescriptionTitle}>
              {cert_number}
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
                {timeout <= 0 ? (
                  <span className={styles.itemDescriptionContent}>
                    Waiting for withdraw...
                  </span>
                ) : (
                  <span className={styles.itemDescriptionContent}>
                    Waiting for unlock... {timeout} min
                  </span>
                )}
                <ClockCircleIcon />
              </>
            )}
          </div>
        </div>
      </li>
      <span className={styles.title}>
      <Button label={btn_label} stretch onClick={onSubmit} disabled={isSubmitting} />
      </span>
    </ul>
  </div>
);
