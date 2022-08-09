import Link from 'next/link'
import React from 'react'
import Searchbar from './weatherlist/searchbar'
import styles from './navbar.module.css'
function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
