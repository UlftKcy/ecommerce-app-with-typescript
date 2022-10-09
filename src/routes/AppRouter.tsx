import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import CreateProduct from "../pages/CreateProduct";
import Home from "../pages/Home";

const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/create" element={<CreateProduct/>}/>
            </Routes>
        </Router>
    )
};

export default AppRouter;
