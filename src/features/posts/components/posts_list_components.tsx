import Link from 'next/link';
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
    <ul>
      {data.map(d => (
        <li key={d.id}>
          <Link href={`/posts/${d.id}`}>{d.title}</Link>
        </li>
      ))}
    </ul>
  );
};
