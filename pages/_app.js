import Head from 'next/head';
import '../styles/styles.css';
import { AnimateSharedLayout } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=5, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
        />
      </Head>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  );
}

export default MyApp;
