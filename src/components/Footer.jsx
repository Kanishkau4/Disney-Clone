import React from 'react'
import logo from '../assets/images/D+logo.svg'

const Footer = () => {
    return (
        <div className='bg-[#131520]'>
            <div className='flex justify-center gap-5'>
                <img src={logo} alt="logo" className='w-[80px] md:w-[120px]' />
            </div>
        </div>
    )
}

export default Footer