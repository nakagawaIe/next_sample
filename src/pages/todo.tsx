import { motion } from 'framer-motion'
import type { NextPage } from 'next';
import Head from 'next/head';
import { TodoContainer } from '@/features/todo/todo_container';

const TodoPage: NextPage = () => {
  return (
    <motion.div
      initial={{ x: "10%" }}
      animate={{ x: "0" }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>ToDo Page</title>
      </Head>
      <TodoContainer />
    </motion.div>
  );
};

export default TodoPage;
