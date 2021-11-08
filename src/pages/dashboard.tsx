import React from 'react';
import { DashboardForm } from '../components/forms/dashboard';
//import { } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import { Metamask } from '../components/lib/Metamask'
import { useEthers} from "@usedapp/core";

interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = ({}) => {

  const { account } = useEthers();

  return (!account ? (
          <Metamask />
        ) : (
          <DashboardForm connected_account={account} />
        )
  );
};

export default withUrqlClient(createUrqlClient)(Dashboard);
