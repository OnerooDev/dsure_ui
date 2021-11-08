// import { useEffect, useState } from 'react';
import { Text } from "@chakra-ui/react";
import { useEthers, useTokenBalance } from "@usedapp/core";
//import Identicon from "./Identicon";
import { Button } from "../lib/Button";
import { utils } from 'ethers';
import {Token_address} from '../../utils/constants';
import styles from "../main/styles/header.module.css";
import { UserIcon } from "../lib/Icons";

type Props = {
  handleOpenModal: any;
};

export default function ConnectButton({ handleOpenModal }: Props) {
  const { activateBrowserWallet, account, chainId } = useEthers();
  const usdtBalance = useTokenBalance(Token_address, account);
//  const [activateError, setActivateError] = useState('')

  // useEffect(() => {
  // if (error) {
  //   setActivateError(error.message)
  // }
  // }, [error])

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <>
      <button
        onClick={handleOpenModal}
        type="button"
        className={styles.buttonProfile}
      >
        <UserIcon />
      </button>
      <Text fontSize="md" ml={2} textColor="#50EFF5">
        {usdtBalance && parseFloat(utils.formatUnits(usdtBalance, 18)).toFixed(2)} USDT {chainId}
      </Text>
    </>
  ) : (
    <>
      <Button
        onClick={handleConnectWallet}
        label="Get started"
        size="small"
      />
    </>
  );
}
