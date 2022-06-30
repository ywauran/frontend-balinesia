/* eslint-disable prettier/prettier */
import React from "react";
import homepage from "../assets/homepage.jpg";

const Hero = () => {
  return (
    <section>
      <section id="beranda">
        <div className="w-full h-screen relative">
          <img
            src={homepage}
            alt="Bali images"
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-transparent via-transparent to-black"></div>
          <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-theme1">
            <h1 className="font-black text-5xl">
              Bali<span className="text-theme2">nesia</span>
            </h1>
            <p className="text-base mx-5">
              Aplikasi Berbasis Website Sebagai Sarana Rekomendasi Destinasi
              Wisata Di Provinsi Bali
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
