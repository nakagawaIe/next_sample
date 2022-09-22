import Link from 'next/link';
import { useRouter } from 'next/router';
import { APIUtil } from '@/features/common/utils/api';
import { IPost } from '@/features/posts/types/posts_type';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = APIUtil.get<IPost>(id ? `https://jsonplaceholder.typicode.com/posts/${id}` : undefined);

  const contents = () => {
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    return (
      <article>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </article>
    );
  };

  return (
    <>
      <p>
        <Link href='/posts'>＜ Back to List</Link>
      </p>
      {contents()}
    </>
  );
};

export default PostPage;
