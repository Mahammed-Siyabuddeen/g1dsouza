"use client";
import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import Image from 'next/image'
import {ArrowForwardIos,ArrowBackIosOutlined}  from '@mui/icons-material';
function Banner() {
  const [slideIndex, setSlideIndex] = useState(1)

  const imagesArray = [
    {
      src: '/images/wedding21.jpg',
      title: 'wedding'
    },
    {
      src:'/images/2 (3) 2.jpg',
      title:'mvies'
    }
  ]
  let nextSlide = () => {
    if (slideIndex !== 2) {
      setSlideIndex(slideIndex + 1)
    } else {
      setSlideIndex(1)
    }
  }
  let prevSlide = () => {
    if (slideIndex === 2) {
      setSlideIndex(slideIndex - 1)
    } else {
      setSlideIndex(2)
    }
  }
  return (
    <div className={style.bannerContainer}>
      <div className={style.bannerImages}>
        <div className="bannerArrow">
          <h1 className={style.leftarrow} onClick={prevSlide}><ArrowBackIosOutlined style={{color:'#fff',fontSize:'25px'}}/></h1>
          <h1 className={style.rightarrow} onClick={nextSlide}><ArrowForwardIos style={{color:'#fff',fontSize:'25px'}}/></h1>

        </div>
        {
          imagesArray.map(({ src, title }, index) => (
            <div key={index} className={`${style.bannerImage} ${slideIndex ==index+1 ? style.bannerImageActive : ''}`}>
              <Image fill={true} src={src}  alt={title} sizes='(max-width: 768px) 100vw,100vw'/>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Banner