import type { NextPageWithLayout } from 'next';
import { useRouter } from 'next/router';
import { MainLayout } from '@/features/common/layouts/main_layout';
import { PostDetailContainer } from '@/features/posts/post_detail_container';

const PostDetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  if (!router.isReady || !id) return null;

  return !isNaN(+id) ? <PostDetailContainer id={+id} /> : null;
};

PostDetailPage.getLayout = page => <MainLayout>{page}</MainLayout>;

export default PostDetailPage;
