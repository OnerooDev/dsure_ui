import { useState, useEffect } from "react";
import { Deposit_1, Deposit_2, checkAllowance, Approve, checkBalance} from '../../ethers';
import { ethers } from 'ethers';
import { Dsure_address, price_1, price_2 } from '../../utils/constants';
import { from_string_to_int, from_hex_to_arr, to_string } from '../../ethers/utils/decode';
import { PlanCardsGroup } from '../lib/PlanCardsGroup';
//import { useCreateCertMutation } from '../../generated/graphql';
import {useRouter} from 'next/router';
import { Title } from "../lib/Title";

interface CreateDepositProps {
}

export const CreateDepositWeb3: React.FC<CreateDepositProps> = ({}) => {
    const [disabled, setDisabled] = useState(false);
    const [approwedD1, setapprowedD1] = useState("");
    const [approwedD2, setapprowedD2] = useState("");
    const [amountErr1, setamountErr1] = useState("");
    const [amountErr2, setamountErr2] = useState("");
    const { state: stateD1, send: Deposit1, events } = Deposit_1();
    const { state: stateD2, send: Deposit2 } = Deposit_2();
    const allowance = checkAllowance();
  //  const balance = checkBalance();
    const { state: allow, send: Allow } = Approve();
    const router = useRouter();
    //const [, new_cert] = useCreateCertMutation();

    const handleDeposit = (plan: string) => {
      if (plan == "basic") {
          if (from_string_to_int(allowance) < from_string_to_int(price_1)) {
            const sum = ethers.BigNumber.from(price_1);
            setDisabled(true);
            Allow(Dsure_address, sum);
          } else {
            setDisabled(true);
            Deposit1();
          }
        // } else {
        //   setamountErr("Not enough USDT")
        // }
      } else {
        //if (from_string_to_int(balance) >= from_string_to_int(price_2)) {
          if (from_string_to_int(allowance) < from_string_to_int(price_2)) {
            const sum = ethers.BigNumber.from(price_2);
            setDisabled(true);
            Allow(Dsure_address, sum);
          } else {
            setDisabled(true);
            Deposit2();
          }
        // } else {
        //   setamountErr("Not enough USDT")
        // }
      }
    }

    useEffect(() => {
      if (from_string_to_int(allowance) >= from_string_to_int(price_1)) {
        setapprowedD1("Select plan");
      } else {
        setapprowedD1("Approve");
      }
      if (from_string_to_int(allowance) >= from_string_to_int(price_2)) {
        setapprowedD1("Select plan");
        setapprowedD2("Select plan");
      } else {
        setapprowedD2("Approve");
      }
    }, [allowance]);

    useEffect(() => {
      if (stateD1.errorMessage) {
        setamountErr1(stateD1.errorMessage)
      }
      if (stateD2.errorMessage) {
        setamountErr2(stateD2.errorMessage)
      }
      if (stateD1.status == "Success") {
        router.reload();
      }
      if (stateD2.status == "Success") {
        router.reload();
      }
      if (stateD1.status == "Mining" || stateD2.status == "Mining" || allow.status == "Mining") {
        setDisabled(true);
      } else {
        setDisabled(false);
      }

    }, [stateD1, stateD2, allow]);

    return (
      <>
        <Title>
          Select your plan
        </Title>
        <PlanCardsGroup
          onSubmit={handleDeposit}
          loading={disabled}
          BasText={approwedD1}
          AdvText={approwedD2}
          err_mesg1={amountErr1}
          err_mesg2={amountErr2}
        />
      </>

    )
}
