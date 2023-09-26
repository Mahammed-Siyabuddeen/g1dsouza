"use client" ;
import { Button, Paper } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import style from './style.module.css'

function Category() {
    const data = [
        {
            title:'Wedding',
            imgUrl:'/images/wedding 20.jpg'
        },
        {
            title: 'Baby Shoot',
            imgUrl:'/images/baby shoot.jpg'
        },
        {
            title: 'Birthday shoot',
            imgUrl: '/images/birthday shoot.jpg',
        }, {
            title:'Bride',
            imgUrl: '/images/bride 3.jpg',
        },
        {
            title: 'Concept Shoot',
            imgUrl: '/images/concept shoot.jpg',
        },
        {
            title:'Engagement',
            imgUrl:'/images/engagement 2.jpg',
        },
        {
            title:'Fashion Shoot',
            imgUrl:'/images/fashion shoot.jpg',
        },
        {
            title:'Food Photography',
            imgUrl:'/images/food photography.jpg',
        },
        {
            title:'Groom',
            imgUrl:'/images/groom.jpg',
        },
        {
            title:'Pre-Wedding',
            imgUrl:'/images/pre-wedding.jpg',
        },
        {
            title:'Product Shoot',
            imgUrl:'/images/product shoot.jpg',
        },
        

    ]
    const router=useRouter()
    return (
        <div className={style.category_container}>
            <div className={style.category_title_div}>
                <h2>Categories</h2>
            </div>
            <div className={style.category_inner_container}>
                {
                    data?.map(({ title, imgUrl }, index) => (
                        <Paper key={index} className={style.MuiPaperDiv} elevation={4}  style={{ overflow: 'hidden' }}>
                            <div className={style.category_card}>
                                <div className={style.category_card_imgDiv}>
                                    <Image src={imgUrl} alt={title} fill={true} sizes='(max-width: 768px) 100vw,285px'/>
                                </div>
                                <div className={style.category_card_content}>
                                    <h2>{title}</h2>
                                </div>
                            </div>
                        </Paper>
                    ))
                }
            </div>
            <div className={style.viewMorebtnDiv}>
                <Button className={style.viewMoreBtn} onClick={()=>router.push('/portfolio')} variant='contained' >View More</Button>
            </div>
        </div>
    )
}

export default Category