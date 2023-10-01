'use client';
import React, { useState } from 'react'
import style from './style.module.css'
function Video() {
  const [slideIndex, setSlideIndex] = useState(1)

  const videoArray = [
    {
      src: 'https://www.youtube.com/embed/WhkZB1ZGQlg?si=l11-MTTmle72mRHH&amp;controls=0',
      title: 'joseph digital studio nellyadi (reopening)'
    },
    {
      src: 'https://www.youtube.com/embed/WxjJFaqDFcQ?si=y2KDphNtXtWLOclC&amp;controls=0',
      title: 'BAPTISM OF EVANIA SHYJU'
    },
    {
      src: 'https://www.youtube.com/embed/Ki0DmqDzFzA?si=Rxs1jrA1mIYn_0kJ&amp;controls=0',
      title: 'Stefanos Mathew BAPTISM '
    },
    {
      src: 'https://www.youtube.com/embed/KQIMavVohpM?si=5EaBYL2Pr9u3E1C3&amp;controls=0',
      title: 'funeral ceremony '
    },
    {
      src:'https://www.youtube.com/embed/J8zr4zG-FsI?si=fMnA7hqYPAVzdmo4&amp;controls=0',
      title: 'HOUSE WARMING highlights '
    },
    {
      src:'https://www.youtube.com/embed/5lWTcROoI2c?si=coJvp-6JBT3H8jDa&amp;controls=0',
      title: 'Engagement highlights '
    },
    {
      src:'https://www.youtube.com/embed/Ki0DmqDzFzA?si=J9zFS-MFHR_yd0lv&amp;controls=0',
      title: 'Christian wedding highlights manglore '
    },
    {
      src:'https://www.youtube.com/embed/Wfwq40mVkSg?si=x3C94d99bJgGa9uc&amp;controls=0',
      title: 'Baptism of riyan santhosh john'
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
            <iframe allow={`geolocation 'self' https://www.youtube.com https://www.youtube.com`} key={index} className={`${style.video_youtube_container} ${slideIndex === index + 1 ? style.video_youtube_active : ''}`} src={src} title={title} frameBorder="0" allowFullScreen></iframe>
          ))
        }
      </div>
      <div>
        <div className={style.roundDiv}>
          {
            Array.from({ length: 8}).map((item, index) => (
              <div onClick={() => changeVideo(index)} key={index} className={`${style.round} ${slideIndex === index + 1 ? style.round_active : ''}`}></div>
            ))
          }
        </div>

      </div>
      <div className={style.video_content}>
        <p>Coming to the sector of Editing / Videography It&#39;s a preserving life beauty in one frame of motiing at a time<br/> <label color='gray'>#Baptism #Birthday #Events #pre- wedding #post wedding #wedding</label></p>
      </div>
    </div>
  )
}

export default Video