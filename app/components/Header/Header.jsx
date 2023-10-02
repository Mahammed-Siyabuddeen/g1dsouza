'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import {Menu} from '@mui/icons-material';
import Menuitem from '../MenuItem/Menuitem';
import { usePathname } from 'next/navigation';
function Header() {
  const[close,setClose]=useState(true)
  const router=usePathname()
    useEffect(()=>{
      if(!close){
        onscroll=()=>{
          setClose(true)
        }
      }
      
    },[close])
      useEffect(()=>{
          if(!close){
            setClose(true)
          }
      },[router])
  return (
    <div className={style.headerContainer}>
      <div className={style.headerLeft}>
        <Link href={'/'}>
        <Image src={'/images/Joseph_Digital_Logo (2).png'} width={150} height={100} alt='image' style={{ objectFit: 'cover' }} />
        </Link>
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
        <div><h3><a href={'tel:9448437519'} >9448 437519</a></h3></div>
      </div>
        <Menuitem active={close}/>
     
    </div>
  )
}

export default Header