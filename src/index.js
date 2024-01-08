import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient , ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './App';
import "./styles/index.css";
import "./styles/fonts.css";
import { ThemeProvider } from '@emotion/react';
import theme from './mui/theme';
import { BrowserRouter } from 'react-router-dom';

import stylisRTLPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import { Provider } from 'react-redux';
import store from './redux/store';


const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHCMS_URI,
    cache: new InMemoryCache(),
}) 

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer , stylisRTLPlugin]
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    {/* <Provider store={store}> */}
                         <App  />
                    {/* </Provider> */}
                </ThemeProvider>
            </CacheProvider>
        </BrowserRouter>
    </ApolloProvider>
 
);

