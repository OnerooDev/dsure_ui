import { useState, useEffect } from "react";
import { Deposit_1, Deposit_2, checkAllowance, Approve} from '../../ethers/index';
import { ethers } from 'ethers';
import { Dsure_address, price_1, price_2 } from '../../utils/constants';
import { from_string_to_int } from '../../ethers/utils/decode';
import { PlanCardsGroup } from '../lib/PlanCardsGroup';

interface CreateDepositProps {
}

export const CreateDepositWeb3: React.FC<CreateDepositProps> = ({}) => {
    const [disabled, setDisabled] = useState(false);
    const [approwedD1, setapprowedD1] = useState("");
    const [approwedD2, setapprowedD2] = useState("");
    const { state: stateD1, send: Deposit1 } = Deposit_1();
    const { state: stateD2, send: Deposit2 } = Deposit_2();
    const allowance = checkAllowance();
    const { state: allow, send: Allow } = Approve();

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
      } else {
        if (from_string_to_int(allowance) < from_string_to_int(price_2)) {
          const sum = ethers.BigNumber.from(price_2);
          setDisabled(true);
          Allow(Dsure_address, sum);
        } else {
          setDisabled(true);
          Deposit2();
        }
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
      if (stateD1.status !== "Mining") {
        setDisabled(false);
      }
    }, [stateD1]);

    useEffect(() => {
      if (stateD1.status !== "Mining") {
        setDisabled(false);
      }
    }, [stateD1]);

    useEffect(() => {
      if (stateD2.status !== "Mining") {
        setDisabled(false);
      }
    }, [stateD2]);

    useEffect(() => {
      if (allow.status !== "Mining") {
        setDisabled(false);
      }
    }, [allow]);

    return (
      <>
        <PlanCardsGroup
          onSubmit={handleDeposit}
          loading={disabled}
          BasText={approwedD1}
          AdvText={approwedD2}
        />
      </>

    )
}
