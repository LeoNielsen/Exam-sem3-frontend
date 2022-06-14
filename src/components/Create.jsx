import React from 'react'
import "../styles/Edit.css"
import { useState } from 'react'
import facade from '../apiFacade';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const navigate = useNavigate()
    const [data, setData] = useState({});
    const [selection, setSelection] = useState("race");

    const onChange = (event) => {
        setData({ ...data, [event.currentTarget.id]: event.target.value });
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

    const onChangeSelect = (event) => {
        setSelection(event.currentTarget.value);
        const inputFields = document.querySelectorAll("input");

        inputFields.forEach((input) => {
            input.value = "";
        })
        setData({})
    }

    const Create = (event) => {
        if (selection == "race") {
            facade.createRace(data).catch((err) => {
                if (err.status == 403) {
                    navigate("/login")
                } else if (err.status == 401) {
                    navigate("/unauthorized")
                }
            })
            setTimeout(navigate("/races"), 1000)
        }
        if (selection == "car") {
            facade.createCar(data).catch((err) => {
                if (err.status == 403) {
                    navigate("/login")
                } else if (err.status == 401) {
                    navigate("/unauthorized")
                }
            })
            const inputFields = document.querySelectorAll("input");

            inputFields.forEach((input) => {
                input.value = "";
            })
            setData({})
        }
        if (selection == "driver") {
            facade.createDriver(data).catch((err) => {
                if (err.status == 403) {
                    navigate("/login")
                } else if (err.status == 401) {
                    navigate("/unauthorized")
                }
            })

            const inputFields = document.querySelectorAll("input");
            inputFields.forEach((input) => {
                input.value = "";
            })
            setData({})
        }
    }



    const cancel = () => {
        const inputFields = document.querySelectorAll("input");
        inputFields.forEach((input) => {
            input.value = "";
        })
        setData({})
    }

    return (
        <div className='container'>
            <select id='type' onChange={onChangeSelect}>
                <option value={"race"} defaultValue>Race</option>
                <option value={"car"}>Car</option>
                <option value={"driver"}>Driver</option>
            </select>

            {
                (selection == "race") ?
                    (<form>
                        <input id='name' type="text" placeholder='Enter Race Name' onChange={onChange} />
                        <br />
                        <input id='location' type="text" placeholder='Enter Race Location' onChange={onChange} />
                        <br />
                        <br />
                        <label>Enter Start Date</label> <br />
                        <br />
                        <input id='startDate' type="date" placeholder='Enter Race Start Date' onChange={onChange} />
                        <br />
                        <input id='duration' type="text" placeholder='Enter Race Duration' onChange={onChange} />
                        <br />
                        <input id='carsId' type="text" placeholder="Enter Car ID's, Comma Separated" onChange={onChangeArray} />
                    </form>)
                    :
                    (selection == "car") ?
                        (<form>
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
                        </form>)
                        :

                        (selection == "driver") ?
                            (<form>
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
                            </form>)
                        : 
                        <></>

            }

            <button className="button" onClick={Create}>Create</button>
            <button className="button" style={{ backgroundColor: 'red' }} onClick={cancel}>Cancel</button>

        </div>
    )
}

export default Create