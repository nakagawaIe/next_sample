import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Title } from '@/features/common/components/title_component';
import style from '@/features/counter/counter_container.module.scss';

export const CounterContainer = () => {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const onClick = () => {
    setCount(count + 1);
    setIsShow(true);
  };

  useEffect(() => {
    console.log('CounterPage mount');
    return () => console.log('CounterPage unmount');
  }, []);

  useEffect(() => {
    console.log('effect by count');
  }, [count]);

  return (
    <div className={style.root}>
      <Title title={`${count}回目のこんにちは！`} />
      <main className={style.main}>
        <button onClick={onClick}>こんにちはする</button>
        {isShow && <p className={style.done}>こんにちはしました！</p>}
      </main>
      <Link href='/'>Back to home</Link>
    </div>
  );
};
