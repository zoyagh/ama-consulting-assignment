import type {AppProps} from 'next/app';
// import {ni18nConfig} from '../../ni18n.config';
import wrapper from '@/store';
import {Provider} from 'react-redux';
import {useRouter} from 'next/router';
import App from '@/components/App';
import Main from '@/components/Main';
import '@/styles/globals.css';

import routeGroups from '@/assets/config/routeGroups.json';
import clsx from 'clsx';

const AppPage = ({Component, ...rest}: AppProps) => {
  const {store, props} = wrapper.useWrappedStore(rest);
  const {route} = useRouter();
  const {mainRoutes} = routeGroups;

  const isMainRoute = !!~mainRoutes.indexOf(route);

  return (
    <Provider store={store}>
      <App className='font-sans'>
        <Main className={clsx(isMainRoute && 'bg-background-primary')}>
          <Component {...props} />
        </Main>

        <div id="portal-root" className="absolute top-0 left-0 contents" style={{contain: 'layout'}}></div>
      </App>
    </Provider>
  );
};

export default AppPage;
