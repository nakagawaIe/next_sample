import Link from 'next/link';
import { useContext } from 'react';
import { SubTitleComponent } from '@/features/common/components/sub_title_component';
import styles from '@/features/home/home_container.module.scss';
import { TodoContext } from '@/features/todo/providers/todo_provider';

export const HomeContainer = () => {
  const { state } = useContext(TodoContext);
  const { todos } = state;

  return (
    <main className={styles.root}>
      <ul className={styles.list}>
        <li>
          <SubTitleComponent title='Layout機構を使わないと' />
          <Link href='/unuse_layout'>Unuse Layout Page ＞</Link>
        </li>
        <li>
          <SubTitleComponent title='useState、useEffect、useMemoを試す' />
          <Link href='/counter'>Counter Page ＞</Link>
        </li>
        <li>
          <SubTitleComponent title='useContext、useReducerを試す' />
          <p>{`${todos.length}件中 未完了が${todos.filter(t => !t.isDone).length}件 あります`}</p>
          <Link href='/todo'>ToDo List Page ＞</Link>
        </li>
        <li>
          <SubTitleComponent title='useSWR、fetchを試す' />
          <Link href='/posts'>Posts Page ＞</Link>
        </li>
        <li>
          <SubTitleComponent title='モーダルを試す' />
          <Link href='/users/1'>User Page (id: 1) ＞</Link>
          <br />
          <Link href='/users/2'>User Page (id: 2) ＞</Link>
        </li>
      </ul>
    </main>
  );
};
