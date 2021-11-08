import React from 'react'
import { CheckUserData } from './checkUserData';
import { ConfirmEmail } from '../lib/ConfirmEmail';

interface checkEmailConfirmProps {
  account_email: string
  connected_account: string
  email_status: number
  first_name?: string
}

export const CheckEmailConfirm: React.FC<checkEmailConfirmProps> = ({account_email, connected_account, email_status, first_name}) => {

  return (email_status == 0 ? (
    <>
      <ConfirmEmail account_email={account_email} eth_address={connected_account}/>
    </>
  ) : (
    <>
      <CheckUserData connected_account={connected_account} first_name={first_name} />
    </>
  ))
}
