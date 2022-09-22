import { useEffect, useState } from 'react';
import { SubTitleComponent } from '@/features/common/components/sub_title_component';
import { TitleComponent } from '@/features/common/components/title_component';
import styles from '@/features/counter/counter_container.module.scss';

export const CounterContainer = () => {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const onClick = () => {
    setCount(count + 1);
    setIsShow(true);
  };

  useEffect(() => {
    console.log('effect by count');
  }, [count]);

  return (
    <div className={styles.root}>
      <TitleComponent title='Counter Page' />

      <div className={styles.count}>
        <p>{`${count}回目のこんにちは！`}</p>
        <button onClick={onClick}>こんにちはする</button>
        {isShow && <p className={styles.done}>こんにちはしました！</p>}
      </div>

      <div>
        <SubTitleComponent title='useState' />
        <ul>
          <li>
            シンプルなstate<br />
            こんにちはした数をカウントする
          </li>
        </ul>
      </div>

      <div>
        <SubTitleComponent title='useEffect' />
        <ul>
          <li>コンポーネントのマウント/アンマウントをフック</li>
          <li>指定したstate/propsに変化があった時にフック</li>
        </ul>
        <p>
          このページがマウント/アンマウントした時に、console.logを吐く<br />
          ↑のカウントのstateが変化した時にconsole.logを吐く
        </p>
      </div>
    </div>
  );
};
