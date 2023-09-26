import Image from 'next/image'
import React from 'react'
import style from './style.module.css'
function Drive() {
  return (
    <div className={style.drive_container}>
        <div className={style.drive_content}>
            <h1>Click Here</h1>
            <Image  src="/images/Jeevan D'Souza_google_drive.svg" width={80} height={80} alt="Jeevan D'Souza google drive" />
        </div>
    </div>
  )
}

export default Drive