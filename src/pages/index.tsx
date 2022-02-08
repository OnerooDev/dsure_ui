import React from 'react';
import { DashboardForm } from '../components/forms/dashboard';
//import { } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import { Metamask } from '../components/lib/Metamask'
import { useEthers} from "@usedapp/core";
import { Header } from '../components/main/Header';
import { Footer } from '../components/main/Footer';

interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = ({}) => {

  const { account } = useEthers();

  return (
    <>
      <Header />
      <br />
      {!account ? (
        <Metamask />
      ) : (
        <DashboardForm connected_account={account} />
      )}
      <Footer />
    </>
  );
};

export default withUrqlClient(createUrqlClient)(Dashboard);
