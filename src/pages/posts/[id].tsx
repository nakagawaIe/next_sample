import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { IPost } from '@/features/posts/interface/posts_interface';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const contents = () => {
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
      <article>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </article>
    )
  }

  return (
    <>
      {contents()}
      <p>
        <Link href='/posts'>Back to List</Link>
      </p>
    </>
  );
};

export default PostPage;
