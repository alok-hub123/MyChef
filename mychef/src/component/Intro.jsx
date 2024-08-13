import React from 'react'

function Intro() {
    return (
        <>

            <div className='h-[80vh] w-full bg-black flex relative rounded-3xl'>
                <img src="../public/Images/plateBg.png" alt="" className='h-full w-[70%] rounded-l-3xl' />
                <p className='h-[50vh] w-[25vw] text-white text-2xl absolute top-[25vh] right-[20vw] leading-[4vh] '>Celebrate the rich diversity of Indian cuisine with our platform,
                    where every recipe is a tribute to the love and passion Indians have for their food.
                    From timeless classics to modern twists, explore the flavors that define our culture and heritage.
                </p>
                <img src="/Images/leaf.png" alt="" className='w-[25%] h-full' />
            </div>
        </>
    )
}

export default Intro
