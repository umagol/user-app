import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head';

// Component
import Footer from '@/components/Footer'
import Header from '@/components/Header'
// Style
import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }: any): any {
  let pageTitle = 'My App';
  if (Component.pageTitle) {
    pageTitle = Component.pageTitle;
  }
  return <>
          <Head>
            <title>{pageTitle}</title>
          </Head>
        <Header/>
              <Component {...pageProps} />
        <Footer/>
    </>
}