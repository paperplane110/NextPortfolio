import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from "../components/Layout";
import {NextUIProvider} from "@nextui-org/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )
}

export default MyApp
