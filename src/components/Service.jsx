import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Service = ({ service }) => {

    const navigate = useNavigate()

    const handleJoin = () => {
        navigate(`/service/${service.id}`)
    }

  return (
    <div>
        <Link to={`/service/${service.id}`}><h3>{service.platform}</h3></Link>
        <p>$.{service.price}.00</p>
        <button onClick={handleJoin}>Unirte</button>
    </div>
  )
}

export default Service