import React from 'react'
import css from '../styles/Navbar.module.css'
import Image from 'next/image'
import Logo from '../assets/k-logo.png'

const Navbar = () => {
    return (
        <div className={css.navbar}>
            <div className={css.logo}>
                <Image src={Logo} alt='' width={100} height={100} />
            </div>

            <ul className={css.menu}>
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Contacts</li>
            </ul>

            {/* cart */}
            <div className={css.cart}>
                cart
            </div>
        </div>
    )
}

export default Navbar