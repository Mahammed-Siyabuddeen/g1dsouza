import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './style.module.css'
function Drive() {
  return (
    <div className={style.drive_container}>
        <div className={style.drive_content}>
            <h1><Link href={'https://drive.google.com/drive/folders/1cW9Q0OJNOFnShcYBXxL9OsfZ7Ybqt0-t'}>Click Here</Link></h1>
            <Link href={'https://drive.google.com/drive/folders/1cW9Q0OJNOFnShcYBXxL9OsfZ7Ybqt0-t'}> <Image  src="/images/Jeevan D'Souza_google_drive.svg" width={80} height={80} alt="Jeevan D'Souza google drive" /></Link>
           
        </div>
    </div>
  )
}

export default Drive