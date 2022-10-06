import React from 'react'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Button from './components/Button/Button'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {


  return (
    <div id="1" className="App">
     <BrowserRouter>
        <Navbar />
        <img src ="https://static.wixstatic.com/media/d1ee5b_2ca577cb4f59414289ae98d42633bb9b~mv2.png/v1/fill/w_2500,h_2500,al_c/d1ee5b_2ca577cb4f59414289ae98d42633bb9b~mv2.png " width="250" height="250"alt="barrica" />
           <Routes>
             <Route path='/' element= {<ItemListContainer greeting={'Nuestros productos'}/>}/>
             <Route path='/category/:categoryId' element= {<ItemListContainer greeting={'Nuestros productos'}/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
             </Routes>
             
    </BrowserRouter>
    
    </div>
  );
}
 
export default App;

