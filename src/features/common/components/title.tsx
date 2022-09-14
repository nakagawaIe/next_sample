import style from './title.module.scss'

type Props = {
  title: string
}

export const Title = (props: Props) => {
  return (
    <h1 className={style.title}>{props.title}</h1>
  )
}
