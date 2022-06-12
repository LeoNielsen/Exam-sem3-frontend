import React from 'react'
import "../styles/Edit.css"
import { useState } from 'react'

const Create = () => {

    const [data, setData] = useState({ dummy1: "", dummy2: "", dummy3: 0 });

    const onChange = (event) => {
        setData({ ...data, [event.currentTarget.id]: event.target.value });
        console.log(data);
    }

    const Create = () => {
        // use data
    }

    const cancel = () => {
        const inputFields = document.querySelectorAll("input");
        inputFields.forEach((input) => {
            input.value = "";
        })
    }

    return (
        <div className='container'>
            <form>
                <label>dummy 1 </label>
                <input id='dummy1' type="text" onChange={onChange} />
                <br />
                <label>dummy 2 </label>
                <input id='dummy2' type="text" onChange={onChange} />
                <br />
                <label>dummy 3 </label>
                <input id='dummy3' type="number" onChange={onChange} />
            </form>

            <button className="button" onClick={Create}>Create</button>
            <button className="button" style={{ backgroundColor: 'red' }} onClick={cancel}>Cancel</button>

        </div>
    )
}

export default Create