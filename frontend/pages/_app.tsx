import Head from 'next/head';
import {AppProps} from 'next/app'
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider, EmotionCache} from '@emotion/react';
import {rsdTheme} from '../styles/rsdTheme';
import createEmotionCache from '../styles/createEmotionCache';

// global CSS
import '../styles/global.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// extend Next app props interface with emotion cache
export interface MuiAppProps extends AppProps{
  emotionCache: EmotionCache
}

export default function RsdApp(props:MuiAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // console.log("RsdApp.emotionCache...", emotionCache)
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Research Software Directory</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={rsdTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
