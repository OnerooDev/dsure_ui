import React from 'react'
import { useEmailExistQuery } from '../../generated/graphql';
import { CheckEmailConfirm } from './checkEmailConfirm';
import { Header } from '../main/Header';
import { CreateAccountForm } from '../lib/Forms';

interface DashboardFormProps {
  connected_account: string
}

export const DashboardForm: React.FC<DashboardFormProps> = ({connected_account}) => {
  const [checkMail] = useEmailExistQuery({
    variables: {
      eth_address: connected_account
    }
  });
  //const checker = null;
  return (checkMail.data?.emailExist ? (
    <>
      <Header />
      <CheckEmailConfirm account_email={checkMail.data?.emailExist?.email} connected_account={connected_account} email_status={checkMail.data?.emailExist?.email_status} first_name={checkMail.data?.emailExist?.first_name} />
    </>
  ) : (
    <>
      <Header />
      <CreateAccountForm connected_account={connected_account} />
    </>
  ))
}
