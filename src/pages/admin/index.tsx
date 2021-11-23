import React from 'react';
import { CheckAdmin } from '../../components/admin/CheckAdmin';
//import { } from '../generated/graphql';
import { createUrqlClient } from '../../utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import { Metamask } from '../../components/lib/Metamask'
import { useEthers} from "@usedapp/core";
import {MainPage} from '../../components/admin/MainPage';

interface AdminPProps {

}

const AdminP: React.FC<AdminPProps> = ({}) => {

  const { account } = useEthers();

  return (!account ? (
          <Metamask />
        ) : (
          <CheckAdmin connected_account={account} page={MainPage}/>
        )
  );
};

export default withUrqlClient(createUrqlClient)(AdminP);
