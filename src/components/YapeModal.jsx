import React from 'react'
import ImageForm from './ImageForm'
import { deleteOrder } from '../api/api'
import { useMutation } from '@tanstack/react-query'

const YapeModal = ({ order }) => {

    const {mutate: deleteOrderMutation} = useMutation({
        mutationFn: data => deleteOrder(data),
        onSuccess: res => console.log(res)
    })

    const handelDeleteOrder = () => {
        deleteOrderMutation({ orderId:order.id })
    }

  return (
    <div className='modal-background'>
        {console.log('order from modal', order)}
        <div className='modal-container'>
            <div className='modal-img'></div>
            <p>908-525-5111</p>
            <ImageForm 
                order={order}
            />
            <button onClick={handelDeleteOrder} className='btn btn-danger'>Cancelar</button>
        </div>
    </div>
  )
}

export default YapeModal