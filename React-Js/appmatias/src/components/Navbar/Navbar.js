import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg" style={{background: 'rgb(255, 233, 160)'}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="1">Barrica Bebidas</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="1">Bienvenidos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="1">Redes</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu">
            <li><button className='Button'>Cervezas</button></li>
            <li><button className='Button'>Vinos</button></li>
            <li> <button className='Button'>Espumantes</button></li>
          </ul>
        </li>
      </ul>
      <CartWidget />
    </div>
  </div>
 
</nav>
    )
}

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


export default Navbar