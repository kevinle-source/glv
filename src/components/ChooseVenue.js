import React from 'react'
import './chooseVenue.css'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import { actionCreators } from '../state/index';

export default function ChooseVenue() {

    const dispatch = useDispatch()
    const {changeFrame} = bindActionCreators(actionCreators, dispatch)

    const onClickHandler = (event) => {
        changeFrame(event.target.getAttribute('data-next'))
    }
    
    return (
        <div className='venue-options-container'>
            <label className='prompt'>Choose your venue.</label>
            <ul className='venue-ul'>
                <li className='venue-li' value='Goodfellows' data-next='select-service' onClick={onClickHandler}>
                    Goodfellows
                </li>
                <li className='venue-li' value="He's Not Here" data-next='select-service'>
                    He's Not Here
                </li>
            </ul>
        </div>
    )
}
