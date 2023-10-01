'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import {Menu} from '@mui/icons-material';
import Menuitem from '../MenuItem/Menuitem';
function Header() {
  const[close,setClose]=useState(true)
    useEffect(()=>{
      if(!close){
        onscroll=()=>{
          setClose(true)
        }
      }
    },[close])
      
  return (
    <div className={style.headerContainer}>
      <div className={style.headerLeft}>
        <Image src={'/images/Joseph_Digital_Logo (2).png'} width={200} height={100} alt='image' style={{ objectFit: 'fill' }} />
        <div className={style.headerMiddle}>
          <div className={style.HomeNavbarLink}><h3><Link href={'/'}>HOME</Link></h3></div>
          <div className={style.HomeNavbarLink}><h3><Link href={'/about'}>ABOUT</Link></h3></div>
          <div className={style.HomeNavbarLink}><h3><Link href={'/services'}>SERVICES</Link></h3></div>
          <div className={style.HomeNavbarLink}><h3><Link href={'/contact'}>CONTACT</Link></h3></div>
          <div className={style.HomeNavbarLink}><h3><Link href={'/portfolio'}>PORTFOLIO</Link></h3></div>


        </div>
      </div>
      <div className={style.headerRight}>
        <div className={style.menu_icon_container}>
          <Menu onClick={()=>setClose(!close)}/>
        </div>
        <div><h3><a href={'tel:9845637082'} >9845 637082</a></h3></div>
      </div>
        <Menuitem active={close}/>
     
    </div>
  )
}

export default Header