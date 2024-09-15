import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from "react-player";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { RxArrowTopRight } from 'react-icons/rx';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { ServiceData } from '../constants/index';

export default function FrameSlider() {
    return (
        <> 
        {/* Main wrapper for full height and background setup */}
        <div className='relative h-[100vh] bg-no-repeat bg-bottom bg-cover'>
            
            {/* Video Background */}
            <div className='absolute inset-0'>
                <video className='w-full h-full object-cover' autoPlay loop muted>
                    <source src='../Videos/bgVideo.mp4' type="video/mp4" />
                </video>
            </div>

            {/* Foreground content */}
            <div className="absolute inset-0 z-10 flex flex-col">
                
                {/* Header */}
                <div className="text-white ml-[5vw] pt-[10vh]">
                    <h1 className="text-3xl font-bold">See What Others Are Having</h1>
                </div>
                
                {/* Swiper Container */}
                <div className="flex items-center justify-center h-full" >
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper z-20"
                    >
                        {ServiceData.map((item) => (
                            <SwiperSlide key={item.title}>
                                <div 
                                    className="h-[50vh] w-[20vw] group relative text-white rounded-xl px-6 py-8 m-[5vw] overflow-hidden cursor-pointer bg-cover bg-center" 
                                    style={{ backgroundImage: `url(${item.backgroundImage})` }} 
                                >
                                    <div className="absolute inset-0 opacity-10 group-hover:opacity-50" />
                                    <div className="relative flex flex-col gap-3">
                                        <item.icon className="text-orange-400 group-hover:text-orange-600 w-[32px] h-[32px]" />
                                        <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                                        <p className="lg:text-[18px]">{item.content}</p>
                                    </div>
                                    <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-orange-500 group-hover:rotate-45 duration-100" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
        </>
    );
}
