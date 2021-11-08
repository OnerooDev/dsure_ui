import { FC, useState } from "react";

import styles from "./confirm-email.module.css";

import {Button} from "../Button";
import {Container} from "../Container";
import {Description} from "../Description";
import {Title} from "../Title";
import { ConfirmEmailIcon, EditIcon } from "../Icons";
import { useResendEmailConfirmMutation } from '../../../generated/graphql';

export type ConfirmEmailProps = {
  eth_address: string;
  account_email: string;
};

export const ConfirmEmail: FC<ConfirmEmailProps> = ({eth_address, account_email}) => {
  const [dis, setDis] = useState(false);
  const [, send] = useResendEmailConfirmMutation();
  const mail_to = "mailto:"+account_email;

  function handleNewLink() {
    send({eth_address: eth_address});
    setDis(true);
  }

    return (
  <div className={styles.container}>
    <Container>
      <div className={styles.confirmEmailIcon}>
        <ConfirmEmailIcon />
      </div>
      <Title>
        Confirm your email
      </Title>
      <Description>
        We emailed a magic link to
        <span className={styles.email}>
          <a href={mail_to}>
            {account_email}
          </a>
          <button type="button">
            <EditIcon />
          </button>
        </span>
        Click the link to confirm your email
      </Description>
      <Button
        onClick={handleNewLink}
        label="Send new link"
        disabled={dis}
        center
      />
    </Container>
  </div>
  )
};
