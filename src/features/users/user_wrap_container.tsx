import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubTitleComponent } from '../common/components/sub_title_component';
import styles from './user_wrap_container.module.scss';
import { PhotoContainer } from '@/features/photos/photos_container';
import { TodoContainer } from '@/features/todo/todo_container';
import { UserDetailContainer } from '@/features/users/user_detail_container';

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

  const ModalItems = () => (
    <>
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
    </>
  );

  return (
    <>
      <div className={styles.buttons}>
        <button onClick={isShowPhoto ? onClosePhoto : onClickPhoto}>
          {isShowPhoto ? 'Close' : 'Show Photo'}
        </button>
        <button onClick={isShowTodo ? onCloseTodo : onClickTodo}>
          {isShowTodo ? 'Close' : 'Show Todo'}
        </button>
      </div>
      <div className={styles.contents}>
        {!id || isNaN(+id) ? null : <UserDetailContainer id={+id} />}
        <SubTitleComponent title='モーダル' />
        <p>ボタンを押すとモーダルとして別コンテナを表示</p>
        <p>
          query stringも同時に変更して、query
          stringがある状態でロードするとモーダルが最初から出ている状態になる
        </p>
        <ModalItems />
      </div>
    </>
  );
};

const addQuery = (key: string, value: string) => {
  const { search } = window.location;
  const params = new URLSearchParams(search);
  params.append(key, value);
  replaceQuery(params);
};

const deleteQuery = (key: string) => {
  const { search } = window.location;
  const params = new URLSearchParams(search);
  params.delete(key);
  replaceQuery(params);
};

const replaceQuery = (params: URLSearchParams) => {
  const { pathname } = window.location;
  const query = params.toString();
  window.history.replaceState(null, '', `${pathname}${query ? '?' : ''}${query}`);
};
