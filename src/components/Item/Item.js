import { Link } from "react-router-dom"
import React from "react"
import '../Item/Item.css';

const Item = ({prod}) => {
    return (
     <div className="cardd">
           <div className="overFlow">
               <img src={prod.img} alt="" className="ItemImg"/>
           </div>
           <div className="card-body">
              <h1 className="title">{prod.name}</h1>
               <h2>$ {prod.price}</h2>
               <Link className="btn btn-outline-warning" to={`/detail/${prod.id}`}>Ver detalles</Link>
          </div>
     </div>
    )
}



export default Item