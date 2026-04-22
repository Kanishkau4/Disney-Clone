import React from 'react'
import pixar from '../assets/images/pixar.png'
import marvel from '../assets/images/marvel.png'
import national_geographic from '../assets/images/nationalG.png'
import star_wars from '../assets/images/starwar.png'
import disney from '../assets/images/disney.png'

import pixarVideo from '../assets/videos/pixar.mp4'
import marvelVideo from '../assets/videos/marvel.mp4'
import star_warsVideo from '../assets/videos/star-wars.mp4'
import disneyVideo from '../assets/videos/disney.mp4'
import national_geographicVideo from '../assets/videos/national-geographic.mp4'

const ProductionHouse = () => {
    const productionHouseList = [
        {
            id: 1,
            name: 'disney',
            image: disney,
            video: disneyVideo
        },
        {
            id: 2,
            name: 'pixar',
            image: pixar,
            video: pixarVideo
        },
        {
            id: 3,
            name: 'marvel',
            image: marvel,
            video: marvelVideo
        },
        {
            id: 4,
            name: 'star_wars',
            image: star_wars,
            video: star_warsVideo
        },
        {
            id: 5,
            name: 'national_geographic',
            image: national_geographic,
            video: national_geographicVideo
        }
    ]
    return (
        <div className='flex md:gap-5 gap-2 p-3 px-16 mb:px-16'>
            {productionHouseList.map((item) => (
                <div key={item.id} className='border-[2px] border-gray-600 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer group shadow-lg shadow-black'>
                    <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 opacity-0 group-hover:opacity-50 rounded-md' />
                    <img src={item.image} alt={item.name} className='w-full object-cover' />
                </div>
            ))}
        </div>
    )
}

export default ProductionHouse