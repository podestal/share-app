import {useState} from 'react'
import OrderForm from '../components/OrderForm'
import { deleteOrder } from '../api/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Bars } from 'react-loader-spinner'
import { useLocation, useNavigate } from 'react-router-dom'
import useUser from '../hooks/useUser'

const PaymentPage = () => {
    const [loading, setLoading] = useState(false)
    const queryClient = useQueryClient()
    const {order, screenId, days, totalPrice} = useLocation().state
    const {user} = useUser()
    const navigate = useNavigate()

    const {mutate: deleteOrderMutation} = useMutation({
        mutationFn: data => deleteOrder(data),
        onSuccess: queryClient.invalidateQueries(['orders'])
    })

    const handelDeleteOrder = () => {
        deleteOrderMutation({ access: user.accessToken, orderId:order.id })
        navigate('/home')
    }

  return (
    <div className='modal-background'>
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
            <h2>Estamos procesando su pago</h2>
            <Bars 
                color='#0d6efd'
            />
        </div>
        }
    </div>
  )
}

export default PaymentPage