import { motion } from 'framer-motion';
import { SubTitleComponent } from '@/features/common/components/sub_title_component';
import { TitleComponent } from '@/features/common/components/title_component';
import { APIUtil } from '@/features/common/utils/api';
import { PostsFormComponent } from '@/features/posts/components/posts_form_components';
import { PostsListComponent } from '@/features/posts/components/posts_list_components';
import { IPost } from '@/features/posts/types/posts_type';

const postsURL = 'https://jsonplaceholder.typicode.com/posts';

export const PostsContainer = () => {
  const { data, error } = APIUtil.get<IPost[]>(postsURL);

  const onClick = async (title: string, body: string) => {
    const data = await APIUtil.post<IPost[], Omit<IPost, 'id'>>(
      postsURL,
      { title, body, userId: 1 }
    );
    console.log(data);
  };

  return (
    <motion.div initial={{ x: '10%' }} animate={{ x: '0' }} exit={{ opacity: 0 }}>
      <TitleComponent title='Posts Page' />
      <div>
        <SubTitleComponent title='Create Post' />
        <PostsFormComponent onClick={onClick} />
      </div>

      <SubTitleComponent title='Post List' />
      <PostsListComponent data={data} error={error} />
    </motion.div>
  );
};
