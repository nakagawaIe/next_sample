import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import { CounterContainer } from '@/features/counter/counter_container';

const CounterPage: NextPage = () => {
  return (
    <motion.div initial={{ x: '10%' }} animate={{ x: '0' }} exit={{ opacity: 0 }}>
      <Head>
        <title>About Page</title>
      </Head>
      <CounterContainer />
    </motion.div>
  );
};

export default CounterPage;
