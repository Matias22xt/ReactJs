import './Checkout.css'
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [datos, setDatos] = useState({
        name:'',
        direccion:'',
        email:'',
        verEmail:'',
        phone:'',
 });
 const handleNameChange = (event) => {
console.log(event.target.value)
setDatos({
    ...datos,
    [event.target.name] : event.target.value
   } )
 }
 const enviarDatos = (event) => {
event.preventDefault();
 }



    const { cart, total, clearCart } = useContext(CartContext)
   


    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name:'',
                    direccion:'',
                    email:'',
                    verEmail:'',
                    phone:'',
                },
                items: cart,
                total
            }
    
            console.log(objOrder)
    
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
            const { docs } = productsAddedFromFirestore
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
    
                console.log(`El id de su orden es: ${orderAdded.id}`)
                clearCart()
            } else {
                console.log('Hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Su orden se esta generando...</h1>
    }

    return (
        <>
            <h1 className='registrarse'>Registrarse</h1>
            <div class="card" onSubmit={enviarDatos}>
    <div class="card__form">
        <input type="text" name="name" onChange={handleNameChange}  placeholder="Apellido y nombre"/>
        <input type="text" name="direccion" onChange={handleNameChange} placeholder="Dirección"/>
        <input type="email" name="email" onChange={handleNameChange} placeholder="email"/>
        <input type="email" name="verEmail" onChange={handleNameChange} placeholder="email"/>
        <input type="tel" name="phone" onChange={handleNameChange} placeholder="Teléfono"/>
        <button type="submit" class="sign-up" onClick={createOrder}>Enviar</button>
    </div>
</div>
            
         
            
        </>
    )
}

export default Checkout