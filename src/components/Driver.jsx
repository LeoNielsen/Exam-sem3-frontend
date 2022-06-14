import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import facade from '../apiFacade';
import "../styles/DisplayCard.css"

const Driver = ({ isAdmin, driver, onClick }) => {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        if (isAdmin) {

        }
    }, [])

    return (
        <div>
            {
                isAdmin ? (
                    <div className='card-container' id={driver.id} style={{ cursor: 'pointer' }} onClick={onClick} >

                        <h1>{driver.name}</h1>
                        <h3>ID: {driver.id}</h3>
                        <h3>Birth Year: {driver.birthYear}</h3>
                        <h3>Experience: {driver.experience}</h3>
                        <h3>Gender: {driver.gender}</h3>
                        <h3>User: {driver.user}</h3>
                    </div >
                ) : (
                    <div className='card-container' id={driver.id} onClick={onClick} >

                        <h1>{driver.name}</h1>
                        <h3>Birth Year: {driver.birthYear}</h3>
                        <h3>Experience: {driver.experience}</h3>
                        <h3>Gender: {driver.gender}</h3>
                        <h3>User: {driver.user}</h3>
                    </div >)
            }
        </div>
    )
}

export default Driver