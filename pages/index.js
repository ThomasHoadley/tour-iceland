import AppHeader from '../components/AppHeader'
import SiteContainer from '../components/SiteContainer'
import HomeContainer from '../components/home/HomeContainer'
import React from 'react';

import { GlobalProvider } from '../context/GlobalState'

export default function Home() {

  return (
    <div className="container">
      <AppHeader />
      <GlobalProvider>
        <SiteContainer>
          <HomeContainer />
        </SiteContainer>
      </GlobalProvider>

    </div>
  )
}
