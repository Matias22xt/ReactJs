import './App.css';
import Button from './components/Button/Button'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { NotificationProvider } from './notification/Notification';


function App() {

  return (
    <div className="App">
  <NotificationProvider>
    <CartContextProvider>
     <BrowserRouter>
        <Navbar />
            <img src ="https://static.wixstatic.com/media/d1ee5b_2ca577cb4f59414289ae98d42633bb9b~mv2.png/v1/fill/w_2500,h_2500,al_c/d1ee5b_2ca577cb4f59414289ae98d42633bb9b~mv2.png " width="250" height="250"alt="barrica" />
             <Routes>
               <Route path='/' element= {<ItemListContainer greeting={'Nuestros productos'}/>}/>
               <Route path='/category/:categoryId' element= {<ItemListContainer greeting={'Nuestros productos'}/>}/>
                <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<h1>CART</h1>} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
      </BrowserRouter>
    </CartContextProvider>   
  </NotificationProvider>  
    </div>
  );
}
 
export default App;

