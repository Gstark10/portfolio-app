import React from 'react'
import './Portfolio.css';
import {Swiper, SwiperSlide} from "swiper/react";
import Ruby from "../../img/ruby.png";
import Ecom from "../../img/ecom.png";
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import Ecommerce from "../../img/ecommerce.png"
import Musicapp from "../../img/musicapp.png"


const Portfolio = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>

        {/* heading */}
        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
          <SwiperSlide>
            <a href="https://ruby-luf3.vercel.app/"><img src={Ruby} alt="" /></a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="https://gstarkecommerce.netlify.app/"><img src={Ecom} alt="" /></a>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ecommerce} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Musicapp} alt="" />
          </SwiperSlide>


        </Swiper>
    </div>
  )
}

export default Portfolio
