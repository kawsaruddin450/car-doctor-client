import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("sign out successful");
            })
            .catch(error => {
                console.log(error);
            })
    }
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/'>Services</Link></li>
        {
            user?.email ? <>
                <li><Link to='/bookings'>Bookings</Link></li>
                <li><button onClick={handleSignOut}>Log Out</button></li>
            </> :
                <li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 my-12 items-center lg:container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="">
                    <img src={logo} className='w-full' alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-error">Appointment</a>
            </div>
        </div>
    );
};

export default NavBar;