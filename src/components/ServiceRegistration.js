import React from 'react'
import './serviceRegistration.css'

export default function ServiceRegistration() {
  return (
    <div className='service-registration-container'>
        <div className='prompt'>Input your details</div>
        <p style={{color:'lightblue'}}>* Make sure your information matches your ID</p>
        <p style={{color:'lightblue'}}>* Confirmation sent to email</p>
        <div className='stl-input'>
            <ul className='stl-ul'>
                <li className='stl-li'>
                    <input style={{backgroundColor:'transparent',border:''}}></input>
                </li>
                <li className='stl-li'>
                    <input></input>
                </li>
            </ul>
        </div>
    </div>
  )
}
