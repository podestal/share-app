import React from 'react'
import ImageForm from './ImageForm'

const YapeModal = ({ order }) => {
  return (
    <div className='modal-background'>
        {console.log('order from modal', order)}
        <div className='modal-container'>
            <div className='modal-img'></div>
            <p>908-525-5111</p>
            <ImageForm />
            <button className='btn btn-danger'>Cancelar</button>
        </div>
    </div>
  )
}

export default YapeModal