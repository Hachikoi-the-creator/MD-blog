import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import Prism from 'prismjs';
import '../css/prism.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;