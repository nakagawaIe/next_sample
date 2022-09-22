import style from './title_component.module.scss';

type Props = {
  title: string;
};

export const TitleComponent = (props: Props) => {
  return <h2 className={style.root}>{props.title}</h2>;
};
