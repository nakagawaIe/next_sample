import { useEffect, useState, useMemo } from 'react';
import { CounterCountComponent } from './components/counter_count_component';
import { SubTitleComponent } from '@/features/common/components/sub_title_component';
import { TitleComponent } from '@/features/common/components/title_component';
import styles from '@/features/counter/counter_container.module.scss';

export const CounterContainer = () => {
  const [count, setCount] = useState(0);
  const [dummyCount, setDummyCount] = useState(0);

  useEffect(() => {
    console.log('左 カウントアップ！', count);
  }, [count]);

  useEffect(() => {
    console.log('右 カウントアップ！', dummyCount);
  }, [dummyCount]);

  const onClick = () => {
    setCount(count + 1);
  };

  const onClickDummy = () => {
    setDummyCount(dummyCount + 1);
  };

  return (
    <div className={styles.root}>
      <TitleComponent title='Counter Page' />

      <div className={styles.count}>
        <div>
          {useMemo(() => <CounterCountComponent count={count} />, [count])}
          <button onClick={onClick}>こんにちはする（useMemoの効果なし）</button>
        </div>
        <div>
          <CounterCountComponent count={dummyCount} />
          <button onClick={onClickDummy}>こんにちはをする（useMemoの効果あり）</button>
        </div>
      </div>

      <div>
        <SubTitleComponent title='useState' />
        <ul>
          <li>状態を管理できる</li>
        </ul>
        <p>こんにちはした数をカウント数を保持する</p>
      </div>

      <div>
        <SubTitleComponent title='useEffect' />
        <ul>
          <li>コンポーネントのマウント/アンマウントをフック</li>
          <li>指定したstate/propsに変化があった時にフック</li>
        </ul>
        <p>
          このページがマウント/アンマウントした時に、console.logを吐く<br />
          カウントのstateが変化した時にconsole.logを吐く
        </p>
      </div>

      <div>
        <SubTitleComponent title='useMemo' />
        <ul>
          <li>
            不要な子コンポーネントの再レンダリングを防ぐ<br />
            <small>
              通常stateが更新されるとコンポーネントは再レンダリングされる。<br />
              <code>useMemo</code>で指定したstateの変更時のみレンダリングされるようにできる
            </small>
          </li>
        </ul>
        <p>
          <code>CounterCountComponent</code>で、console.logを吐いているが、<code>useMemo</code>を使っていない方は、もう片方のcountにも反応し、レンダリングされてしまっている。
        </p>
      </div>
    </div>
  );
};
