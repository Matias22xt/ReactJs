import { Link } from "react-router-dom"
import React from "react"
import '../ItemList/ItemList.css';

const Item = ({prod}) => {
    return (
     <div className="card mb-3 text-center">
           <div className="overFlow">
               <img src={prod.img} alt="" className="card-img-top"/>
           </div>
           <div className="card-body">
              <h1 className="card-title">{prod.name}</h1>
               <h2>$ {prod.price}</h2>
               <Link className="btn btn-outline-warning" to={`/detail/${prod.id}`}>Ver detalles</Link>
          </div>
     </div>
    )
}

export default Item