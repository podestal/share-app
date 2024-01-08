import { Link } from "react-router-dom"

const Service = ({ service }) => {
  return (
    <div>
        <Link to={`/service/${service.id}`}><h3>{service.platform}</h3></Link>
        <p>$.{service.price}.00</p>
        <button>Unirte</button>
    </div>
  )
}

export default Service