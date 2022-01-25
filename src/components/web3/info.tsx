import { useEffect, useState } from 'react';
import { useGetCertQuery } from '../../generated/graphql';
import Loader from "react-loader-spinner";
import { Certificate } from '../lib/Certificate';
import { basicItems, advancedItems } from '../lib/PlanCardsGroup/plan-cards-group';
import { Unix_to_String } from '../../utils/time_convert';
import { Get_info, withdrawVault, Get_settings } from '../../ethers';
//import { useRouter } from 'next/router';

interface InfoProps {
  id: string;
}
type statusDep = "wait" | "active";

export const InfoWeb3: React.FC<InfoProps> = ({id}) => {
  const [disabled, setDisabled] = useState(false);
  const [btn_label, setBtnLabel] = useState("Cancel");
  const [text_status_dep, setTextStatusDep] = useState<statusDep>("wait");
  const { state: state, send: withdraw } = withdrawVault();
//  const router = useRouter();
  const info = Get_info(id);
  const settings = Get_settings();
  const [cert] = useGetCertQuery({
    variables: {
      deposit_id: parseInt(id)
    }
  });
  // const [, new_cert] = useCreateCertMutation();
  // if (!cert.data?.cert) {
  //   new_cert({deposit_id: parseInt(id)})
  // }

  useEffect(() => {
    if (info.data.vaultInfo.status == 2) {
      setTextStatusDep("active");
    } else if (info.data.vaultInfo.status == 1) {
      if (info.data.vaultInfo.timelock + settings.data.settings.sec_time > Date.now() / 1000) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
      setBtnLabel("Withdraw");
    }

  }, [info]);

  useEffect(() => {
    if (state.status == "Success" || state.status == "Fail") {
      //router.reload();
    }
    if (state.status == "Mining") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [state]);

  const SubmitWithdraw = () => {
    if (info.data.vaultInfo.status == 2){
      if (info.data.vaultInfo.timelock + settings.data.settings.longlock > Date.now() / 1000) {
        if (window.confirm('Now you apply to cancel your current insurance certificate before 1 year staking. Fee amount - 2500 USDT. After 3 days you will be able to withdraw your USDT')){
          setDisabled(true);
          withdraw();
        }
      } else {
        if (window.confirm('Now you apply to cancel your current insurance certificate and request for withdraw your staked deposit. After 3 days you will be able to withdraw your USDT')){
          setDisabled(true);
          withdraw();
        }
      }
    }
    if (info.data.vaultInfo.status == 1) {
      setDisabled(true);
      withdraw();
    }
  }

  if (info.data.vaultInfo.address && cert.data) {
    //
    let text_plan = "";
    let text_status_cert: statusDep;
    let text_staked: string;
    let text_items: Array<string>;
    let cert_exp: string;
    const deposit_lock = Unix_to_String(info.data.vaultInfo.timelock);
    const timeout = Math.round((info.data.vaultInfo.timelock + settings.data.settings.sec_time - Date.now() / 1000) / 60)
    //
    if (info.data.vaultInfo.plan == 1) {
      text_plan = "Basic";
      text_staked = "9750 USDT";
      text_items = basicItems;
    } else {
      text_plan = "Advanced";
      text_staked = "13950 USDT";
      text_items = advancedItems;
    }
    //
    if (cert.data?.cert?.status == 2) {
      text_status_cert = "active";
    } else {
      text_status_cert = "wait";
    }
    //
    if(cert.data?.cert?.expire_date == null) {
      cert_exp = "0";
    } else {
      cert_exp = Unix_to_String(cert.data?.cert.expire_date)
    }
    //
    return (
      <>
        <Certificate
          status={text_status_cert}
          deposit_status={text_status_dep}
          activeTill={deposit_lock}
          cert_activeTill={cert_exp}
          staked={text_staked}
          plan={text_plan}
          items={text_items}
          cert_number={cert.data?.cert?.cert_number}
          btn_label={btn_label}
          onSubmit={SubmitWithdraw}
          isSubmitting={disabled}
          timeout={timeout}
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
