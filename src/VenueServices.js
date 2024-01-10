import React from 'react'
import './venueServices.css'

export default function VenueServices({setDisplay}) {

    const onClickHandler = (event) => {
        setDisplay(event.target.getAttribute('data-setDisplay'))
    }
    return (
        <div className='venue-services-container'>
            <label className='venue-service-label'>Select your service.</label>
            <ul className='venue-ul'>
                <li className='venue-li' value='Skip the line' data-setDisplay='service-selected' onClick={onClickHandler}>
                    Skip the line
                </li>
                <li className='venue-li' data-setDisplay='service-selected' onClick={onClickHandler}>
                    Table reservation
                </li>
            </ul>
        </div>

    )
}
