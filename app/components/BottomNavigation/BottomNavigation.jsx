import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { Home,Person,Details,Info,Collections } from '@mui/icons-material';

function BottomNavigationComponent() {
    const[value, setValue] = useState()
    const router=useRouter()
    const handleClick=(rout)=>{
            router.push(rout)
    }
    return (
        <Paper elevation={3}  sx={{position: 'fixed', bottom: '15px', left: '10px', right: '10px',zIndex:99999,borderRadius:'13px' }} >
        <BottomNavigation
        sx={{borderRadius:'13px'}}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction onClick={()=>handleClick('/')} label='Home' icon={<Home />} />
            <BottomNavigationAction onClick={()=>handleClick('/about')} label="About" icon={<Info />} />
            <BottomNavigationAction onClick={()=>handleClick('/services')} label="Services" icon={<Details/>} />
            <BottomNavigationAction onClick={()=>handleClick('/contact')} label="Contact" icon={<Person />} />
            <BottomNavigationAction onClick={()=>handleClick('/portfolio')} label="Portfolio" icon={<Collections />} />

        </BottomNavigation>
        </Paper>
    )
}

export default BottomNavigationComponent