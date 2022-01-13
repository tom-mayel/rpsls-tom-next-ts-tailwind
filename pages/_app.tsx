import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useReducer } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
