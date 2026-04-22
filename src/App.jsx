import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenereMovieList from './components/GenereMovieList'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[#131520] min-h-screen w-screen'>
        <Header />
        <Slider />
        <ProductionHouse />
        <GenereMovieList />
        <Footer />
      </div>
    </>
  )
}

export default App
