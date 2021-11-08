import { Steps, Hero, Faq, Cases } from '../components/lib/MainPage';
import { FaqProps, Item } from '../components/lib/MainPage/FAQ/faq/faq';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
//import NextLink from 'next/link';
//import { useEthers } from "@usedapp/core";
import { useRouter } from 'next/router';
import { PlanCardsGroup } from '../components/lib/PlanCardsGroup';

const Index = () => {
  const router = useRouter();

  const item: Item = {title: "hi",description: "man"};
  const faq = [item]

  function handleSelectPlan() {
    router.push('/dashboard');
  }

  return (
    <>
      <Hero />
      <Steps />
      <PlanCardsGroup
        onSubmit={handleSelectPlan}
        loading={false}
        BasText="Select plan"
        AdvText="Select plan"
      />
      <Cases />
      <Faq items={faq} />
    </>
  )
};

export default withUrqlClient(createUrqlClient)(Index);
