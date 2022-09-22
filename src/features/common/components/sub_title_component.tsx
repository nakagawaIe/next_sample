import style from './sub_title_component.module.scss';

type Props = {
  title: string;
};

export const SubTitleComponent = (props: Props) => {
  return <h3 className={style.root}>{props.title}</h3>;
};
