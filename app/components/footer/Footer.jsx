
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './style.module.css'
import Instagram from '../Instagram/Instagram';

function Footer() {

    return (
        <div className={style.footer_container}>
            <div className={style.footer_inner_container}>
                <div className={style.footer_logo_section}>
                    <div className={style.footer_page_logo}>
                        <div>
                            <Image src={'/images/Joseph_Digital_Logo (2).png'} alt='josephstudio' width={200} height={150} />
                        </div>
                    </div>
                    <div className={style.footer_links_logo}>
                        <div className={style.logo_instgram}>
                            <Instagram />

                        </div>
                        <div className={style.youtube}>
                            <div >
                                <Link href={'https://www.youtube.com/@josephstudio_5705'}>
                                    <Image src={'/images/youtube_josephstudio.svg'} alt='josephstudio_youtube' width={40} height={65} />
                                </Link>
                            </div>
                        </div>
                        <div className={style.logo_whatsapp}>
                            <div>
                                <Link href={'https://wa.me/9845637082'}>
                                    <Image src={'/images/josephstudio_WhatsApp.svg'} alt='josinstagram' width={40} height={40} />
                                </Link>
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
                        <li><Link href={'/contact'}>Contact</Link></li>
                        <li><Link href={'/portfolio'}>Portfolio</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Footer