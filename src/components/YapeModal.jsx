import {useState} from 'react'
import OrderForm from './OrderForm'
import { deleteOrder } from '../api/api'
import { useMutation } from '@tanstack/react-query'
import { Bars } from 'react-loader-spinner'

const YapeModal = ({ order, screenId, days, setModal, totalPrice }) => {

    const [loading, setLoading] = useState(false)

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
        {!loading 
        ?
        <div className='modal-container'>
            <div className='modal-img'></div>
            <p>Yapea S/.{totalPrice} a este número</p>
            <p>973-000-006</p>
            <OrderForm 
                order={order}
                screenId={screenId}
                days={days}
                setLoading={setLoading}
            />
            <button onClick={handelDeleteOrder} className='btn btn-danger'>Cancelar</button>
        </div>
        :
        <div className='spinner-container'>
            <h2>Estamos procesando tu pago</h2>
            <Bars 
                color='#0d6efd'
            />
        </div>
        }
    </div>
  )
}

export default YapeModal