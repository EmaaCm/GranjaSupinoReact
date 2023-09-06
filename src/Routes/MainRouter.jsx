import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import Home from '../pages/Home';
import NavBarComponent from "../components/NavBarComponents/NavBarComponent";


const MainRouter = () => {
    return (
            <Router>
                <NavBarComponent/>
                <Routes>    
                    <Route path="/" element={<Home/>} />
                    <Route path="/category/:categoryId" element={<Home/>} />
                    <Route path="/item/:itemId" element={<Home/>} />
                </Routes>
            </Router>
)
}

export default MainRouter;