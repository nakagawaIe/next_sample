import Link from 'next/link';
import styles from './posts_list_components.module.scss';
import { IPost } from '@/features/posts/types/posts_type';

interface IProps {
  data?: IPost[];
  error: any;
}

export const PostsListComponent = (props: IProps) => {
  const { data, error } = props;

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <ul className={styles.root}>
      {data.map(d => (
        <li key={d.id}>
          <Link href={`/posts/${d.id}`}>{d.title}</Link>
        </li>
      ))}
    </ul>
  );
};
