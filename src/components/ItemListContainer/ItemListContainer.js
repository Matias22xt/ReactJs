import  './ItemListContainer.css'
import {useState,useEffect,useContext} from 'react'
import {collection, getDocs,query,where} from 'firebase/firestore'
import {db} from '../../services/firebase'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {NotificationContext} from '../../notification/Notification'



const ItemListContainer = ({ greeting }) => {
    const[products, setProducts]= useState([])
     const [loading, setLoading] = useState(true)
     const {setNotification} = useContext(NotificationContext)
    const {categoryId} = useParams ()

    useEffect(() => {
      setLoading(true)

const collectionRef = categoryId
? query(collection (db, 'products'),where('category','==',categoryId))
: collection (db, 'products')

      getDocs(collectionRef).then(response =>{
        const productsAdapted = response.docs.map(doc =>{
            const data = doc.data()
            return {id: doc.id, ...data}
        })
        setProducts(productsAdapted)
       
        })
         .catch(error=>{
               setNotification('error','No se pueden obtener los productos')
      })
      .finally(() => {
        setLoading(false)
      })
      
     
  }, [categoryId])

     if(loading) {
      return <h1 className='Titulo'>Cargando...</h1>
     }

     return (
      <div>
          <h1>{`${greeting} ${categoryId || ''}`}</h1>
      
          <ItemList products={products} />
      </div>
  )
}

export default ItemListContainer