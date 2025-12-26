
import { Routes, Route } from 'react-router';
import Home from '../pages/Home/Home';
import About from '../pages/About';
import Product from '../pages/products/Product';
import MainLayout from '../layouts/MainLayout';

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route index element = {<Home />}></Route>
            <Route path='about' element={<About />}></Route> */}
              
              <Route element={<MainLayout />}>
                <Route index element={<Home />}></Route>
                <Route path='products' element={<Product />}></Route>
                <Route path='about' element={<About />}></Route>
              </Route>

        </Routes>
    );
};

export default AppRoutes;