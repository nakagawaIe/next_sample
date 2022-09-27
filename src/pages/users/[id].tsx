import { motion } from 'framer-motion';
import type { NextPageWithLayout } from 'next';
import Head from 'next/head';
import { MainLayout } from '@/features/common/layouts/main_layout';
import { UserWrapContainer } from '@/features/users/user_wrap_container';

const UsersPage: NextPageWithLayout = () => {
  return (
    <motion.div initial={{ x: '10%' }} animate={{ x: '0' }} exit={{ opacity: 0 }}>
      <Head>
        <title>User Page</title>
      </Head>
      <UserWrapContainer />
    </motion.div>
  );
};

UsersPage.getLayout = page => <MainLayout>{page}</MainLayout>;

export default UsersPage;
