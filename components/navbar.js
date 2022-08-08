import Link from 'next/link'
import React from 'react'
import Searchbar from './weatherlist/searchbar'
import styles from './navbar.module.css'
function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </nav>
    )
}

export default Navbar
