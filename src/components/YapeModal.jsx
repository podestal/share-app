import React from 'react'
import OrderForm from './OrderForm'
import { deleteOrder } from '../api/api'
import { useMutation } from '@tanstack/react-query'

const YapeModal = ({ order, screenId, days, setModal, totalPrice }) => {

    const {mutate: deleteOrderMutation} = useMutation({
        mutationFn: data => deleteOrder(data),
        onSuccess: res => console.log(res)
    })

    const handelDeleteOrder = () => {
        setModal(false)
        deleteOrderMutation({ orderId:order.id })
    }

  return (
    <div className='modal-background'>
        {console.log('order from modal', order)}
        <div className='modal-container'>
            <div className='modal-img'></div>
            <p>Yapea S/.{totalPrice} a este número</p>
            <p>973-000-006</p>
            <OrderForm 
                order={order}
                screenId={screenId}
                days={days}
            />
            <button onClick={handelDeleteOrder} className='btn btn-danger'>Cancelar</button>
        </div>
    </div>
  )
}

export default YapeModal