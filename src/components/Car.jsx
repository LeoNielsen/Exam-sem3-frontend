import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import facade from '../apiFacade';
import "../styles/DisplayCard.css"

const car = ({ isAdmin, car }) => {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        if (isAdmin) {
            facade.getDriverFromCar(car.id).then((data) => {
                setDrivers(data);
            })
        }
    }, [])

    return (
        <div className='card-container' >
            <h1>{car.name}</h1>
            {   isAdmin &&
                <h3>ID: {car.id}</h3>
            }
            <h3>Brand: {car.brand}</h3>
            <h3>Make: {car.make}</h3>
            <h3>Year: {car.year}</h3>
            <h3>Sponsor: {car.sponsor}</h3>
            <h3>Color: {car.color}</h3>

            {
                isAdmin &&
                <div>
                    <h3> ------------------------------------------</h3>
                    <h3>Drivers: </h3>
                    {drivers.map((driver) => {
                        return <h3 key={driver.id}>{driver.name}</h3>
                    })
                    }
                </div>
            }
        </div>
    )
}

export default car