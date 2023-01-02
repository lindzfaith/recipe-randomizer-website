import React from 'react';

import { Layout } from '../components';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
