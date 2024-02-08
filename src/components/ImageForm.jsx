import React, {useState} from 'react'
import { createOrderReceipt, updateOrder } from '../api/api'
import { useMutation } from '@tanstack/react-query'
import useUser from '../hooks/useUser'

const ImageForm = ({ order }) => {

    const {user} = useUser()

    const {mutate: createOrderReceiptMutation} = useMutation({
        mutationFn: data => createOrderReceipt(data),
        onSuccess: res => console.log(res)
    })

    const {mutate: updateOrderMutation} = useMutation({
        mutationFn: data => updateOrder(data),
        onSuccess: res => console.log(res)
    })

    const [img, setImg] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', img)
        createOrderReceiptMutation({ access: user.accessToken, orderId:order.id, image:formData })
        updateOrderMutation({ access: user.accessToken, orderId:order.id, updates: {status: 'P'} })   
    }

  return (
    <form className='img-form' onSubmit={handleSubmit}>
        <label for="files" class="btn btn-primary">Adjunta tu comprovante</label>
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

export default ImageForm