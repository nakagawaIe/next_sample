import { useState } from 'react';

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
    <div>
      <p>
        Title
        <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
      </p>
      <p>
        Body
        <textarea value={body} onChange={e => setBody(e.target.value)} rows={3} />
      </p>
      <button onClick={onClick}>Create Post (check console.log)</button>
    </div>
  );
};
