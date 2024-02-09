import React from 'react'
import { Bars } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className='spinner-container'>
        <h2>Un momento porfavor</h2>
        <Bars 
            color='#0d6efd'
        />
    </div>
  )
}

export default Spinner