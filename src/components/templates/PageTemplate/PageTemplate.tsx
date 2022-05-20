import React, { Fragment } from 'react';

interface Props {
  header: React.ReactNode;
  footer: React.ReactNode;
  children?: React.ReactNode;
}

function PageTemplate({ header, footer, children }: Props) {
  return (
    <Fragment>
      {header}
      {children}
      {footer}
    </Fragment>
  );
}

export default PageTemplate;
