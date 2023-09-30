import React from 'react'
import Card from './Card'
import style from './style.module.css'
function Cards() {
  const cardData=[
    {
      para:`Capturing the magic of joy and love 
      that have been a part of an extraordinary celebration in the wedding day`,
      hashtag:' #wedding #josephstudio',
      imgUrl:'/images/wedding21.jpg',
      altImg:'josephstudio wedding'
    },
    {
      para:`It's a past time learning of 3point light as second language
      Colors , lighting and patterns elegance, expressiveness and a sense of humor, photoshoot are one of my favourite thing to do`,
      hashtag:'#neofilmschool #g1.d.souza',
      imgUrl:`/images/card2.jpg`,
      altImg:'g1 d souza neofilmschool'

    }
  ]
  return (
    <div className={style.cards_container}>
      {
        cardData?.map((data,index)=>(
          <Card data={data} key={index}/>

        ))
      }
    </div>
  )
}

export default Cards