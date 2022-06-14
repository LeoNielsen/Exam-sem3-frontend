import React from 'react'
import { useState, useEffect } from 'react'
import facade from '../apiFacade'
import Race from './Race'
import "../styles/CardList.css"
import { useNavigate } from 'react-router-dom'

const Races = ({ isAdmin }) => {

    const navigate = useNavigate()
    const [races, setRaces] = useState([])

    useEffect(() => {
        facade.fetchAllRaces().then((data) => {
            setRaces(data)
        })
    }, [])

    const onClick = (event) => {
       if (isAdmin) {
           navigate("/edit/"+event.currentTarget.id)
       }
    }

    console.table(races)

    return (
        <div className='card-list'>
            {races.map((race) => {
                return <div key={race.id}>
                    <Race isAdmin={isAdmin} race={race} onClick={onClick} ></Race>
                </div>
            })}
        </div>
    )
}

export default Races