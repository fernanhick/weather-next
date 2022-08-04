import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Searchbar from '../utils/Searchbar'

export default function Home() {
    const [data, setData] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`

    // const geoCodeURL = `curl -X POST -d locate="415 C'WEALTH AVE WEST Singapore" \ -d geoit="XML" \ https://geocode.xyz`

    const [location, setLocation] = useState('')
    const geoCodeURL = `https://geocode.xyz/${location}?json=1`

    useEffect(() => {
        axios.get(geoCodeURL).then((response) => console.log(response))

        setLatitude(38.58)
        setLongitude(12.34)
    }, [location])
    useEffect(() => {
        //   axios.get(geoCodeURL).then((response) => console.log(response))

        axios
            .get(url)
            //.then((res) => res.json())
            .then((dat) => console.log(dat.data))
    }, [])

    const handleClick = (event, num) => {
        event.preventDefault()
        setLocation(num)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Weather Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <Searchbar handleClick={handleClick} />
                <p> {!location ? 'No search' : `${location}`}</p>
            </main>

            <footer className={styles.footer}>This is the footer</footer>
        </div>
    )
}
