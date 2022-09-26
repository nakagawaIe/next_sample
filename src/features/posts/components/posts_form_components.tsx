import { useState } from 'react';
import styles from './posts_form_components.module.scss';

interface IProps {
  onClick: (title: string, body: string) => void;
}

export const PostsFormComponent = (props: IProps) => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const onClick = async () => {
    props.onClick(title, body);
    setTitle('');
    setBody('');
  };

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <p>Title</p>
        <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className={styles.row}>
        <p>Body</p>
        <textarea value={body} onChange={e => setBody(e.target.value)} rows={3} />
      </div>
      <div className={styles.row}>
        <button onClick={onClick}>Create Post (Check Console & Network)</button>
      </div>
    </div>
  );
};
