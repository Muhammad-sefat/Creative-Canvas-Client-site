import slide1 from "../../assets/pexels-anntarazevich-6146655.jpg";
import slide2 from "../../assets/pexels-kseniachernaya-3980600.jpg";
import slide3 from "../../assets/pexels-2375361-16178787.jpg";
import slide4 from "../../assets/pexels-orlovamaria-4947047.jpg";
import slide5 from "../../assets/pexels-son-tung-tran-17375059-6558640.jpg";
import slide6 from "../../assets/pexels-steve-1581721.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="z-0 relative">
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        loop={true}
      >
        <SwiperSlide>
          <div className="py-5">
            <img
              className="w-full max-h-[100vh] object-center rounded-md"
              src={slide1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-5">
            <img
              className="w-full max-h-[100vh] object-centerrounded-md"
              src={slide2}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-5">
            <img
              className="w-full max-h-[100vh] object-center rounded-md"
              src={slide3}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-5">
            <img
              className="w-full max-h-[100vh] object-center rounded-md"
              src={slide4}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-5">
            <img
              className="w-full max-h-[100vh] object-center  rounded-md"
              src={slide5}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-5">
            <img
              className="w-full max-h-[100vh] object-center rounded-md"
              src={slide6}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
