import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, EffectCoverflow } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";

const Slider = () => {
  return (
    <div className="h-[90vh] relative">
      <div className="text-white mx-[6vw] mt-[15vh]  mb-[10vh]">
        <h1 className="text-3xl font-bold">Try This Today</h1>
      </div>
      <img src="/Images/cucumber.png" alt="" className="h-[14vh] w-[10vw] absolute left-0 top-[68vh]" />
      <img src="/Images/juice.png" alt="" className="h-[17vh] w-[9vw] absolute right-0 top-[-10vh]" />
      <img src="/Images/tomatoslice.png" alt="" className="h-[10vh] w-[5vw] absolute left-[-3vw] top-[-2vh]" />
      <img src="/Images/tomatoslice.png" alt="" className="h-[12vh] w-[6vw] absolute left-[-2vw] top-[-10vh]" />
      <img src="/Images/dinner.png" alt="" className="h-[20vh] w-[14vw] absolute right-1 top-[67vh]" />

      <div className="h-[80%]">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className=" gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[50vh] w-[20vw]  overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                <div className="absolute inset-0 opacity-10 group-hover:opacity-50" />
                <div className="relative gap-3">
                  <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                  <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                  <p className="lg:text-[18px]">{item.content} </p>
                </div>
                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </div>
  );
};

export default Slider;