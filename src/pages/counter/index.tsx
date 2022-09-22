import { motion } from 'framer-motion';
import type { NextPageWithLayout } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { MainLayout } from '@/features/common/layouts/main_layout';
import { CounterContainer } from '@/features/counter/counter_container';

const CounterPage: NextPageWithLayout = () => {
  useEffect(() => {
    console.log('CounterPage mount');
    return () => console.log('CounterPage unmount');
  }, []);

  return (
    <motion.div initial={{ x: '10%' }} animate={{ x: '0' }} exit={{ opacity: 0 }}>
      <Head>
        <title>About Page</title>
      </Head>
      <CounterContainer />
    </motion.div>
  );
};

CounterPage.getLayout = page => <MainLayout>{page}</MainLayout>;

export default CounterPage;
