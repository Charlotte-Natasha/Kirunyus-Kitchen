import React from 'react'
import css from '../styles/Footer.module.css'
import {UilFacebook, UilGithub, UilInstagram} from '@iconscout/react-unicons'
import Image from 'next/image'
import Logo from '../assets/k-logo.png'

const Footer = () => {
    return (
        <div className={css.footer}>
            <a href="">Created by</a>

            <div className={css.socials}>
                <UilFacebook size={35}/>
                <UilGithub size={35}/>
                <UilInstagram size={35}/>
            </div>

            <div className={css.logo}>
                <Image src={Logo} alt='' width={100} height={100} />
                <span>Kirunyus Kitchen</span>
            </div>
        </div>
    )
}

export default Footer