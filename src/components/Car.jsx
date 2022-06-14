import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import facade from '../apiFacade';
import "../styles/DisplayCard.css"

const car = ({ isAdmin, car, onClick }) => {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        if (isAdmin) {
            facade.getDriverFromCar(car.id).then((data) => {
                setDrivers(data);
            })
        }
    }, [])

    return (
        <div>
            {
                isAdmin ? (
                    <div className='card-container' id={car.id} style={{cursor: 'pointer'}} onClick={onClick} >

                        <h1>{car.name}</h1>
                        <h3>ID: {car.id}</h3>
                        <h3>Brand: {car.brand}</h3>
                        <h3>Make: {car.make}</h3>
                        <h3>Year: {car.year}</h3>
                        <h3>Sponsor: {car.sponsor}</h3>
                        <h3>Color: {car.color}</h3>

                        <div>
                            <h3> ------------------------------------------</h3>
                            <h3>Drivers: </h3>
                            {drivers.map((driver) => {
                                return <h3 key={driver.id}>{driver.name}</h3>
                            })}
                        </div>
                    </div >
                ) : (
                    <div className='card-container' id={car.id} onClick={onClick} >

                        <h1>{car.name}</h1>
                        <h3>Brand: {car.brand}</h3>
                        <h3>Make: {car.make}</h3>
                        <h3>Year: {car.year}</h3>
                        <h3>Sponsor: {car.sponsor}</h3>
                        <h3>Color: {car.color}</h3>

                        <div>
                            <h3> ------------------------------------------</h3>
                            <h3>Drivers: </h3>
                        </div>
                    </div >)
            }
        </div>
    )
}

export default car