import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', background: 'rgb(255, 233, 160)'}}>
            <div>
                <h1>Barrica Bebidas</h1>
                <img src ="https://static.wixstatic.com/media/d1ee5b_2ca577cb4f59414289ae98d42633bb9b~mv2.png/v1/fill/w_2500,h_2500,al_c/d1ee5b_2ca577cb4f59414289ae98d42633bb9b~mv2.png " width="250" height="250"alt="barrica" />
            </div>
            <div>
                <button className='Button'>Cervezas</button>
                <button className='Button'>Vinos</button>
                <button className='Button'>Espumantes</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar