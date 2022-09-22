import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './main_layout.module.scss';
import { SubTitleComponent } from '@/features/common/components/sub_title_component';

export const MainLayout = (props: React.PropsWithChildren<{}>) => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    console.log('MainLayout レンダリングされました');
  }, []);

  return (
    <main className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.title}><Link href="/">Next App Sample</Link></h1>
      </header>
      {isShow && (
        <>
          <SubTitleComponent title='Layoutを試す' />
          <p>共通で使うレイアウトをLayoutComponentとすると最小限のレンダリングで済みます。</p>
          <p>
            <small>
              <a href="https://nextjs.org/docs/basic-features/layouts" target="_blank" rel="noreferrer">
            https://nextjs.org/docs/basic-features/layouts
              </a>
            </small>
          </p>
          <button onClick={() => setIsShow(false)}>OK</button>
        </>
      )}
      {props.children}
    </main>
  );
};
