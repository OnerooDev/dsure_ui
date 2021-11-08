import { useEthers, useContractFunction, useContractCall } from "@usedapp/core";
import {Dsure_abi} from './abi/dsure_abi';
import {Token_abi} from './abi/token_abi';
import { ethers } from 'ethers';
import { Contract } from '../../node_modules/@usedapp/core/node_modules/@ethersproject/contracts/lib/index';
import { Dsure_address, Token_address, price_1, price_2 } from '../utils/constants';

const dsure_interface = new ethers.utils.Interface(Dsure_abi);
const token_interface = new ethers.utils.Interface(Token_abi);

// //types
// class Info {
//   id: String;
//   address: String;
//   plan: String;
//   amount: Number;
//   status: String;
//   timelock: Number;
// }

export const Deposit_1 = () => {
  const Dsure_contract = new Contract(Dsure_address, dsure_interface);
  const { state, send } = useContractFunction(Dsure_contract, 'Deposit_plan_1', {})

  return { state, send };
}

export const Deposit_2 = () => {
  const Dsure_contract = new Contract(Dsure_address, dsure_interface);
  const { state, send } = useContractFunction(Dsure_contract, 'Deposit_plan_2', {})

  return { state, send };
}

export const Approve = () => {
  const Token_contract = new Contract(Token_address, token_interface);
  const { state, send } = useContractFunction(Token_contract, 'approve', {})

  return { state, send };
}

export const checkAllowance = () => {
  const { account } = useEthers()
  const al = useContractCall({
    abi: token_interface,
    address: Token_address,
    method:  'allowance',
    args: [account, Dsure_address]
  }) ?? [];

  return al.toString();
}

export function Get_vaults (): string {
  const { account } = useEthers()
  const vault = useContractCall({
    abi: dsure_interface,
    address: Dsure_address,
    method:  'getStorageId',
    args: [account]
  }) ?? [];

  return vault.toString();
}
