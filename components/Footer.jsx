import React from 'react'
import css from '../styles/Footer.modules.css'
import {UilFacebook, UilGithub, UilInstagram} from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <div className={css.container}>
            <span></span>

            <div className={css.socials}>
                <UilFacebook/>
                <UilGithub/>
                <UilInstagram/>
            </div>
        </div>
    )
}

export default Footer