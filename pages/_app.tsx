# Ensure the global styles are imported
import '../styles/globals.css';
import type { AppProps } from 'next/app';

# Ensure the App component is defined as
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

# Ensure the App component is exported as default
export default MyApp;