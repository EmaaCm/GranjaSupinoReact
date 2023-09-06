import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import NavBarComponent from "../components/NavBarComponents/NavBarComponent";
import Promociones from "../pages/Promociones";


const MainRouter = () => {
    return (
            <Router>
                <NavBarComponent/>
                <Routes>    
                    <Route path="/" element={<Home/>} />
                    <Route path="/Promociones/:categoryId" element={<Promociones/>} />
                    <Route path="/item/:itemId" element={<Home/>} />
                </Routes>
            </Router>
)
}  

export default MainRouter;