import React from 'react';

interface Props {
  header: React.ReactNode;
  footer: React.ReactNode;
  children?: React.ReactNode;
}

function PageTemplate({ header, footer, children }: Props) {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}

export default PageTemplate;
