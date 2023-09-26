
'use client';
import { Button } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import ProfileContent from './ProfileContent';
import style from './style.module.css'
function About() {
  // const [readMore, setReadMore] = useState(false)
  const [isKannada, setIsKannada] = useState(false)
  // const text = `My father Joseph D'Souza, based in Nelyadi (547229) near Mangalore in Dakshina Kannada district of Karnataka, started a photography and videography studio in 1999 in Nelyadi town. I have been with him since I was a child, used the cameras of those days and got interested in photography. And then after completing studies, I joined 'Neo Film School' in Kochi, Kerala to learn about photography and gain experience with the latest and new mirrorless cameras and completed more courses on photography. Along with my father, I have been taking photos and videography of all the meetings and ceremonies at Joseph Studio, which is still in operation.
  // Now, along with all the meeting ceremonies, modelling concept photoshoots, we have also started photo frame work with the studio in 2021. I am happy to have made a well-designed frame work and achieved something in photography as well.
  // With more inspiration, I went to different cities for wedding, pre-wedding, post-wedding and other types of videos and photography and mastered the "mirrorless" camera attitude and shoot.
  // My perspective about photo and videography is that one should shoot as if there is a story and emotion in each pose, the idea that I learned in Neo Film School is 100% true. My hope is that my photography work is a testament to emotional connection, affirmation and equality.
  // Now I am able to do photography and videography independently. It is a matter of happiness for me to lead Nelyadi's 'Joseph Studio', which was started by my father since 1999, for 2 years and has won the love and appreciation of people's customers.
  // I hereby request you to contact me for photography and videography of any meeting functions.`
  // const text1 = ` PS: In my spare time if other any studio owners want to shoot photo or videos, please contact me.`
  // const text2 = `With kind regards,`
  // const displayText = () => {
  //   setReadMore(!readMore)
  // }
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
            <Image src={'/images/id profile.jpg'} alt='jeevan dsouza' width={400} height={400} />
          </div>
          <div className={style.about_profile_left_content}>
            <h2>g1.d.souza</h2>

            <h2>Photographer/Videographer</h2>
            <h3>(S.K.P.A Member)</h3>
          </div>
        </div>
        <div className={style.about_profile_right}>
          <div>
            <Button onClick={changeLanguage} variant={isKannada ? 'outlined' : 'contained'} className={style.about_profile_button}>English</Button>
            <Button onClick={changeLanguage} variant={isKannada ? 'contained' : 'outlined'} className={style.about_profile_button}>Kannada</Button>
          </div>
          <ProfileContent isKannada={isKannada} />
        </div>
      </div>
    </div>
  )
}

export default About