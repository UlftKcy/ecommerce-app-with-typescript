import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import CreateProduct from "../pages/CreateProduct";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/create" element={<CreateProduct/>}/>
                <Route path="/product/:id" element={<ProductDetail/>}/>
            </Routes>
        </Router>
    )
};

export default AppRouter;
