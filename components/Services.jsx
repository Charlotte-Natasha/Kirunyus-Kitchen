import React from 'react'
import css from '../styles/Services.module.css'
import Image from 'next/image'
import s1 from '../assets/food/food-16.jpeg'
// import s2 from '../assets/cakes/cake-15.jpeg'
// import s3 from '../assets/breakfast/b-5.jpeg.jpeg'

const Services = () => {
    return (
        <>
        <div className={css.heading}>
                <span>Our Services</span>
                <span>Home Cooking</span>
                <span>Catering Services</span>
                <span>Birthday/Wedding Cakes</span>
        </div>   
                {/* features */}
        <div className={css.services}>
            <div className={css.features}>
                <div className={css.wrappers}>
                    <Image src={s1} alt='' objectFit='cover' layout='intrinsic'/>
                </div>
                <span>Order Now</span>
                <span>Lets make your life easier</span>
            </div>
            <div className={css.features}>
                s2
            </div>
            <div className={css.features}>
                s3
            </div>
        </div>
            
        </>
            
    )
}

export default Services