import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../containers/Layout";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
export default function App({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </Layout>
  );
}
