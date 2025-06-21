
import 'bulma/css/bulma.min.css';
import '../styles/globals.css'; // au lieu de "@/styles/globals.css"
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
