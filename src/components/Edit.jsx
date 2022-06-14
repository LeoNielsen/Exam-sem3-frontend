import React from 'react'
import "../styles/Edit.css"
import { useState, useEffect } from 'react'
import facade from '../apiFacade';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {

    const navigate = useNavigate();
    const params = useParams()
    const [data, setData] = useState({});
    const [old, setOld] = useState({});

    useEffect(() => {
        facade.fetchRaceById(params.id).then((data) => {
            setData(data)
            setOld(data)
        }).catch((err) => {
            if (err.status == 403) {
                navigate("/login")
            } else if (err.status == 401) {
                navigate("/unauthorized")
            }
        })
    }, [])

    const onChange = (event) => {
        setData({ ...data, [event.currentTarget.id]: event.currentTarget.value });
        console.log(data);
    }

    const onChangeArray = (event) => {
        let array = event.target.value
        array = array.replace(" ", "")
        array = array.split(",")
        console.log(array);
        setData({ ...data, [event.currentTarget.id]: array });
        console.log(data);
    }

    const update = () => {
        console.table(data)
        facade.updateRace(params.id, data).catch((err) => {
            if (err.status == 403) {
                navigate("/login")
            } else if (err.status == 401) {
                navigate("/unauthorized")
            }
        })
        navigate("/races")
    }

    const cancel = () => {
        const inputFields = document.querySelectorAll("input");
        inputFields.forEach((input) => {
            input.value = "";
        })
        facade.fetchRaceById(params.id).then((data) => {
            setData(data)
        })
    }

    const deleteRace = () => {
        facade.deleteRace(params.id).catch((err) => {
            if (err.status == 403) {
                navigate("/login")
            } else if (err.status == 401) {
                navigate("/unauthorized")
            }
        })
        setTimeout(navigate("/races"),1000)
        
    }

    return (
        <div>
            <h1> Edit Race {params.id}: {old.name} </h1>
            <div className='container'>
                <form>
                    <input id='name' type="text" placeholder='Enter Race Name' onChange={onChange} />
                    <br />
                    <input id='location' type="text" placeholder='Enter Race Location' onChange={onChange} />
                    <br />
                    <br />
                    <label>Enter Start Date</label> <br />
                    <input id='startDate' type="date" placeholder='Enter Race Start Date' onChange={onChange} />
                    <br />
                    <input id='duration' type="text" placeholder='Enter Race Duration' onChange={onChange} />
                    <br />
                    <input id='carsId' type="text" placeholder="Enter Car ID's, Comma Separated" onChange={onChangeArray} />
                </form>

                <button className="button" onClick={update}>Update</button>
                <button className="button" style={{ backgroundColor: 'red' }} onClick={cancel}>Cancel</button>
                <br/>
                <br/>
                <p style={{ color: 'darkred' }}>this button deletes {old.name}</p>
                <p style={{ color: 'darkred' }}>if you press, you can't regrets!!!</p>
                <button className="button" style={{ backgroundColor: 'red', marginTop: '10px' }} onClick={deleteRace}>Delete</button>
            </div>
        </div>
    )
}

export default Edit