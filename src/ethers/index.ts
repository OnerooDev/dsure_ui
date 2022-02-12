import { useEthers, useContractFunction, useContractCall } from "@usedapp/core";
import {Dsure_abi} from './abi/dsure_abi';
import {Token_abi} from './abi/token_abi';
import { ethers } from 'ethers';
import { Contract } from '../../node_modules/@usedapp/core/node_modules/@ethersproject/contracts/lib/index';
import { Dsure_address, Token_address, price_1, price_2 } from '../utils/constants';
import { from_string_to_int } from './utils/decode';

const dsure_interface = new ethers.utils.Interface(Dsure_abi);
const token_interface = new ethers.utils.Interface(Token_abi);

// //types
class Info {
  id: string;
  address: string;
  plan: number;
  amount: number;
  status: number;
  timelock: number;
}
class Settings {
  price_1: number;
  price_2: number;
  count: number;
  longlock: number;
  fee: number;
  sec_time: number;
}

export const withdrawVault = () => {
  const Dsure_contract = new Contract(Dsure_address, dsure_interface);
  const { state, send } = useContractFunction(Dsure_contract, 'withdrawVault', {})

  return { state, send };
}

export const reinvestVault = () => {
  const Dsure_contract = new Contract(Dsure_address, dsure_interface);
  const { state, send } = useContractFunction(Dsure_contract, 'reinvestVault', {})

  return { state, send };
}

export const Deposit_1 = () => {
  const Dsure_contract = new Contract(Dsure_address, dsure_interface);
  const { state, send, events } = useContractFunction(Dsure_contract, 'Deposit_plan_1', {})

  return { state, send, events };
}

export const Deposit_2 = () => {
  const Dsure_contract = new Contract(Dsure_address, dsure_interface);
  const { state, send, events } = useContractFunction(Dsure_contract, 'Deposit_plan_2', {})

  return { state, send, events };
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

export const checkBalance = () => {
  const { account } = useEthers()
  const al = useContractCall({
    abi: token_interface,
    address: Token_address,
    method:  'balanceOf',
    args: [account]
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

export function Get_info (id: string) {
  const vault = useContractCall({
    abi: dsure_interface,
    address: Dsure_address,
    method:  'getInfo',
    args: [id]
  }) ?? [];

  const info = (vault.toString()).split(',');
  const typed_info: Info = {
    id: id,
    address: info[0],
    plan: from_string_to_int(info[1]),
    amount: from_string_to_int(info[2]),
    status: from_string_to_int(info[3]),
    timelock: from_string_to_int(info[4])
  };

  const out = {
    data: {
      vaultInfo: typed_info
    }
  };
  return out;
}

export function Get_settings () {
  const vault = useContractCall({
    abi: dsure_interface,
    address: Dsure_address,
    method:  'getSettings',
    args: []
  }) ?? [];

  const info = (vault.toString()).split(',');
  const typed_info: Settings = {
    price_1: from_string_to_int(info[0]),
    price_2: from_string_to_int(info[1]),
    count: from_string_to_int(info[2]),
    longlock: from_string_to_int(info[3]),
    fee: from_string_to_int(info[4]),
    sec_time: from_string_to_int(info[5])
  };

  const out = {
    data: {
      settings: typed_info
    }
  };
  return out;
}
