import Item from "../Item/Item"
import React from "react"
import './ItemList.css';

const ItemList = ({products}) => {
return (
    <div className="container  justify-content-center align-item-center h-100 w-100">
        <div className="row">
          
                {products.map(prod =>(
                      <div className="col-md-4">
                         <Item key={prod.id} prod={prod}/>
                     </div>
                        ))
                       }
           
        </div>
    </div>
   ) 
}

export default ItemList