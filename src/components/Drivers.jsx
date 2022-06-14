import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import facade from '../apiFacade'
import "../styles/CardList.css"
import Driver from './Driver'

const Drivers = ({ isAdmin }) => {
    const navigate = useNavigate();
    const [drivers, setDrivers] = useState([])

    useEffect(() => {
        facade.fetchAllDrivers().then((data) => {
            setDrivers(data)
        })

    }, [])

    console.table(drivers)

    const onClick = (event) => {
        if (isAdmin) {
            navigate("/editdriver/" + event.currentTarget.id)
        }
    }

    return (
        <div className='card-list'>
            {drivers.map((driver) => {
                return <div key={driver.id}>
                    <Driver isAdmin={isAdmin} driver={driver} onClick={onClick} />
                </div>
            })}
        </div>
    )
}

export default Drivers