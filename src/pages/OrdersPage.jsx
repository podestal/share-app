import Orders from '../components/Orders'

const OrdersPage = ({ order, screenId, days, setModal, totalPrice }) => {

  return (
    <div className='main-body'>
        <Orders />
    </div>
  )
}

export default OrdersPage