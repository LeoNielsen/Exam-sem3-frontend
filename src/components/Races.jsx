import React from 'react'
import { useState, useEffect } from 'react'
import facade from '../apiFacade'
import Race from './Race'
import "../styles/CardList.css"

const Races = () => {

    const [races, setRaces] = useState([])

    useEffect(() => {
        facade.fetchAllRaces().then((data) => {
            setRaces(data)
        })

    }, [])

    console.table(races)

    return (
        <div className='card-list'>
            {races.map((race) => {
                return <div key={race.id}>
                    <Race race={race} ></Race>

                </div>
            })}
        </div>
    )
}

export default Races