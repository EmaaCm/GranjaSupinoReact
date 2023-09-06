import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './layout/MainLayout';
import MainRouter from './Routes/MainRouter';
import Home from './pages/Home';
import NavBarComponent from './components/NavBarComponents/NavBarComponent';



const App = () =>{
  return(
  <MainLayout>
      <MainRouter/>
  </MainLayout>

  )
}
export default App;

