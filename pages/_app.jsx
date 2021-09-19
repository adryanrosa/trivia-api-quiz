import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import store from '../src/redux/store';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.neutral700};
    color: ${({ theme }) => theme.colors.neutral100};
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3 {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

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
            colors: {
              neutral100: 'hsl(0, 0%, 100%)',
              neutral700: 'hsl(219, 30%, 18%)',
              neutral800: 'hsl(218, 28%, 13%)',
            },
            fontSizes: {
              500: '1.125rem',
            },
            fontWeights: {
              regular: 400,
              bold: 600,
            },
          } }
        >
          <GlobalStyle />
          <Component { ...pageProps } />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
