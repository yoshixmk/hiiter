import '../styles/globals.css'

import { Provider } from 'react-redux'

import { useStore } from '../src/store'

function MyApp({ Component, pageProps }) {
  const store = useStore();
  return (<Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
