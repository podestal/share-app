import React, {useState} from 'react'
import { createOrderReceipt, updateOrder, updateScreen } from '../api/api'
import { useMutation } from '@tanstack/react-query'
import useUser from '../hooks/useUser'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import PaymentConfirmPage from '../pages/PaymentConfirmPage'

const OrderForm = ({ order, screenId, days, setLoading }) => {

    const {user} = useUser()
    const [errorMsg, setErrorMsg] = useState("")
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const {mutate: createOrderReceiptMutation} = useMutation({
        mutationFn: data => createOrderReceipt(data),
        onSuccess: queryClient.invalidateQueries(['orders'])
    })

    const {mutate: updateOrderMutation} = useMutation({
        mutationFn: data => updateOrder(data),
        onSuccess: queryClient.invalidateQueries(['orders'])
    })

    const {mutate: updateScreenMutation} = useMutation({
        mutationFn: data => updateScreen(data),
        // onSuccess: queryClient.invalidateQueries(['screen']),
    })

    const [img, setImg] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        setErrorMsg("")
        console.log('order from orderform', order)
        if (!img) {
            return setErrorMsg('Necesitamos que adjuntes tu comprobante')
        }
        const formData = new FormData()
        formData.append('image', img)
        createOrderReceiptMutation({ access: user.accessToken, orderId:order.id, image:formData })
        updateOrderMutation({ access: user.accessToken, orderId:order.id, updates: {status: 'P'} }) 

        const subscribed_at = moment().format('YYYY-MM-DD')
        const due_date = moment(moment(subscribed_at).add(days, 'days').calendar()).format('YYYY-MM-DD')

        updateScreenMutation({ id: screenId, updates: {
          available: false, 
          period: order.period, 
          subscribed_at,
          due_date,
        }})
        navigate('/processing')
        
    }

  return (
    <form className='img-form' onSubmit={handleSubmit}>
        <p>{errorMsg}</p>
        <label htmlFor="files" class="btn btn-primary">Adjunta tu comprovante</label>
        <p>{img.name}</p>
        <input 
            type='file'
            onChange={e => setImg(e.target.files[0])}
            id="files"
            className='input-file'
        />
        <button className='btn btn-primary'>Enviar</button>
    </form>
  )
}

export default OrderForm