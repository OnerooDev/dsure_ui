//import { useGetCertQuery, useCreateCertMutation } from '../../generated/graphql';
import { InfoWeb3 } from './info';
import Loader from "react-loader-spinner";
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
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={3000} //3 secs
          />
        </>
      )
  }
}
