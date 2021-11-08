import { NextPage } from "next";
import { createUrqlClient } from '../../utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import { ConfirmEmailForm } from "../../components/lib/Forms/ConfirmEmail";

const ConfirmEmail: NextPage<{ token: string }> = ({ token }) => {
  return (
    <>
      <ConfirmEmailForm token={token}/>
    </>
  );
};

ConfirmEmail.getInitialProps = ({ query }) => {
  return {
    token: query.token as string
  }
}

export default withUrqlClient(createUrqlClient, {ssr: false})(ConfirmEmail);
