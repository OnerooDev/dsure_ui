import { FC } from "react";

import classnames from "classnames";
import styles from "./metamask.module.css";

import { CircleLoadingIcon, MetamaskBigIcon } from "../Icons";
import { Button } from "../Button";
import { Description } from "../Description";
import { useEthers} from "@usedapp/core";

export type MetamaskProps = {
  state?: null | "connecting" | "waiting";
};

export const Metamask: FC<MetamaskProps> = ({ state }) => {
  const { activateBrowserWallet } = useEthers();

  function handleConnectWallet() {
    activateBrowserWallet();
    state = "connecting";
  }

  const getTitle = (): string => {
    if (!state) {
      return "Connect Metamask";
    }
    if (state === "connecting") {
      return "Connecting...";
    }

    return "Waiting for confirmation...";
  };

  const getIsLoading = (): boolean => state === "connecting" || state === "waiting";

  return (
    <div className={classnames(styles.container, {
      [styles.loading]: getIsLoading(),
    })}
    >
      <div className={styles.metamaskIcon}>
        <div className={styles.metamaskIconContent}>
          <MetamaskBigIcon />
          <div className={styles.metamaskLoadingIcon}>
            <CircleLoadingIcon />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <span className={styles.title}>
          {getTitle()}
        </span>
        {!state && (
          <Description>
            <span>Metamask</span>
            {" "}
            is a wallet and
            {" "}
            <span>
              Chrome extantion
            </span>
            {" "}
            to stake your stablecoins.
          </Description>
        )}
      </div>
      {!state && (
        <Button label="Connect Metamask" center onClick={handleConnectWallet} />
      )}
    </div>
  );
};
