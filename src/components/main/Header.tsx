import { FC, useState } from "react";
import { useDisclosure } from '@chakra-ui/react';
import classnames from "classnames";
import ConnectButton from "../metamask/ConnectButton";
import AccountModal from "../metamask/AccountModal";
import styles from "./styles/header.module.css";
import { Container } from "../lib/Container";
import { LogoFullIcon } from "../lib/Icons";

export type HeaderProps = {
};

export const Header: FC<HeaderProps> = ({ }) => {
  const [ isOpen , setIsOpen] = useState<boolean>(false);
  const { isOpen: isWallet, onOpen, onClose } = useDisclosure();

  const handleSwitchOpenedState = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className={classnames(styles.container, {
      [styles.containerOpened]: isOpen,
    })}
    >
      <Container flexSb alignCenter>
        <LogoFullIcon />
        <button onClick={handleSwitchOpenedState} type="button" className={styles.burger}>
          <span />
        </button>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="https://dsure.io/#how-it-works" className={styles.link}>
                How it works
              </a>
            </li>
            <li className={styles.item}>
              <a href="https://dsure.io/#calculate" className={styles.link}>
                Calculator
              </a>
            </li>
            <li className={styles.item}>
              <a href="https://dsure.io/#faq" className={styles.link}>
                FAQ
              </a>
            </li>
            <li className={styles.item}>
                <ConnectButton handleOpenModal={onOpen} />
                <AccountModal isOpen={isWallet} onClose={onClose} />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
