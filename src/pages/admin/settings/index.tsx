import React from 'react';
import { CheckAdmin } from '../../../components/admin/CheckAdmin';
//import { } from '../generated/graphql';
import { createUrqlClient } from '../../../utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import { Metamask } from '../../../components/lib/Metamask'
import { useEthers} from "@usedapp/core";
import {Settings} from '../../../components/admin/Settings';

interface AdminPProps {

}

const AdminSettings: React.FC<AdminPProps> = ({}) => {

  const { account } = useEthers();

  return (!account ? (
          <Metamask />
        ) : (
          <CheckAdmin connected_account={account} page={Settings}/>
        )
  );
};

export default withUrqlClient(createUrqlClient)(AdminSettings);
