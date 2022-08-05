import Link from 'next/link'
import React from 'react'
import Searchbar from '../utils/Searchbar'
import styles from './navbar.module.css'
function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <input className={styles.input} placeholder='search...' />
            <Searchbar />
        </nav>
    )
}

export default Navbar
