
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;