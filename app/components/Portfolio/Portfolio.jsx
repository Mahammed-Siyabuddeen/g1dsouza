'use client';
import { Box, ImageList, ImageListItem, Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
import { useEffect } from 'react';
import style from './style.module.css'

function Portfolio() {
  const [value, setValue] = useState('All');
  const [data, setData] = useState(itemData)
  console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue=='All'){
      setData(itemData)
    }else{
      setData(itemData.filter(({ category }) => category === newValue))
    }
  };
  useEffect(() => {
    setData(itemData)
  }, [])
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
          <Tab value="Product" label="Product Shoot" />
          <Tab value="baby shoot" label="Baby Shoot" />
          <Tab value="Bride" label="Bride Shoot" />
          <Tab value="concept" label="Concept" />
          <Tab value="Engagement" label="Engagement" />
          <Tab value="Fashion" label="Fashion" />
          <Tab value="Food" label="Food" />
          <Tab value="Groom" label="Groom" />
          <Tab value="Product" label="Product" />
          <Tab value="Baptism" label="Baptism" />
          <Tab value="Birthday" label="Birthday" />

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
  },
  {
    img: '/images/2 (1).jpg',
    title: 'images',
    category:'',
  },
  {
    img: '/images/2 (3).jpg',
    title: 'images',
    cols: 2,
    category:'',
  },
  {
    img: '/images/2 (4).jpg',
    title: 'images',
    cols: 2,
    category:'',
  },
  {
    img: '/images/baby shoot.jpg',
    title: 'baby',
    category: 'baby shoot',
    rows: 2,
    cols: 2,
  },
  {
    img: '/images/fashion shoot.jpg',
    title: 'Fashion',
    category: 'Fashion',
  },
  {
    img: '/images/Baby shoots.jpg',
    category: 'baby shoot',
    title: 'baby',
  },
  
  {
    img: '/images/bride 1.jpg',
    title: 'Bride ',
    category: 'Bride',
    cols: 2,
    rows: 2,
  },
  {
    img: '/images/bride 2.jpg',
    title: 'Bride',
    category: 'Bride',

  },
  {
    img: '/images/wedding21.jpg',
    title: 'Wedding',
    category: 'Wedding',
  },
  {
    img: '/images/bride 3.jpg',
    title: 'Bride',
    category: 'Bride',
    cols: 2,
  },
  {
    img: '/images/bride 4.jpg',
    title: 'Bride',
    category: 'Bride',
  },
  {
    img: '/images/bride 5.jpg',
    category: 'Bride',
    title: 'Bride',
  },
  {
    img: '/images/concept shoot.jpg',
    category: 'concept',
    title: 'concept',
  },
  {
    img: '/images/Concept shoots.jpg',
    category: 'concept',
    title: 'concept',
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
    category: 'Food',
  },
  {
    img: '/images/groom.jpg',
    title: 'Groom',
    category: 'Groom',
  },
  {
    img: '/images/product shoot.jpg',
    title: 'Product',
    category: 'Product',
  },
  {
    img: '/images/product shoots.jpg',
    title: 'Product',
    category: 'Product',
  },
  {
    img: '/images/wedding 4.jpg',
    title: 'Wedding',
    category: 'Wedding',
  }, {
    img: '/images/wedding 11.jpg',
    title: 'Wedding',
    category: 'Wedding',
  }, {
    img: '/images/wedding 19.jpg',
    title: 'Wedding',
    category: 'Wedding',
  }, {
    img: '/images/wedding couple.jpg',
    title: 'Wedding',
    category: 'Wedding',
  },
  {
    img: '/images/Baptism.jpg',
    title: 'Baptism',
    category: 'Baptism',
  },
  {
    img: '/images/birthday shoot.jpg',
    title: 'birthday',
    category: 'Birthday',
  }

];
export default Portfolio