import React, { Fragment } from 'react';

interface Props {
  children?: React.ReactNode;
}

function GenericTemplate({ children }: Props) {
  return <Fragment>{children}</Fragment>;
}

export default GenericTemplate;
