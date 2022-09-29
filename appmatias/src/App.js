import React from 'react'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
 import Button from './components/Button/Button'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <div id="1" className="App">
      
        <Navbar />
        <ItemListContainer greeting={'Nuestros productos'}/>
       <img src ="https://static.wixstatic.com/media/d1ee5b_2ca577cb4f59414289ae98d42633bb9b~mv2.png/v1/fill/w_2500,h_2500,al_c/d1ee5b_2ca577cb4f59414289ae98d42633bb9b~mv2.png " width="250" height="250"alt="barrica" />
    </div>
  );
}
 
export default App;