import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from '../src/redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quizz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={ store }>
        <ThemeProvider
          theme={ {
            color: 'mediumseagreen',
          } }
        >
          <Component { ...pageProps } />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
