import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './style.module.css'

function Footer() {
    return (
        <div className={style.footer_container}>
            <div className={style.footer_inner_container}>
                <div className={style.footer_logo_section}>
                    <div className={style.footer_page_logo}>
                    <div>
                        <Image src={'/images/Joseph_Digital_Logo (2).png'} alt='josephstudio' width={200} height={150}/>
                    </div>
                    </div>
                    <div className={style.footer_links_logo}>
                        <div className={style.logo_instgram}>
                            <div>
                                <Image src={'/images/josephstudio_instagram.svg'} alt='josephstudio_instagram' width={40} height={65} />
                            </div>

                        </div>
                        <div className={style.youtube}>
                            <div>
                                <Image src={'/images/youtube_josephstudio.svg'} alt='josephstudio_youtube' width={40} height={65} />
                            </div>
                        </div>
                        <div className={style.logo_whatsapp}>
                            <div>
                                <Image src={'/images/josephstudio_WhatsApp.svg'} alt='josinstagram' width={40} height={40} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className={style.footer_address_section}>
                    <h3>Location </h3>
                    <p>Joseph Studio Near Nelyadi Town,Dakshina Kannada, Karnataka, 547229</p>

                </div>
                <div className={style.footer_link_section}>
                    <h3>Other Page</h3>
                    <ul>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/about'}>About</Link></li>
                        <li><Link href={'/services'}>Services</Link></li>
                        <li><Link href={'/contact'}>contact</Link></li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer