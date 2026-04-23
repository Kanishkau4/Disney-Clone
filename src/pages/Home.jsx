import React from 'react'
import Slider from '../components/Slider'
import ProductionHouse from '../components/ProductionHouse'
import GenereMovieList from '../components/GenereMovieList'

const Home = () => {
  return (
    <div>
      <Slider />
      <ProductionHouse />
      <GenereMovieList />
    </div>
  )
}

export default Home
