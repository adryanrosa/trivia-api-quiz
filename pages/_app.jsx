import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quizz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component { ...pageProps } />
    </>
  );
}

export default MyApp;
