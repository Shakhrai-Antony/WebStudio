import React, {useEffect, useState} from 'react'
import {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from "swiper/react";
import s from './slider.module.scss'
import './swiperSlider.scss'
import designer from '../../images/designer.png'
import react_developer from '../../images/react_developer.png'
import illustrator from '../../images/illustrator.png'
import product_designer from '../../images/product_designer.png'

const team = [
    {id: 1, value: designer, name: 'Azah Anyehi', position: 'Designer'},
    {id: 2, value: react_developer, name: 'Roelof Bekkeneks', position: 'React Developer'},
    {id: 3, value: illustrator, name: 'Leonardo Oliveira', position: 'Illustrator'},
    {id: 4, value: product_designer, name: 'Izabella Tabakova', position: 'Product Designer'},
    {id: 5, value: designer, name: 'Azah Anyehi', position: 'Designer'},
    {id: 6, value: react_developer, name: 'Roelof Bekkeneks', position: 'React Developer'},
    {id: 7, value: illustrator, name: 'Leonardo Oliveira', position: 'Illustrator'},
    {id: 8, value: product_designer, name: 'Izabella Tabakova', position: 'Product Designer'},
    {id: 9, value: designer, name: 'Azah Anyehi', position: 'Designer'},
    {id: 10, value: react_developer, name: 'Roelof Bekkeneks', position: 'React Developer'},
    {id: 11, value: illustrator, name: 'Leonardo Oliveira', position: 'Illustrator'},
    {id: 12, value: product_designer, name: 'Izabella Tabakova', position: 'Product Designer'},
]

export const SimpleSliderSection = () => {


    return (
        <section className={s.carouselSection}>
            <Swiper
                className='swiper__slider'
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={4}
                navigation={{clickable: true}}
                pagination={{clickable: false}}
                slidesPerGroup={4}
                breakpoints={{
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 8
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 8,
                        slidesPerGroup: 3
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 6,
                        slidesPerGroup: 2
                    },
                    325: {
                        slidesPerView: 1,
                        slidesPerGroup: 1
                    }

                }}

            >
                {team.map(item =>
                    <SwiperSlide key={item.id}>
                        <div className={s.carouselSection_content}>
                            <div>
                                <img src={item.value} alt={item.name}/>
                            </div>
                            <p className={s.worker_name}>{item.name}</p>
                            <p className={s.worker_position}>{item.position}</p>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </section>
    );
};