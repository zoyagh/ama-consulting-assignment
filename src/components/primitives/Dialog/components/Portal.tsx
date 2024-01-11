import type {FC, PropsWithChildren} from 'react';

import {createPortal} from 'react-dom';

const Portal: FC<PropsWithChildren> = ({children}) => {
  const portalRoot = typeof document === 'object' ? document.getElementById('portal-root') : undefined;

  return portalRoot ? createPortal(children, portalRoot) : <div></div>;
};

export default Portal;
