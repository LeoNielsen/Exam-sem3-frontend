import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import facade from '../apiFacade';
import "../styles/DisplayCard.css"

const Race = ({ race }) => {
    let index = 0;

    const [cars, setCars] = useState([])

    useEffect(() => {
        facade.getCarsFromRace(race.id).then((data) => {
            setCars(data)
        })
    },[])

    return (
        <div className='card-container' >
            <h1>{race.name}</h1>
            <h3> Location: {race.location}</h3>
            <h3> Date: {race.startDate}</h3>
            <h3> Duration: {race.duration}</h3>
            <h3> ------------------------------------------</h3>
            <h3>Cars: </h3>
            {cars.map((car) => {
                return <h4 key={car.id}>{car.name}</h4>
            })}
        </div>
    )
}


export default Race