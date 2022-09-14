import Link from 'next/link';
import { useRouter } from 'next/router';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>ID: { id } Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}

export default PostPage
