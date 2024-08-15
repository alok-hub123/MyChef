import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants/index2";

const Slider = () => {
  return (
    <div className="h-[110vh] relative mb-[10vh]">
      <div className="h-[5%] text-white mx-[6vw] mt-[5vh]">
        <h1 className="text-3xl font-bold">Try This Today</h1>
      </div>
      <img src="/Images/tomatoslice.png" alt="" className="h-[12vh] w-[6vw] absolute left-[-2vw] top-0" />
      <img src="/Images/tomatoslice.png" alt="" className="h-[10vh] w-[5vw] absolute left-[-3vw] top-[5vh]" />
      <img src="/Images/cucumber.png" alt="" className="h-[14vh] w-[10vw] absolute left-0 bottom-0" />
      <img src="/Images/juice.png" alt="" className="h-[17vh] w-[9vw] absolute right-0 top-0" />
      <img src="/Images/dinner.png" alt="" className="h-[20vh] w-[14vw] absolute right-1 bottom-[1vh]" />

      <div className="h-[95%] flex flex-wrap justify-center items-center">
        {ServiceData.map((item) => (
          <div key={item.title} className="relative shadow-lg text-white rounded-xl h-[50vh] w-[25vw] px-[2vh] overflow-hidden cursor-pointer bg-cover bg-center " >
            <img src="/Images/woodenPlate.png" alt="" className="h-full w-full inset-0 bg-cover bg-center" />
            <div className="h-[60%] w-[60%] absolute  top-[55%] left-[55%]  -translate-x-1/2 -translate-y-1/2  bg-contain bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${item.backgroundImage})`}}>
              <h1 className="text-2xl ">{item.title} </h1>
              <RxArrowTopRight className="w-[35px] h-[35px] text-white hover:text-blue-500 hover:rotate-45 duration-100" />
            </div>
            
          </div>
        ))}
      </div>

    </div>
  );
};

export default Slider;