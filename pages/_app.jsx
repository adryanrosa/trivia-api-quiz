import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quizz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider
        theme={ {
          color: 'mediumseagreen',
        } }
      >
        <Component { ...pageProps } />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
