'use client';
import { Box, ImageList, ImageListItem, Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { useEffect } from 'react';
import style from './style.module.css'

function Portfolio() {
  const params=useSearchParams()
  const categoryParams=params.get('category')
  const [value, setValue] = useState(categoryParams||'All');
  const [data, setData] = useState(itemData)
  console.log(categoryParams,value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // if(newValue=='All'){
    //   setData(itemData)
    // }else{
    //   setData(itemData.filter(({ category }) => category === newValue))
    // }
  };
  useEffect(() => {
    console.log(value===categoryParams);
    if (value==='All'){
      console.log('fff');
      setData(itemData)
    }else{
      setData(itemData.filter(({ category }) => category === value))
    }
  }, [value])
  return (
    <div className={style.portfolio_container}>
      <div className={style.tabs_container}>
        <Tabs value={value}
          scrollButtons
          allowScrollButtonsMobile
          variant="scrollable"
          onChange={handleChange} centered >
          <Tab value="All" label="All" />
          <Tab value="Wedding" label="Wedding" />
          <Tab value="Baby Shoot" label="Baby Shoot" />
          <Tab value="Bride" label="Bride Shoot" />
          <Tab value="Concept Shoot" label="Concept" />
          <Tab value="Engagement" label="Engagement" />
          <Tab value="Fashion Shoot" label="Fashion" />
          <Tab value="Food Photography" label="Food" />
          <Tab value="Groom" label="Groom" />
          <Tab value="Product Shoot" label="Product" />
          <Tab value="Baptism" label="Baptism" />
          <Tab value="Birthday shoot" label="Birthday" />
          <Tab value='Pre-Wedding' label='Pre-Wedding'/>
          

        </Tabs>
      </div>
      <ImageList
        className={style.imgList}
        variant="quilted"
        cols={4}
        rowHeight={150}
      >
        {data.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <Image
              src={item.img}
              alt={item.title}
              loading="lazy"
              fill={true}
              sizes={'400px'}
              className={style.portfolio_img}
            />
          </ImageListItem>
        ))}
      </ImageList>

    </div >
  )
}

const itemData = [
  {
    img: '/images/2 (2).jpg',
    title: 'images',
    rows: 2,
    cols: 2,
    category:'',
  },
  {
    img: '/images/wedding 1.jpg',
    title: 'images',
    category: 'Wedding',
    rows: 2,

  },
  {
    img: '/images/2 (1).jpg',
    title: 'images',
    category:'',
    rows: 2,

  },
  {
    img: '/images/fashion shoot.jpg',
    title: 'Fashion',
    category: 'Fashion Shoot',
    rows:2,

  },
  {
    img: '/images/Baby shoots.jpg',
    category: 'Baby Shoot',
    title: 'baby',
    rows:2,
  },
  {
    img: '/images/baby shoot.jpg',
    title: 'baby',
    category: 'Baby Shoot',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/2 (3).jpg',
    title: 'images',
    rows: 4,
    cols: 2,
    category:'',
  },
  {
    img: '/images/2 (4).jpg',
    title: 'images',
    rows: 3,
    cols: 2,
    category:'',
  },
  
  {
    img: '/images/bride 1.jpg',
    title: 'Bride ',
    category: 'Bride',
    cols: 2,
    rows: 3,
  },
  {
    img: '/images/bride 2.jpg',
    title: 'Bride',
    category: 'Bride',
    rows: 2,


  },
  {
    img: '/images/wedding21.jpg',
    title: 'Wedding',
    category: 'Wedding',
  },
  {
    img: '/images/birthday shoot.jpg',
    title: 'birthday',
    category: 'Birthday shoot',
  },
  {
    img: '/images/bride 3.jpg',
    title: 'Bride',
    category: 'Bride',
    cols: 2,
    rows:2,
  },
  {
    img: '/images/bride 4.jpg',
    title: 'Bride',
    category: 'Bride',
    rows:2,

  },
  {
    img: '/images/bride 5.jpg',
    category: 'Bride',
    title: 'Bride',
    rows:2,
  },
  {
    img: '/images/concept shoot.jpg',
    category: 'Concept Shoot',
    title: 'concept',
    rows:2,

  },
  {
    img: '/images/Concept shoots.jpg',
    category: 'Concept Shoot',
    title: 'concept',
    rows:3,
    cols:2,

  },
  {
    img: '/images/engagement 1.jpg',
    title: 'Engagement',
    category: 'Engagement',
  },
  {
    img: '/images/engagement 2.jpg',
    title: 'Engagement',
    category: 'Engagement',
  },
 
  {
    img: '/images/food photography.jpg',
    title: 'Food',
    category: 'Food Photography',
  },
  {
    img: '/images/groom.jpg',
    title: 'Groom',
    category: 'Groom',
  },
  {
    img: '/images/product shoot.jpg',
    title: 'Product',
    category: 'Product Shoot',
  },
  {
    img: '/images/product shoots.jpg',
    title: 'Product',
    category: 'Product Shoot',
  },
  {
    img: '/images/wedding 4.jpg',
    title: 'Wedding',
    category: 'Wedding',
  }, {
    img: '/images/wedding 11.jpg',
    title: 'Wedding',
    category: 'Wedding',
    rows:2,

  }, {
    img: '/images/wedding 19.jpg',
    title: 'Wedding',
    category: 'Wedding',
    rows:2,
  }, {
    img: '/images/wedding couple.jpg',
    title: 'Wedding',
    category: 'Wedding',
    rows:2,
  },
  {
    img: '/images/Baptism.jpg',
    title: 'Baptism',
    category: 'Baptism',
  },
  {
    img:'/images/pre-wedding.jpg',
    title:'Pre-Wedding',
    category:'Pre-Wedding',
  },
  

];
export default  Portfolio