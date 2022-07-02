interface Props {
  children?: React.ReactNode;
}

function GenericTemplate({ children }: Props) {
  return <>{children}</>;
}

export default GenericTemplate;
