import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponents from './components/buttonComponents';
import NavBarComponent from './components/NavBarComponents/NavBarComponent';
import ItemListContainer from './components/ItemListContainer';



const App = () =>{


    const [count, setCount] = useState(0);
  
    const incrementarCount =() =>{
      setCount (count +1);
    }
    const decrementarCount =() =>{
      setCount (count -1);
    }

  return(
    
  <div>
    <NavBarComponent/>
    <div>
      <ItemListContainer greeting="Tienda en Mantenimiento..."/>
      <ItemListContainer greeting="Pronto estaremos activos :) " />
    </div>
  </div>
  )
}
export default App;

