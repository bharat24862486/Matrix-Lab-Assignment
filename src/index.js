import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import ContextApiProvider from './ContextApi/ContextApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-af5p6xxstkhto7ta.us.auth0.com"
    clientId="uOaZ4RGKAVazn9OFtNVGq1TW6cYyypOe"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ContextApiProvider>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </ContextApiProvider>

  </Auth0Provider>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
