//import { useGetCertQuery, useCreateCertMutation } from '../../generated/graphql';
import { InfoWeb3 } from './info';
import { Loader } from "../utils/Loader";
import { Get_vaults } from '../../ethers/index';
import { CreateDepositWeb3 } from './createDeposit';

interface CheckCertProps {

}

export const CheckCert: React.FC<CheckCertProps> = ({}) => {
  const id = Get_vaults();
  const nid = parseInt(id);
  if (id) {
    if (nid == 0) {
      return (
        <>
          <CreateDepositWeb3 />
        </>
      )
    } else {
        return (
          <>
            <InfoWeb3 id={id} />
          </>
        )
    }
  } else {
    return (
        <>
          <Loader />
        </>
      )
  }
}
