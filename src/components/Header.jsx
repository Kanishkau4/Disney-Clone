import React, { useState } from 'react'
import logo from '../assets/images/D+logo.svg'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItems from './HeaderItems'

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const nav = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCHLIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]
    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex items-center gap-10'>
                <img src={logo} alt="Logo" className='w-[80px] md:w-[100px] object-cover mr-5 ml-5' />
                <div className='hidden md:flex gap-8'>
                    {nav.map((item) => (
                        <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='flex md:hidden gap-5'>
                    {nav.map((item, index) => index < 3 && (
                        <HeaderItems key={index} name={''} Icon={item.icon} />
                    ))}
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItems name={''} Icon={HiDotsVertical} />
                        {toggle && <div className='absolute bg-black p-3 border-[1px] border-gray-700 mt-3 left-80 px-5'>
                            {nav.map((item, index) => index >= 3 && (
                                <HeaderItems key={index} name={item.name} Icon={item.icon} />
                            ))}
                        </div>}
                    </div>
                </div>
            </div>
            <img src="https://images.icon-icons.com/2643/PNG/512/man_boy_people_avatar_user_person_black_skin_tone_icon_159355.png" alt="Profile" className='w-[40px] rounded-full mr-5 cursor-pointer' />
        </div>
    )
}

export default Header