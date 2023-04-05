import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import PropTypes from 'prop-types';
import createEmotionCache from '../utility/createEmotionCache';
// import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    // <CacheProvider value={emotionCache}>
    //   <ThemeProvider theme={lightTheme}>
    //     <CssBaseline />
        <Component {...pageProps} />
    //   </ThemeProvider>
    // </CacheProvider>
  );
};

export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};