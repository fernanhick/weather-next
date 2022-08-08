import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Searchbar from './searchbar'

function WeatherHOC() {
    const [data, setData] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`

    // const geoCodeURL = `curl -X POST -d locate="415 C'WEALTH AVE WEST Singapore" \ -d geoit="XML" \ https://geocode.xyz`

    const [location, setLocation] = useState('')
    const geoCodeURL = `https://geocode.xyz/${location}?json=1`

    useEffect(() => {
        axios.get(geoCodeURL).then((response) => console.log(response.data))
    }, [location])

    const handleClick = (event, num) => {
        event.preventDefault()
        setLocation(num)
    }
    const handleLocation = (e) => {
        //        e.preventDefault()
        setLocation(e.target.value)
    }
    return (
        <div>
            {' '}
            <Searchbar
                handleClick={handleClick}
                handleLocation={handleLocation}
            />
        </div>
    )
}

export default WeatherHOC
