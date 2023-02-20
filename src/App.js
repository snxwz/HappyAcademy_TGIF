import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Index from "./pages/Index/index";
import NotFoundPage from "./pages/PageNotFound/pageNotFound";
import About from "./pages/About/about";
import Login from "./pages/Login/login";
import Register from "./pages/Register/regis";
import Home from "./pages/Home/home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>   
    );
}

export default App;