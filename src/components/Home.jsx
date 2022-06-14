import React from 'react'
import "../styles/Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const onClick = (ev) => {
    navigate(ev.currentTarget.id)
  }

  return (
    <div className='main'>
            <div className='main-container'>
              <div style={{ gridTemplateRows: "60% auto" }}>
              </div>
            <div className='section' style={{ gridTemplateRows: "60% auto" }}>

                <div className='header'>
                  <h1>RaceManager</h1>
                  <h2>Welcome To Race Manager </h2>
                </div>

                <div className='content' style={{ gridTemplateRows: "60% auto" }}>
                  {<button id='races' className='btn-lightpurple' style={{ maxWidth: "200px" }}  onClick={onClick}>See All Races</button> }
                  <button id='cars' className='btn-purple' style={{ maxWidth: "200px" }} onClick={onClick}>See All Cars</button>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Home