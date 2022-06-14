import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import facade from '../apiFacade'
import "../styles/CardList.css"
import Car from './Car'

const cars = ({isAdmin}) => {
    const navigate = useNavigate();
    const [cars, setCars] = useState([])

    useEffect(() => {
        facade.fetchAllCars().then((data) => {
            setCars(data)
        })

    }, [])

    console.table(cars)

    const onClick = (event) => {
        if (isAdmin) {
            navigate("/editcar/"+event.currentTarget.id)
        }
     }

    return (
        <div className='card-list'>
            {cars.map((race) => {
                return <div key={race.id}>
                    <Car isAdmin={isAdmin} car={race} onClick={onClick} ></Car>
                </div>
            })}
        </div>
    )
}

export default cars