import React from 'react'
import "../styles/Edit.css"
import { useState, useEffect } from 'react'
import facade from '../apiFacade';
import { useNavigate, useParams } from 'react-router-dom';

const EditDriver = () => {
    const navigate = useNavigate();
    const params = useParams()
    const [data, setData] = useState({});
    const [old, setOld] = useState({});

    useEffect(() => {
        facade.fetchDriverById(params.id).then((data) => {
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

    const update = () => {
        console.table(data)
        facade.updateDriver(params.id, data).catch((err) => {
            if (err.status == 403) {
                navigate("/login")
            } else if (err.status == 401) {
                navigate("/unauthorized")
            }
        })
        navigate("/drivers")
    }

    const cancel = () => {
        const inputFields = document.querySelectorAll("input");
        inputFields.forEach((input) => {
            input.value = "";
        })
        facade.fetchDriverById(params.id).then((data) => {
            setData(data)
        })
    }

    const deleteDriver = () => {
        facade.deleteDriver(params.id).catch((err) => {
            if (err.status == 403) {
                navigate("/login")
            } else if (err.status == 401) {
                navigate("/unauthorized")
            }
        })
        setTimeout(navigate("/drivers"), 1000)

    }

    return (
        <div>
            <h1> Edit Race {params.id}: {old.name} </h1>
            <div className='container'>
                <form>
                    <input id='name' type="text" placeholder='Enter Driver Name' onChange={onChange} />
                    <br />
                    <input id='birthYear' type="number" min={1900} max={2050} placeholder='Enter Driver Birth Year' onChange={onChange} />
                    <br />
                    <input id='experience' type="text" placeholder='Enter Driver Experience' onChange={onChange} />
                    <br />
                    <input id='gender' type="text" placeholder='Enter Driver Gender' onChange={onChange} />
                    <br />
                    <input id='carId' type="text" placeholder='Enter Driver Car ID' onChange={onChange} />
                    <br />
                    <input id='user' type="text" placeholder='Enter Driver username' onChange={onChange} />
                </form>

                <button className="button" onClick={update}>Update</button>
                <button className="button" style={{ backgroundColor: 'red' }} onClick={cancel}>Cancel</button>
                <br />
                <br />
                <p style={{ color: 'darkred' }}>this button deletes {old.name}</p>
                <p style={{ color: 'darkred' }}>if you press, you can't regrets!!!</p>
                <button className="button" style={{ backgroundColor: 'red', marginTop: '10px' }} onClick={deleteDriver}>Delete</button>
            </div>
        </div>
    )
}

export default EditDriver