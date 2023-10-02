
'use client';
import { Button } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import ProfileContent from './ProfileContent';
import style from './style.module.css'
function About() {
  const [isKannada, setIsKannada] = useState(true)
  const changeLanguage = () => {
    setIsKannada(!isKannada)
  }
  return (
    <div className={style.aboutContainer}>
      <div className={style.background}></div>

      <h2 className={style.about_container_h2}>About us</h2>
      <div className={style.about_inner_container}>
        <div className={style.about_profile_left}>
          <div className={style.about_profile_left_img}>
            <Image src={'/images/id profile.jpg'} alt='jeevan dsouza' width={350} height={350} />
          </div>
          <div className={style.about_profile_left_content}>
            <h2>g1.d.souza</h2>

            <h2>Photographer/Videographer</h2>
            <h3>(S.K.P.A Member)</h3>
          </div>
        </div>
        <div className={style.about_profile_right}>
          <div>
            <Button onClick={changeLanguage} variant={isKannada ? 'contained' : 'outlined'} className={style.about_profile_button}>Kannada</Button>
            <Button onClick={changeLanguage} variant={isKannada ? 'outlined' : 'contained'} className={style.about_profile_button}>English</Button>
          </div>
          <ProfileContent isKannada={isKannada} />
        </div>
      </div>
    </div>
  )
}

export default About