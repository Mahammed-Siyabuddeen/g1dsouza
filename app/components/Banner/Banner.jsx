"use client";
import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import Image from 'next/image'
import { ArrowForwardIos, ArrowBackIosOutlined } from '@mui/icons-material';
function Banner() {
  const [slideIndex, setSlideIndex] = useState(1)


  let nextSlide = () => {
    if (slideIndex !== 8) {
      setSlideIndex(slideIndex + 1)
    } else {
      setSlideIndex(1)
    }
  }
  let prevSlide = () => {

    if (slideIndex === 1) {
      setSlideIndex(8)
    } else {
      setSlideIndex(slideIndex - 1)
    }
  }
  return (
    <div className={style.bannerContainer}>
      <div className={style.bannerImages}>
        <div className="bannerArrow">
          <h1 className={style.leftarrow} onClick={prevSlide}><ArrowBackIosOutlined style={{ color: '#fff', fontSize: '25px' }} /></h1>
          <h1 className={style.rightarrow} onClick={nextSlide}><ArrowForwardIos style={{ color: '#fff', fontSize: '25px' }} /></h1>

        </div>
        {
          imagesArray.map(({ src, title }, index) => (
            <div key={index} className={`${style.bannerImage} ${slideIndex == index + 1 ? style.bannerImageActive : ''}`}>
              <Image fill={true} src={src} alt={title} sizes='(max-width: 768px) 600px,100vw' />
            </div>
          ))
        }

      </div>
    </div>
  )
}
const imagesArray = [

  {
    src: '/images/background_img.jpg',
    title: 'wedding'
  },
  {
    src: '/images/background_img1.jpg',
    title: 'wedding'
  },
  {
    src: '/images/background_img2.jpg',
    title: 'wedding'
  },
  {
    src: '/images/background_img3.jpg',
    title: 'wedding'
  },
  {
    src: '/images/background_img4.jpg',
    title: 'wedding'
  },
  {
    src: '/images/background_img6.jpg',
    title: 'wedding'
  },
  {
    src: '/images/background_img5.jpg',
    title: 'wedding'
  },
  {
    src: '/images/background_img8.jpg',
    title: 'wedding'
  },

]
export default Banner