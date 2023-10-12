'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './style.module.css'
import BottomNavigationComponent from '../BottomNavigation/BottomNavigation';
function Header() {
  return (
    <div>
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
          <div><h3><a href={'tel:9448437519'} >9448 437519</a></h3></div>
        </div>
      </div>
      <div className={style.bottom_navigation_container}>
        <BottomNavigationComponent />
      </div>
    </div>
  )
}

export default Header