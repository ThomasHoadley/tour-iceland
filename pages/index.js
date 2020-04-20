import Head from 'next/head'
import SiteContainer from '../components/SiteContainer'
import HomeContainer from '../components/home/HomeContainer'
import React, { useEffect, useState } from 'react';

import { GlobalProvider } from '../context/GlobalState'

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Tour Iceland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalProvider>
        <SiteContainer>
          <HomeContainer />
        </SiteContainer>
      </GlobalProvider>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          height: 100%;
          width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }   
      `}</style>
    </div>
  )
}
