interface IProps {
  count: number;
}

export const CounterCountComponent = (props: IProps) => {
  console.log('Render CounterCountComponent');
  return (
    <p>{`${props.count}回目のこんにちは！`}</p>
  );
};
