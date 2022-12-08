import React from 'react';
import './Portfolio.css';
import rathunter from '../../img/RATHUNTER.png';
// swiper lib for animation , also u have to import its css
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import digitalclock from '../../img/digitalclock.png';
import discord from '../../img/discordbot.png';
import cssportfolio from '../../img/cssportfolio.png';
import dice from '../../img/dice.png';
import drumkit from '../../img/drumkit.png';
import simon from '../../img/simon.png';
import tindog from '../../img/tindog.png';
import newsletter from '../../img/newsletter.png';
import todo from '../../img/todo.png';
import dijkstra from '../../img/dijkstra.png';
const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading recent */}

      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={dijkstra} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={todo} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={rathunter} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={discord} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={newsletter} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={tindog} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={simon} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={drumkit} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={dice} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={cssportfolio} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={digitalclock} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
