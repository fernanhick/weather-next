import React from 'react'
import { useState } from 'react'
import styles from './searchbar.module.css'

function Searchbar({ handleClick, handleLocation }) {
    const [location, setLocation] = useState('')

    return (
        <form onSubmit={(e) => handleClick(e, location)}>
            <input
                className={styles.input}
                name='searchBar'
                type='text'
                onChange={(e) => handleLocation(e)}
                autoComplete='off'
            />
            <button className={styles.button}>Search</button>
        </form>
    )
}

export default Searchbar
