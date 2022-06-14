import React from 'react'
import "../styles/Edit.css"
import { useState, useEffect } from 'react'
import facade from '../apiFacade';
import { useNavigate, useParams } from 'react-router-dom';

const EditCar = () => {
    const navigate = useNavigate();
    const params = useParams()
    const [data, setData] = useState({});
    const [old, setOld] = useState({});

    useEffect(() => {
        facade.fetchCarById(params.id).then((data) => {
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
        facade.updateCar(params.id, data).catch((err) => {
            if (err.status == 403) {
                navigate("/login")
            } else if (err.status == 401) {
                navigate("/unauthorized")
            }
        })
        navigate("/cars")
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

    const deleteCar = () => {
        facade.deleteCar(params.id).catch((err) => {
            if (err.status == 403) {
                navigate("/login")
            } else if (err.status == 401) {
                navigate("/unauthorized")
            }
        })
        setTimeout(navigate("/car"), 1000)

    }

    return (
        <div>
            <h1> Edit Race {params.id}: {old.name} </h1>
            <div className='container'>
                <form>
                    <input id='name' type="text" placeholder='Enter Car Name' onChange={onChange} />
                    <br />
                    <input id='brand' type="text" placeholder='Enter Car Brand' onChange={onChange} />
                    <br />
                    <input id='make' type="text" placeholder='Enter Car Make' onChange={onChange} />
                    <br />
                    <input id='year' type="number" min={1950} max={2050} placeholder='Enter Car Year' onChange={onChange} />
                    <br />
                    <input id='sponsor' type="text" placeholder='Enter Car Sponsor' onChange={onChange} />
                    <br />
                    <input id='color' type="text" placeholder='Enter Car Color' onChange={onChange} />
                    <br />
                    <input id='driversIds' type="text" placeholder="Enter Driver ID's, Comma Separated" onChange={onChangeArray} />
                </form>

                <button className="button" onClick={update}>Update</button>
                <button className="button" style={{ backgroundColor: 'red' }} onClick={cancel}>Cancel</button>
                <br />
                <br />
                <p style={{ color: 'darkred' }}>this button deletes {old.name}</p>
                <p style={{ color: 'darkred' }}>if you press, you can't regrets!!!</p>
                <button className="button" style={{ backgroundColor: 'red', marginTop: '10px' }} onClick={deleteCar}>Delete</button>
            </div>
        </div>
    )
}

export default EditCar