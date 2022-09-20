import { motion } from 'framer-motion'
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import { IPost } from '@/features/posts/interface/posts_interface';

const PostsPage: NextPage = () => {
  const { data, error } = useSWR<IPost[]>('https://jsonplaceholder.typicode.com/posts');

  const contents = () => {
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
      <ul>
        {data.map(d => (
          <li key={d.id}>
            <Link href={`/posts/${d.id}`}>{d.title}</Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <motion.div
      initial={{ x: "10%" }}
      animate={{ x: "0" }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Posts Page</title>
      </Head>
      {contents()}
      <p>
        <Link href='/'>Back to Home</Link>
      </p>
    </motion.div>
  );
};

export default PostsPage;
