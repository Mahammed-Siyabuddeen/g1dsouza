'use client';
import Image from 'next/image';
import React, { useState } from 'react'
import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup'
import { styled } from '@mui/system';
import Link from 'next/link';
function Instagram() {
    const [anchor, setAnchor] = useState(null);
    const handleClick = (event) => {
        setAnchor(anchor ? null : event.currentTarget);
    };
    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined
    return (
        <div>
            <div onClick={handleClick}>
                <Image src={'/images/josephstudio_instagram.svg'} alt='josephstudio_instagram' width={40} height={65} />
            </div>
            <Popup id={id} open={open} anchor={anchor}>
                <PopupBody>
                    <div>
                        <p><Link href={'https://www.instagram.com/josephstudio/'}>josephstudio</Link></p>
                        <p><Link href={'https://www.instagram.com/joseph_frameworks/'}>joseph_frameworks</Link></p>
                        <p><Link href={'https://www.instagram.com/g1.d.souza/'}>g1.d.souza</Link></p>
                    </div>
                </PopupBody>
            </Popup>
        </div>
    )
}
const PopupBody = styled('div')(
    ({ theme }) => `
    width: max-content;
    padding: 12px 16px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? '#f6f8fa' : '#f6f8fa'};
    background-color: ${theme.palette.mode === 'dark' ? '#f6f8fa' : '#f6f8fa'};
    box-shadow: ${theme.palette.mode === 'dark'
            ? `0px 4px 8px rgb(0 0 0 / 0.7)`
            : `0px 4px 8px rgb(0 0 0 / 0.1)`
        };
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    z-index: 1;
  `,
);

const Button = styled('button')`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    line-height: 1.5;
    // background-color:;
    color: white;
    border-radius: 8px;
    font-weight: 600;
    padding: 8px 16px;
    cursor: pointer;
    transition: all 150ms ease;
    border: none;
  
    // &:hover {
    //   background-color: red;
    // }
  
    // &:active {
    //   background-col;
    // }
  
    &:focus-visible {
      box-shadow: 0 4px 20px 0 rgb(61 71 82 / 0.1), 0 0 0 5px rgb(0 127 255 / 0.5);
      outline: none;
    }
  `;
export default Instagram