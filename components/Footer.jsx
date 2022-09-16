import React from 'react'
import css from '../styles/Footer.module.css'
import {UilFacebook, UilGithub, UilInstagram} from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <div className={css.footer}>
            <span></span>

            <div className={css.socials}>
                <UilFacebook size={35}/>
                <UilGithub size={35}/>
                <UilInstagram size={35}/>
            </div>
        </div>
    )
}

export default Footer