import React from 'react'
import css from '../styles/Hero.module.css'
import Image from 'next/image'
import Cherry from '../assets/breakfast/Cherry.png'

const Hero = () => {
    return (
        <div className={css.container}>

            <div className={css.left}>
                <div className={css.ndazi}>
                    <span>Explore your taste buds.</span>
                    <Image src={Cherry} alt=''/>
                </div>

                <div className={css.hero}>
                    <span>Hi, Lilian Kirunyu here</span>
                    <span>a self-taught</span>
                    <span style={{color: "var(--red)"}}>Baker.</span>
                </div>

                <span className={css.txt}>
                    Order 3 days in advance
                </span>

                <button className={`btn ${css.btn}`}>
                    Lets Talk Food
                </button>
            </div>
            
            
            
        </div>
    )
}

export default Hero

