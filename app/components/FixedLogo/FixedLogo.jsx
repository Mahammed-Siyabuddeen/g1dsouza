import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './style.module.css'

function FixedLogo() {
    return (
        <div className={style.fixed_logo_container} >
            <Link href={'https://www.instagram.com/josephstudio_/'}>
                <Image src='/images/josephstudio_instagram.svg' width={40} height={50} alt='josephstudio_instagram' />
            </Link>
        </div>
    )
}

export default FixedLogo