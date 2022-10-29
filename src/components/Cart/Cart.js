import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h1 className='total'>No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1 className='total'>Tu Carrito de compras</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3 className='total'>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Vaciar carrito</button>
            <Link to='/checkout' className="Button">Registrarse</Link>
        </div>
    )
}

export default Cart