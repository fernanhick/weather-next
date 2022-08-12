import React from 'react'

function WeatherList({ data }) {
    console.count('render count:')
    return (
        <>
            {/*    {data &&
                data.map((loc, index) => {
                    return (
                        <div key={index}>
                            <p>{loc.city}</p>
                        </div>
                    )
                })} */}
        </>
    )
}

export default WeatherList
