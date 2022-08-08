import React from 'react'
import { useState } from 'react'
import styles from './searchbar.module.css'

function Searchbar({ handleClick }) {
    const [location, setLocation] = useState('')

    const handleLocation = (e) => {
        setLocation(e.target.value)
    }

    return (
        <form
            className={styles.form}
            onSubmit={(e) => handleClick(e, location)}
        >
            <input
                className={styles.input}
                name='searchBar'
                type='text'
                onChange={handleLocation}
                autoComplete='off'
            />
            <button className={styles.button}>Search</button>
        </form>
    )
}

export default Searchbar
