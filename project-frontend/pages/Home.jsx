import React from 'react'
import Hero from '../src/components/Hero'
import LatestCollection from '../src/components/LatestCollection'
import BestSeller from '../src/components/BestSeller'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
    </div>
  )
}

export default Home;
