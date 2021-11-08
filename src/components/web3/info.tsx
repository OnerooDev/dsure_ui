import { Box, Text } from '@chakra-ui/react';
import { useGetInfoQuery } from '../../generated/graphql';
import { CreateDepositWeb3 } from './createDeposit';
import Loader from "react-loader-spinner";
import { Certificate } from '../lib/Certificate';
import { basicItems, advancedItems } from '../lib/PlanCardsGroup/plan-cards-group';
import { Unix_to_String } from '../../utils/time_convert';

interface InfoProps {
  id: string
}

export const InfoWeb3: React.FC<InfoProps> = ({id}) => {
  if (id == '0'){
    return (
      <>
        <CreateDepositWeb3 />
      </>

    )
  } else if (id) {
    const [info] = useGetInfoQuery({
      variables: {
        id: id
      }
    });
    if (info.data?.vaultInfo) {
      let text_plan = "";
      let text_status: "wait" | "active";
      let text_staked: string;
      let text_items: Array<string>;
      const date = Unix_to_String(info.data?.vaultInfo.timelock);

      if (info.data?.vaultInfo.plan == '1') {
        text_plan = "Basic";
        text_staked = "9750 USDT";
        text_items = basicItems;
      } else {
        text_plan = "Advanced";
        text_staked = "13950 USDT";
        text_items = advancedItems;
      }
      if (info.data?.vaultInfo.status == "2") {
        text_status = "active";
      } else {
        text_status = "wait";
      }

      return (
        <>
          <Certificate
            status="wait"
            deposit_status={text_status}
            activeTill={date}
            cert_activeTill={date}
            staked={text_staked}
            plan={text_plan}
            items={text_items}
          />
        </>
      )
    } else {
      return (
        <>
          <Loader
            type="TailSpin"
            color="#50EFF5"
            height={50}
            width={50}
            timeout={3000} //3 secs
          />
        </>
      )
    }
  }
}
