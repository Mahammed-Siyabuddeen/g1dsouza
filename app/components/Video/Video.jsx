'use client';
import React, { useState } from 'react'
import style from './style.module.css'
function Video() {
  const [slideIndex, setSlideIndex] = useState(1)

  const videoArray = [
    {
      src: 'https://www.youtube.com/embed/xzR0bnjoNHc?si=Da6v_vHikAAudWrn&amp;controls=0',
      title: 'wedding hightlights manglore'
    },
    {
      src: 'https://www.youtube.com/embed/0oDSCq9aU0Q?si=61ZO9LpeN7GdE208&amp;controls=0',
      title: 'wedding of sangeetha weds chethan'
    },
    {
      src: 'https://www.youtube.com/embed/Wfwq40mVkSg?si=VdDEb3acX1eecj_8&amp;controls=0',
      tilte: 'Baptism of riyan santhosh jhon'
    },
    {
      src: 'https://www.youtube.com/embed/Ki0DmqDzFzA?si=Rxs1jrA1mIYn_0kJ&amp;controls=0',
      title: 'Christian wedding highlights manglore'
    },
    {
      src: 'https://www.youtube.com/embed/KYWRAJORmp4?si=sUfZhcJ8xD1VHdsr&amp;controls=0',
      title: 'funeral ceremony '
    },

  ]
  const changeVideo = (index) => {
    setSlideIndex(index + 1)
  }
  return (
    <div className={style.video_container}>
      <div className={style.video_inner_container}>
        {
          videoArray.map(({ src, title }, index) => (
            <iframe key={index} className={`${style.video_youtube_container} ${slideIndex === index + 1 ? style.video_youtube_active : ''}`} src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          ))
        }
      </div>
      <div>
        <div className={style.roundDiv}>
          {
            Array.from({ length: 5 }).map((item, index) => (
              <div onClick={() => changeVideo(index)} key={index} className={`${style.round} ${slideIndex === index + 1 ? style.round_active : ''}`}></div>
            ))
          }
        </div>

      </div>
      <div className={style.video_content}>
        <p>Coming to the sector of Editing / Videography It's a preserving life beauty in one frame of motiing at a time<br/> <label color='gray'>#Baptism #Birthday #Events #pre- wedding #post wedding #wedding</label></p>
      </div>
    </div>
  )
}

export default Video