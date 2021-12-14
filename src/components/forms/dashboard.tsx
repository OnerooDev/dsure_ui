import React from 'react'
import { useEmailExistQuery } from '../../generated/graphql';
import { CheckEmailConfirm } from './checkEmailConfirm';
import { CreateAccountForm } from '../lib/Forms';
import Loader from "react-loader-spinner";
interface DashboardFormProps {
  connected_account: string
}

export const DashboardForm: React.FC<DashboardFormProps> = ({connected_account}) => {
  const [checkMail, loading] = useEmailExistQuery({
    variables: {
      eth_address: connected_account
    }
  });
  //const checker = null;
  return (loading ? (checkMail.data?.emailExist ? (
      <>
        <CheckEmailConfirm account_email={checkMail.data?.emailExist?.email} connected_account={connected_account} email_status={checkMail.data?.emailExist?.email_status} first_name={checkMail.data?.emailExist?.first_name} />
      </>
    ) : (
      <>
        <CreateAccountForm connected_account={connected_account} />
      </>
    )
  ) : (
    <>
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
    </>
  )
  )
}
