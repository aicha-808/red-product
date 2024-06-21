import "@/styles/globals.css";
import React from 'react';
import { AuthProvider } from '../pages/auth/context/auhContext';


const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default App;

