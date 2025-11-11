import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { AppContext } from "../Context/AppContext";


const Navbar = () => {
    const { cartCount } = useContext(AppContext);
    // const [isScrolled , setIsScrolled]=useState(false)

    // useEffect(()=>{

    //     const handleScroll=()=>{
    //         if(window.scrollY > 50){
    //             setIsScrolled(true)
    //         }
    //         else{
    //             setIsScrolled(false)
    //         }        
    //     }

    //     window.addEventListener('scroll' , handleScroll)
    //      return () =>{
    //         window.addEventListener('scroll' , handleScroll)
    //      }
    // },[])

    const navlink = <div className=" flex  md:flex-row flex-col justify-center gap-5 font-medium">
        <NavLink className={({ isActive }) => isActive ? 'text-[#D4AF37]' : 'hover:text-[#ebd797]'} to={'/'} >Home</NavLink>

        <NavLink className={({ isActive }) => isActive ? 'text-[#D4AF37]' : 'hover:text-[#ebd797]'} to={'/arrivals'} >New Arrivals</NavLink>

        <NavLink className={({ isActive }) => isActive ? 'text-[#D4AF37]' : 'hover:text-[#ebd797]'} to={'/collections'} >Collections</NavLink>

        <NavLink className={({ isActive }) => isActive ? 'text-[#D4AF37]' : 'hover:text-[#ebd797]'} to={'/cart'} >Cart</NavLink>

        <NavLink className={({ isActive }) => isActive ? 'text-[#D4AF37]' : 'hover:text-[#ebd797]'} to={'/contact'} >Contact</NavLink>
    </div>


    return (
        <div  >
            {/* navbar start */}

            <div className="navbar bg-base-100 shadow-md ">
                <div>
                    <Link to={'/'}></Link>
                </div>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navlink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold"><span className="text-blue-900">Style</span>Haven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>

               

                <div className="navbar-end flex gap-4">
                         <div className="relative">
                    <Link to="/cart">
                        <FaCartShopping className="text-2xl" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-3 bg-blue-500 text-xs rounded-full px-2 py-0.5">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
                    <Link to={'/arrivals'}  className="btn bg-[#5586be] text-white hover:bg-[#E07A5F]">Shop Now</Link>
                </div>
            </div>

            {/* navbar end */}
        </div>
    );
};

export default Navbar;