// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselSlide from './CarouselSlide';

const HeroCarousel=() =>{
  return (
    <>
      <Swiper
        
        
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <CarouselSlide></CarouselSlide>
        </SwiperSlide>

        <SwiperSlide>
            <CarouselSlide></CarouselSlide>
        </SwiperSlide>

        <SwiperSlide>
            <CarouselSlide></CarouselSlide>
        </SwiperSlide>

        <SwiperSlide>
            <CarouselSlide></CarouselSlide>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
export default HeroCarousel
