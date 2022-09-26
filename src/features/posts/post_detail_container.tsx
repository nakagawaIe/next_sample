import { motion } from 'framer-motion';
import Link from 'next/link';
import useSWR from 'swr';
import { SubTitleComponent } from '@/features/common/components/sub_title_component';
import { fetcher } from '@/features/common/utils/api';
import { IPost } from '@/features/posts/types/posts_type';

interface IProps {
  id: number;
}

export const PostDetailContainer = (props: IProps) => {
  const { data, error } = useSWR<IPost>(`https://jsonplaceholder.typicode.com/posts/${props.id}`, fetcher);

  const contents = () => {
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    return (
      <article>
        <SubTitleComponent title={data.title} />
        <p>{data.body}</p>
      </article>
    );
  };

  return (
    <motion.div initial={{ x: '10%' }} animate={{ x: '0' }} exit={{ opacity: 0 }}>
      <p>
        <Link href='/posts'>＜ Back to List</Link>
      </p>
      {contents()}
    </motion.div>
  );
};
