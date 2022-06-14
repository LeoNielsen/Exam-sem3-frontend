import React from 'react'
import { useState, useEffect } from 'react'
import facade from '../apiFacade'
import Race from './Race'
import "../styles/CardList.css"
import { useNavigate } from 'react-router-dom'

const MyRaces = () => {
    const navigate = useNavigate()
    const [races, setRaces] = useState([])

    useEffect(() => {
        const token = facade.decodeToken();
        console.log(token);

        facade.getRacesByDriver(token.sub).then((data) => {
            setRaces(data)
        })

    }, [])

    const onClick = (event) => {
        if (isAdmin) {
            navigate("/edit/" + event.currentTarget.id)
        }
    }

    console.table(races)

    return (
        <div className='card-list'>
            {races.map((race) => {
                return <div key={race.id}>
                    <Race race={race} onClick={onClick} ></Race>
                </div>
            })}
        </div>
    )
}

export default MyRaces