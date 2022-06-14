import React from 'react'
import "../styles/Edit.css"
import { useState } from 'react'
import facade from '../apiFacade';

const Create = () => {

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

    const Create = () => {
        if (selection == "race") {
            facade.createRace(data)
        }
        if (selection == "car") {
            facade.createCar(data)
        }
        if (selection == "driver") {
            facade.createDriver(data)
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
                        <input id='location' type="text" placeholder='Enter Race Location' onChange={onChange} />
                        <br />
                        <br />
                        <label>Enter Start Date</label> <br />
                        <input id='startDate' type="date" placeholder='Enter Race Start Date' onChange={onChange} />
                        <input id='duration' type="text" placeholder='Enter Race Duration' onChange={onChange} />
                        <input id='carsId' type="text" placeholder="Enter Car ID's, Comma Separated" onChange={onChangeArray} />

                    </form>)
                    :
                    (selection == "car") ?
                        (<form>
                            <input id='name' type="text" placeholder='Enter Car Name' onChange={onChange} />
                            <input id='brand' type="text" placeholder='Enter Car Brand' onChange={onChange} />
                            <input id='make' type="text" placeholder='Enter Car Make' onChange={onChange} />
                            <input id='year' type="number" min={1950} max={2050} placeholder='Enter Car Year' onChange={onChange} />
                            <input id='sponsor' type="text" placeholder='Enter Car Sponsor' onChange={onChange} />
                            <input id='color' type="text" placeholder='Enter Car Color' onChange={onChange} />
                            <input id='driversIds' type="text" placeholder="Enter Driver ID's, Comma Separated" onChange={onChangeArray} />
                        </form>)
                        :
                        (<form>
                            <input id='name' type="text" placeholder='Enter Driver Name' onChange={onChange} />
                            <input id='birthYear' type="number" min={1900} max={2050} placeholder='Enter Driver Birth Year' onChange={onChange} />
                            <input id='experience' type="text"  placeholder='Enter Driver Experience' onChange={onChange} />
                            <input id='gender' type="text"  placeholder='Enter Driver Gender' onChange={onChange} />
                            <input id='carId' type="text"  placeholder='Enter Driver Car ID' onChange={onChange} />
                            <input id='user' type="text"  placeholder='Enter Driver user ID' onChange={onChange} />
                        </form>)

            }

            <button className="button" onClick={Create}>Create</button>
            <button className="button" style={{ backgroundColor: 'red' }} onClick={cancel}>Cancel</button>

        </div>
    )
}

export default Create