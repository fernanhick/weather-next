import React from 'react'

function Searchbar({ location }) {
    const handleLocation = (e) => {
        location = e.target.value
        console.log(e.target.value)
    }
    const submitLocation = (e) => {
        e.preventDefault()
        console.log(location)
    }

    return (
        <form onSubmit={submitLocation}>
            <input name='searchBar' type='text' onChange={handleLocation} />
            <button>Search</button>
        </form>
    )
}

export default Searchbar
