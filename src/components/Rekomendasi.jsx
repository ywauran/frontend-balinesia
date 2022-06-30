/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cards from "./Cards";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
const Rekomendasi = () => {
  const [wisata, setWisata] = useState([]);
  const getWisataRekomendasi = async () => {
    const response = await axios.get('https://backend-balinesia.herokuapp.com/api/destinations');
    const resData = response.data.data;
    const resFilter = resData.filter((res) => res.rating >= 4.5);
    const resSort = resFilter.sort(({rating: a}, {rating:b}) => b-a);
    setWisata(resSort);
  }
  
  useEffect(()=>{
    getWisataRekomendasi()
  },[])

  return (
    <section id="Rekomendasi">
      <div className="w-full min-h-[91vh] h-full bg-theme3">
        <div className="relative px-4 py-64 md:max-w-none text-center">
          <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-theme1 text-center sm:leading-none md:text-6xl lg:text-7xl">
            Rekomendasi
          </h1>
          <div className="mx-auto mt-1 text-theme1 md:mt-3 md:max-w-lg md:text-center lg:text-lg text">
            Destinasi Wisata Yang Paling Disukai
          </div>
          {/* Cards And Background Start */}
          <Swiper
        slidesPerView={1}
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 35,
          },
          1368: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        className="mySwiper flex items-center mx-auto justify-center mt-5 !p-8 "
      >
        {wisata.map((value,index)=>{
         return <SwiperSlide style={{ backgroundImage: `url('${value.picture_url}')` }} className="card-container"key={index}><Cards item={value}/></SwiperSlide>})}
      </Swiper>
          {/* Cards And Background End */}
        </div>
      </div>
    </section>
  );
};

export default Rekomendasi;