import Link from 'next/link'
import React, { useEffect } from 'react'
import style from './style.module.css'

function Menuitem({active}) {
  return (
    <ul className={`${style.menuitem_container} ${active?'':style.menuitem_container_active}`} >
        <li className={style.menuitem_list}><Link href={'/'}>HOME</Link></li>
        <li className={style.menuitem_list}><Link href={'/about'}>ABOUT</Link></li>
        <li className={style.menuitem_list}><Link href={'/services'}>SERVICES</Link></li>
        <li className={style.menuitem_list}><Link href={'/contact'}>CONTACT</Link></li>
        <li className={style.menuitem_list}><Link href={'/portfolio'}>PORTFOLIO</Link></li>


    </ul>
  )
}

export default Menuitem