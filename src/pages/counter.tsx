import type { NextPage } from 'next';
import Head from 'next/head';
import { CounterContainer } from '@/features/counter/counter_container';

const CounterPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <CounterContainer />
    </>
  );
};

export default CounterPage;
