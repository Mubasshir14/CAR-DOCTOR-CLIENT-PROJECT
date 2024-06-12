import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
    

    const navItems = (
        <>
            <li className="font-bold"><NavLink to='/'>Home</NavLink></li>
            <li className="font-bold"><NavLink to='/about'>About</NavLink></li>
            <li className="font-bold"><NavLink to='/login'>Login</NavLink></li>
            <li className="font-bold"><NavLink to='/services'>Services</NavLink></li>
            <li className="font-bold"><NavLink to='/blog'>Blog</NavLink></li>
            
        </>
    );

    return (
        <div className="navbar h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end class gap-6">
                <div className=" flex items-center justify-between  gap-6 font-bold text-2xl">
                  <CiShoppingCart className="btn-outline text-[#FF3811] hover:btn-accent hover:p-4 hover:rounded-full"/>
                  <CiSearch className="btn-outline text-[#FF3811] hover:btn-accent hover:p-4 hover:rounded-full"/>
                </div>
                <button className="btn btn-outline border-[#FF3811] text-[#FF3811]">Appointment</button>
            </div>
        </div>
    );
};

export default NavBar;