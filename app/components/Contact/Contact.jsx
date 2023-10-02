import React from 'react'
import { Phone, Instagram, WhatsApp, LocationOn } from '@mui/icons-material';
import style from './style.module.css'
import Link from 'next/link';

function Contact() {
    return (
        <div className={style.contact_container}>
            <h2>Contact</h2>
            <div className={style.contact_inner_container}>

                <div className={style.phone_contact}>
                    <h2>Phone</h2>
                    <div>
                        <Phone fontSize='large' />
                        <div className={style.textleft}>
                            <p><a  href={'tel:9845637082'}>9845637082</a></p>
                            <p><a href={'tel:9448437519'}>9448437519</a></p>
                            <p><a href={'tel:9449157519'}>9449157519</a></p>
                        </div>
                    </div>
                </div>
                <div className={style.whatsapp_contact}>
                    <h2>WhatsApp</h2>
                    <div>
                        <WhatsApp fontSize='large' />
                        <div className={style.textleft}>
                        <p><a href={'tel:9448437519'}>9448437519</a></p>
                        <p><a href={'tel:9845637082'}>9845637082</a></p>
                        </div>
                    </div>
                </div>
                <div className={style.instagram_contact}>
                    <h2>Instagram</h2>
                    <div>
                        <Instagram fontSize='large' />
                        <div className={style.textleft}>
                            <p><Link href={'https://www.instagram.com/josephstudio_/'}>josephstudio_</Link></p>
                            <p><Link href={'https://www.instagram.com/joseph_frameworks/'}>joseph_frameworks</Link></p>
                            <p><Link href={'https://www.instagram.com/g1.d.souza/'}>g1.d.souza</Link></p>
                        </div>
                    </div>
                </div>
                <div className={style.location_contact}>
                    <h2>Location</h2>
                    <div>
                        <LocationOn fontSize='large' />
                        <p>Joseph Studio Near Nelyadi Town,Dakshina Kannada, Karnataka, 547229</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact