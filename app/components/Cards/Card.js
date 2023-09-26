import style from './style.module.css'
import React from 'react'
import Image from 'next/image'

function Card({data}) {
  const{para,hashtag,imgUrl,altImg}=data
  return (
    <div className={style.card_container}>
      <div className={style.card_inner_container}>
        <div className={style.card_img_div}>
          <Image src={imgUrl} alt={altImg} fill={true}  sizes='(max-width: 768px) 350px,400px'/>
        </div>
        <div className={style.card_content_div}>
          <p>{para}</p>
           <p style={{color:'gray'}}>{hashtag}</p>
        </div>
      </div>
    </div>
  )
}

export default Card