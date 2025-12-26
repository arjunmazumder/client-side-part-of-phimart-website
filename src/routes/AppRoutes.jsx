
import { Routes, Route } from 'react-router';
import Home from '../pages/Home/Home';
import About from '../pages/About';

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element = {<Home />}></Route>
            <Route path='about' element={<About />}></Route>

        </Routes>
    );
};

export default AppRoutes;