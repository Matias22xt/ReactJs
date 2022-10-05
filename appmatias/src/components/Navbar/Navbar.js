import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

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
            <li><Link to={`/category/Whisky`} className='Button'>Whisky</Link></li>
            <li><Link  to={`/category/Vinos`}className='Button'>Vinos</Link></li>
            <li> <Link  to={`/category/Espumantes`} className='Button'>Espumantes</Link></li>
          </ul>
        </li>
      </ul>
      <CartWidget />
    </div>
  </div>
 
</nav>
    )
}




export default Navbar