import './App.css'
import Navbar from './component/Navbar'
import LandingPage from './component/LandingPage'
import Slider from './component/Slider'
import FrameSlider from './component/FrameSlider'
import Line from './component/Line'
import SearchBox from './component/SearchBox'
import Footer from './component/Footer'
import Intro from './component/Intro'


function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Intro />
      <Slider />
      <FrameSlider />
      <SearchBox />
      <Line />
      <Footer />
      
    </>
  )
}

export default App
