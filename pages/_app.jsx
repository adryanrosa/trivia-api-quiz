import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';
import './reset.css';

import store from '../src/redux/store';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.neutral700};
    color: ${({ theme }) => theme.colors.neutral100};
    font-family: 'Poppins', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes['400']};
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
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Provider store={ store }>
        <ThemeProvider
          theme={ {
            colors: {
              neutral100: 'hsl(0, 0%, 100%)',
              neutral600: 'hsl(217, 28%, 15%)',
              neutral700: 'hsl(219, 30%, 18%)',
              neutral800: 'hsl(218, 28%, 13%)',
              neutral900: 'hsl(216, 53%, 9%)',
            },
            fontSizes: {
              100: '0.625rem',
              200: '0.875rem',
              300: '1rem',
              400: '1.125rem',
              500: '1.25rem',
              600: '1.375rem',
              700: '1.5rem',
              800: '1.75rem',
              900: '2rem',
            },
            fontWeights: {
              regular: 400,
              bold: 600,
            },
            breakpoints: {
              lg: '60rem',
              'x-lg': '90rem',
            },
          } }
        >
          <GlobalStyle />
          <NextNprogress
            color="hsl(198, 60%, 50%)"
            startPosition={ 0.3 }
            stopDelayMs={ 200 }
            height={ 3 }
            showOnShallow
          />
          <Component { ...pageProps } />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
