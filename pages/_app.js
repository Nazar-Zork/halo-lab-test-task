import Head from 'next/head'
import React from 'react'
import '../styles/globals.css'
import '../styles/templates.scss'

function MyApp({ Component, pageProps }) {
  return <>
          <Head>
            <title>Test Work</title>
          </Head>
          <Component {...pageProps} />
        </>
}

export default MyApp
