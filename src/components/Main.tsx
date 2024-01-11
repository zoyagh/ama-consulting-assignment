import type {FC, PropsWithChildren} from 'react';

import clsx from 'clsx';

interface MainProps extends PropsWithChildren {
  className?: string;
}

const Main: FC<MainProps> = ({children, className}) => {
  return (
    <main className={clsx(className, 'flex flex-[1_0_auto] max-w-full')}>
      <div className="flex-auto max-w-full">{children}</div>
    </main>
  );
};

export default Main;
