import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponents from './components/buttonComponents';
import NavBarComponent from './components/NavBarComponents/NavBarComponent';



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

<div className="contador">
    <h1>Contador</h1>
          <h2>{count}</h2>
      <ButtonComponents label="incrementar" onClickFunction={incrementarCount}/>
      <br />
      <ButtonComponents label="decrementar" onClickFunction={decrementarCount}/>
      <br />
</div>

  </div>
  )
}
export default App;

