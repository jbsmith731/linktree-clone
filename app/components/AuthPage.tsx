import * as React from 'react';

const Main = ({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <main className="h-screen flex bg-slate-100 px-4" {...props}>
      {children}
    </main>
  );
};

export { Main };
