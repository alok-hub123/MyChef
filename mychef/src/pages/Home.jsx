import React from 'react'
import LandingPage from '../component/LandingPage'
import TodaySpecial from '../component/TodaySpecial'
import FrameSlider from '../component/FrameSlider'
import SearchBox from '../component/SearchBox'
import Line from '../component/Line'

function Home() {
    return (
        <>
            <div>
                <LandingPage />
                <TodaySpecial />
                <FrameSlider />
                <SearchBox />
                <Line />
            </div>
        </>
    )
}

export default Home
