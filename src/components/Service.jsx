import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import useUser from "../hooks/useUser"

const Service = ({ service }) => {

    const navigate = useNavigate()
    const {user} = useUser()

    const handleJoin = () => {
        navigate(user ? `/service/${service.id}` : '/login')
    }

  return (
    <div className="service-container service-container-show">
        <div className="service-data">
            <Link to={user ? `/service/${service.id}` : '/login'}><h3 className="service-title">{service.platform}</h3></Link>
            <p className="service-price service-price-usd">{service.price.toFixed(2)} USD</p>
            <p className="service-price service-price-pen">{(service.price*3.7).toFixed(2)} PEN</p>
            <button className="service-btn btn btn-primary" onClick={handleJoin}>Unirte</button>
        </div>
    </div>
  )
}

export default Service