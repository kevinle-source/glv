import './home.css';
import ChooseVenue from './components/ChooseVenue';
import { useState } from 'react'
import VenueServices from './VenueServices';
import ServiceRegistration from './components/ServiceRegistration';
import {useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import { actionCreators } from './state/index';

export default function Home() {


  const state = useSelector((state) => state)
  console.log(state)

  let content

  if (state.frame === 'choose-venue') {
    content = <ChooseVenue/>
  }
  else if (state.frame === 'select-service') {
    content = <VenueServices/>
  }
  else if (state.frame === 'service-registration') {
    content = <ServiceRegistration/>
  }

  return (
    <div className='home'>
      {content}
    </div>
  );
}

