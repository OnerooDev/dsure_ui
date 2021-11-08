//import { useGetVaultsQuery } from '../../generated/graphql';
import { InfoWeb3 } from './info';
import Loader from "react-loader-spinner";
import { Get_vaults } from '../../ethers/index';

interface CheckCertProps {

}

export const CheckCert: React.FC<CheckCertProps> = ({}) => {
  const id = Get_vaults();
  return (
    <>
        {id ? (
          <InfoWeb3 id={id} />
        ) : (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={3000} //3 secs
          />
        )}
    </>

  )
}
