import { Link, NavLink } from "react-router";

const Navbar = () => {
    return (
        <div>
            <button className="btn btn-primary">Primary</button>
            <NavLink className={({ isActive }) => isActive ? "text-red-500" : ""}  to='/'>Home</NavLink >
            <NavLink className={({isActive}) => isActive ? "text-red-500" : ""}  to='/products'>Product</NavLink >
            <NavLink className={({isActive}) => isActive ? "text-red-500" : ""} to='/about'>About</NavLink >
            
        </div>
    );
};

export default Navbar;