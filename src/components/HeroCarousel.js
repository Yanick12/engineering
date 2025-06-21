// src/components/HeroCarousel.js

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    img: "/images/hero1.jpg",
    text: "Ingénierie moderne et innovante"
  },
  {
    img: "/images/hero2.jpg",
    text: "Des solutions sur mesure"
  },
  {
    img: "/images/hero3.jpg",
    text: "Votre réussite, notre mission"
  }
];

export default function HeroCarousel() {
  return (
    <section className="hero is-fullheight is-relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-body has-text-centered"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <div style={{
                background: 'rgba(0, 0, 0, 0.5)',
                padding: '1.5rem 2rem',
                borderRadius: '12px'
              }}>
                <h1 className="title is-2 has-text-white">{slide.text}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
