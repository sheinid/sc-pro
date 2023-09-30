import Logo from '../../public/dark-logo.svg';
import './Navbar.scss'

const Navbar = () => {
    return <nav className='navbar'>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className='nav-profile'>
            <button>You are Pro!</button>
            <p href="">Courses</p>
            <img src="/Гигачад.jpg" alt="" />
        </div>
    </nav>;
};

export default Navbar;
