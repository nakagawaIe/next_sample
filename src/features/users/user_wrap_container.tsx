import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './user_wrap_container.module.scss';
import { SubTitleComponent } from '@/features/common/components/sub_title_component';
import { PhotoContainer } from '@/features/photos/photos_container';
import { TodoContainer } from '@/features/todo/todo_container';
import { UserDetailContainer } from '@/features/users/user_detail_container';
import { addQuery, deleteQuery } from '@/utils/url';

export const UserWrapContainer = () => {
  const router = useRouter();
  const { id, photo, todo } = router.query;

  const [isShowPhoto, setIsShowPhoto] = useState(!!photo);
  const [isShowTodo, setIsShowTodo] = useState(!!todo);

  const onClickPhoto = () => {
    if (isShowTodo) {
      onCloseTodo();
    }
    setIsShowPhoto(true);
    addQuery('photo', 'true');
  };

  const onClickTodo = () => {
    if (isShowPhoto) {
      onClosePhoto();
    }
    setIsShowTodo(true);
    addQuery('todo', 'true');
  };

  const onClosePhoto = () => {
    setIsShowPhoto(false);
    deleteQuery('photo');
  };

  const onCloseTodo = () => {
    setIsShowTodo(false);
    deleteQuery('todo');
  };

  const Buttons = () => (
    <div className={styles.buttons}>
      <button onClick={isShowPhoto ? onClosePhoto : onClickPhoto}>
        {isShowPhoto ? 'Close' : 'Show Photo'}
      </button>
      <button onClick={isShowTodo ? onCloseTodo : onClickTodo}>
        {isShowTodo ? 'Close' : 'Show Todo'}
      </button>
    </div>
  );

  return (
    <>
      <Buttons />
      <div className={styles.contents}>
        {!id || isNaN(+id) ? null : <UserDetailContainer id={+id} />}
        <SubTitleComponent title='モーダル' />
        <p>ボタンを押すとモーダルとして別コンテナを表示</p>
        <p>
          query stringも同時に変更して、query
          stringがある状態でロードするとモーダルが最初から出ている状態になる
        </p>
        <AnimatePresence>
          {isShowPhoto && (
            <motion.div
              initial={{ y: '10%' }}
              animate={{ y: '0' }}
              exit={{ opacity: 0, y: '10%' }}
              className={styles.modal}
            >
              <PhotoContainer />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isShowTodo && (
            <motion.div
              initial={{ y: '10%' }}
              animate={{ y: '0' }}
              exit={{ opacity: 0, y: '10%' }}
              className={styles.modal}
            >
              <TodoContainer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
