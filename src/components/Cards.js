import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Default styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles
import Card from './Card';
import { rankings } from '../constants';

const Cards = () => {
  return (
    <div className="slider-wrapper">
      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
      >
        {rankings.map((r) => (
          <SwiperSlide key={r.id}>
            <Card r={r} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
