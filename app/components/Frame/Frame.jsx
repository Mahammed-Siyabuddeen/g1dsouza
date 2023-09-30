import Image from 'next/image'
import React from 'react'
import style from './style.module.css'

function Frame() {
  return (
    <div className={style.frame_container}>
        <div className={style.frame_header}>
            <h2>Joseph Frames</h2>
        </div>
        <div className={style.frame_content_section}>
            <div className={style.frame_content_left}>
                <Image src='/images/Joseph_Business_Card_Bk.jpg' alt='joseph frames' fill={true} sizes={'(max-width:768px) 400px,400px'}/>
            </div>
            <div className={style.frame_content_right}>
                <h3>&#34;Unlock the Magic of Memories with Our Interactive Polaroid-Style Photo Frame! 📸✨</h3>
                <p>we&#39;re about creating lasting memories. Our Polaroid-style photo frames add a touch of nostalgia and charm to your cherished moments. Whether you&#39;re sharing travel adventures, celebrating special occasions, or showcasing products, we&#39;ve got you covered</p>
                <p>We provide frames wholesale, making it easier than ever to add a vintage flair to your photos or product displays. Enjoy the cost savings without compromising on quality or style.</p>
            </div>
        </div>
    </div>
  )
}

export default Frame