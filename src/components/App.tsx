import clsx from 'clsx';

interface AppProps extends React.PropsWithChildren {
  className?: string;
}

const App: React.FC<AppProps> = ({children, className}) => {

  return (
    <div className={clsx(className, 'flex flex-auto flex-col min-h-screen max-w-full')}>
      {children}
    </div>
  );
};

export default App;
