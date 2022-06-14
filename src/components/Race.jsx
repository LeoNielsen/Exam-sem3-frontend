import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import facade from '../apiFacade';
import "../styles/DisplayCard.css"

const Race = ({ isAdmin, race, onClick }) => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        facade.getCarsFromRace(race.id).then((data) => {
            setCars(data)
        })
    }, [])

    return (
        <div>
            {isAdmin ?
                (<div className='card-container' style={{cursor: 'pointer'}} id={race.id} onClick={onClick} >
                    <h1>{race.name}</h1>
                    <h3> ID: {race.id}</h3>
                    <h3> Location: {race.location}</h3>
                    <h3> Date: {race.startDate}</h3>
                    <h3> Duration: {race.duration}</h3>
                    <h3> ------------------------------------------</h3>
                    <h3>Cars: </h3>
                    <div>
                        {cars.map((car) => {
                            return <h4 key={car.id}>{car.name}</h4>
                        })}
                    </div>
                </div>) :
                (<div className='card-container'  id={race.id} onClick={onClick} >
                    <h1>{race.name}</h1>
                    <h3> Location: {race.location}</h3>
                    <h3> Date: {race.startDate}</h3>
                    <h3> Duration: {race.duration}</h3>
                    <h3> ------------------------------------------</h3>
                    <h3>Cars: </h3>
                    <div>
                        {cars.map((car) => {
                            return <h4 key={car.id}>{car.name}</h4>
                        })}
                    </div>
                </div>)

            }

        </div>
    )
}


export default Race