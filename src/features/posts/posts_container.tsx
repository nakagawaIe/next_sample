import { motion } from 'framer-motion';
import { useState } from 'react';
import useSWR from 'swr';
import { SubTitleComponent } from '@/features/common/components/sub_title_component';
import { TitleComponent } from '@/features/common/components/title_component';
import { PostsFormComponent } from '@/features/posts/components/posts_form_components';
import { PostsListComponent } from '@/features/posts/components/posts_list_components';
import { IPost } from '@/features/posts/types/posts_type';
import { fetcher, post } from '@/utils/api';

const postsURL = 'https://jsonplaceholder.typicode.com/posts';

export const PostsContainer = () => {
  const [isShow, setIsShow] = useState(false);
  const { data, error } = useSWR<IPost[]>(postsURL, fetcher);
  console.log('PostsContainer');

  const onClick = async (title: string, body: string) => {
    const data = await post<IPost[], Omit<IPost, 'id'>>(
      postsURL,
      { title, body, userId: 1 }
    );
    console.log(data);
  };

  return (
    <motion.div initial={{ x: '10%' }} animate={{ x: '0' }} exit={{ opacity: 0 }}>
      <TitleComponent title='Posts Page' />
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? 'Close' : 'New Post'}
      </button>
      {
        isShow && (
          <div>
            <SubTitleComponent title='Create Post' />
            <PostsFormComponent onClick={onClick} />
          </div>
        )
      }

      <SubTitleComponent title='Post List' />
      <PostsListComponent data={data} error={error} />
    </motion.div>
  );
};
