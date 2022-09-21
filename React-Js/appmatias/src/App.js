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
       
    </div>
  );
}

export default App;