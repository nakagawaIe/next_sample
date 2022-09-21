import axios from 'axios';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';
import { IPost } from '@/features/posts/interface/posts_interface';

const postsURL = 'https://jsonplaceholder.typicode.com/posts';

const PostsPage: NextPage = () => {
  const { data, error } = useSWR<IPost[]>(postsURL);
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const postList = () => {
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    return (
      <ul>
        {data.map(d => (
          <li key={d.id}>
            <Link href={`/posts/${d.id}`}>{d.title}</Link>
          </li>
        ))}
      </ul>
    );
  };

  const onClick = async () => {
    const response = await axios.post(postsURL, {
      data: {
        title,
        body,
        userId: 1,
      },
    });
    console.log(response);

    setTitle('');
    setBody('');
  };

  return (
    <motion.div initial={{ x: '10%' }} animate={{ x: '0' }} exit={{ opacity: 0 }}>
      <Head>
        <title>Posts Page</title>
      </Head>
      <p>
        <Link href='/'>＜ Back to Home</Link>
      </p>
      <div>
        <h2>Create Post</h2>
        <p>
          Title
          <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
        </p>
        <p>
          Body
          <textarea value={body} onChange={e => setBody(e.target.value)} rows={3} />
        </p>
        <button onClick={onClick}>Create Post (check console.log)</button>
      </div>

      <h2>Post List</h2>
      {postList()}
    </motion.div>
  );
};

export default PostsPage;
