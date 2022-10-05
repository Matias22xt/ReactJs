import { useState,useEffect} from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom"
import Counter from '../Counter/Counter'

const ItemDetailContainer = () => {
    const[product, setProduct] = useState({})
    const[loading, settloading] = useState(true)
    const onAdd=(quantity) => {
console.log(`compraste ${quantity} unidades` );
    }

const {productId} = useParams ()

    useEffect (()=>{
getProduct(productId).then(product =>{
setProduct(product)
}).finally(() => {
    settloading(false)
})
}, [productId])

if(loading) {
    return <h1>Cargando...</h1>
}

    return(
        <div>
            <h1>Detalle de productos</h1>
            <div>
                <h1>{product.name}</h1>
                
                <h2>{product.category}</h2>
                <h3>${product.price}</h3>
                <h3>{product.description}</h3>
                <Counter initial={1} stock= {10} onAdd={onAdd}/>
            </div>
        </div>
    )
}
 export default ItemDetailContainer