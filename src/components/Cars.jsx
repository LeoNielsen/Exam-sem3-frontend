import React from 'react'
import { useState, useEffect } from 'react'
import facade from '../apiFacade'
import "../styles/CardList.css"
import Car from './Car'

const cars = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        facade.fetchAllCars().then((data) => {
            setCars(data)
        })

    }, [])

    console.table(cars)

    return (
        <div className='card-list'>
            {cars.map((race) => {
                return <div key={race.id}>
                    <Car car={race} ></Car>
                </div>
            })}
        </div>
    )
}

export default cars