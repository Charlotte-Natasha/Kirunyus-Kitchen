import React from 'react'
import css from '../styles/Hero.module.css'
import Image from 'next/image'
import Cherry from '../assets/breakfast/Cherry.png'

const Hero = () => {
    return (
        <div className={css.hero}>

            <div className={css.ndazi}>
                <span>Explore your taste buds.</span>
                <Image src={Cherry} alt=''/>
            </div>
            
            <div className={css.right}>
                1
            </div>
        </div>
    )
}

export default Hero

