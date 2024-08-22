import React from 'react'
import LandingPage from '../component/LandingPage'
import Slider from '../component/Slider'
import FrameSlider from '../component/FrameSlider'
import SearchBox from '../component/SearchBox'
import Line from '../component/Line'

function Home() {
    return (
        <>
            <LandingPage />
            <Slider />
            <FrameSlider />
            <SearchBox />
            <Line />
        </>
    )
}

export default Home
