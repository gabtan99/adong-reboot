import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "../styles/spinner.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
