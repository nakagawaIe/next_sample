import { motion } from 'framer-motion';
import type { NextPageWithLayout } from 'next';
import Head from 'next/head';
import { MainLayout } from '@/features/common/layouts/main_layout';
import { TodoContainer } from '@/features/todo/todo_container';

const TodoPage: NextPageWithLayout = () => {
  return (
    <motion.div initial={{ x: '10%' }} animate={{ x: '0' }} exit={{ opacity: 0 }}>
      <Head>
        <title>ToDo Page</title>
      </Head>
      <TodoContainer />
    </motion.div>
  );
};

TodoPage.getLayout = page => <MainLayout>{page}</MainLayout>;

export default TodoPage;
