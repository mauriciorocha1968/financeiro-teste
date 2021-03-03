import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import GlobalStyle from '../styles/global';
import dark from '../styles/themes/dark';


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  return (

    <ThemeProvider theme={dark}>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </ThemeProvider>

    )
}

export default MyApp
