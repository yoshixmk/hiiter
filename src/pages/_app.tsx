import 'styles/globals.css';

import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useStore } from 'store';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const store = useStore();
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
