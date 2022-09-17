import React from 'react'
import css from '../styles/Navbar.module.css'
import Image from 'next/image'
import Logo from '../assets/k-logo.png'
import {UilShoppingBag} from '@iconscout/react-unicons'

const Navbar = () => {
    return (
        <div className={css.container}>
            <div className={css.logo}>
                <Image src={Logo} alt='' width={100} height={100} />
                <span>Kirunyus Kitchen</span>
            </div>

            <ul className={css.menu}>
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Contacts</li>
            </ul>

            {/* cart */}
            <div className={css.cartSide}>
                <div className={css.cart}>
                    <UilShoppingBag size={35} color='#000'/>
                    <div className={css.badge}>1</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar