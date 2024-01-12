import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import App from '@/components/App';
import Main from '@/components/Main';
import '@/styles/globals.css';

import routeGroups from '@/assets/config/routeGroups.json';
import clsx from 'clsx';

const AppPage = ({Component, ...rest}: AppProps) => {
  const {route} = useRouter();
  const {mainRoutes} = routeGroups;

  const isMainRoute = !!~mainRoutes.indexOf(route);

  return (
    <App className="font-sans">
      <Main className={clsx(isMainRoute && 'bg-background-primary')}>
        <Component {...rest} />
      </Main>

      <div id="portal-root" className="absolute top-0 left-0 contents" style={{contain: 'layout'}}></div>
    </App>
  );
};

export default AppPage;
