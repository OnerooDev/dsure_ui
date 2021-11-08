import React from 'react'
import { CheckCert } from '../web3/checkCert';
import { Header } from '../main/Header';
import { ConfirmEmail } from '../lib/ConfirmEmail';
import { UserDataForm } from "../lib/Forms";

interface CheckUserDataProps {
  connected_account: string
  first_name?: string
}

export const CheckUserData: React.FC<CheckUserDataProps> = ({connected_account, first_name}) => {
  return (first_name == "none" ? (
    <>
      <UserDataForm connected_account={connected_account} />
    </>
  ) : (
    <>
      <CheckCert />
    </>
  ))
}
