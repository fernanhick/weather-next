import React from 'react'
import { useState } from 'react'

function Searchbar({ handleClick }) {
    const [location, setLocation] = useState('')

    const handleLocation = (e) => {
        e.preventDefault()
        setLocation(e.target.value)
    }

    return (
        <form onSubmit={(e) => handleClick(e, location)}>
            <input name='searchBar' type='text' onChange={handleLocation} />
            <button>Search</button>
        </form>
    )
}

export default Searchbar
