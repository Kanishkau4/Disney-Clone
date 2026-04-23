import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'

function App() {
  return (
    <>
      <div className='bg-[#131520] min-h-screen w-screen relative'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App

