import {useState,useEffect} from 'react'
import { getProducts} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {
    const[products,setProducts]= useState([])
     const [loading,settloading] = useState(true)
    const {categoryId} = useParams ()

    useEffect(() => {
          settloading(true)
          getProducts(categoryId).then(products=>{
            setProducts(products)
          }).finally(() => {
            settloading(false)
          } )

    },[categoryId])

     if(loading) {
      return <h1>Cargando...</h1>
     }

    return (
    <div>
       <h1>{greeting}</h1>
       <ItemList products={products}/>
    </div>
)}

export default ItemListContainer