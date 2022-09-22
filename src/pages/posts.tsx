import type { NextPageWithLayout } from 'next';
import Head from 'next/head';
import { MainLayout } from '@/features/common/layouts/main_layout';
import { PostsContainer } from '@/features/posts/posts_container';

const PostsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>

      <PostsContainer />
    </>
  );
};

PostsPage.getLayout = page => <MainLayout>{page}</MainLayout>;

export default PostsPage;
