import { Steps, Hero, Faq, Cases } from '../components/lib/MainPage';
import { FaqProps, Item } from '../components/lib/MainPage/FAQ/faq/faq';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
//import NextLink from 'next/link';
//import { useEthers } from "@usedapp/core";
import { useRouter } from 'next/router';
import { PlanCardsGroup } from '../components/lib/PlanCardsGroup';
import { Title } from '../components/lib/Title';
import { Header } from '../components/main/Header';

const Index = () => {
  const router = useRouter();

  const item: Item = {title: "hi",description: "man"};
  const faq = [item]

  function handleSelectPlan() {
    router.push('/dashboard');
  }

  return (
    <>
      <Header />
      <br />
      <Hero />
      <a id="how-it-works" />
      <br />
      <Title>
        It simply works
      </Title>
      <Steps />
      <a id="calculate" />
      <br />
      <Title>
        Select your plan
      </Title>
      <PlanCardsGroup
        onSubmit={handleSelectPlan}
        loading={false}
        BasText="Select plan"
        AdvText="Select plan"
      />
      <a id="faq" />
      <br />
      <Title>
        All cases covered
      </Title>
      <Cases />
      <br />
      <Title>
        Frequently Asked Questions
      </Title>
      <Faq items={faq} />
    </>
  )
};

export default withUrqlClient(createUrqlClient)(Index);
