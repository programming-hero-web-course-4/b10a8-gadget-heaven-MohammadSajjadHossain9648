import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner from '../Banner/Banner';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
    const location = useLocation();
    const isHomePage = (location.pathname === '/');
    const isCategoryPage = location.pathname.includes("category");
    let homePageStatus = false;
    if(isHomePage || isCategoryPage){
        homePageStatus = true;
    }

    return (
        <div className="text-black_color font_sora bg-gray-100">
            {/* navbar section */}
            {
                homePageStatus ?
                (<Banner>
                    <Navbar homePageStatus={homePageStatus}></Navbar>
                </Banner>) :
                (<Navbar homePageStatus={homePageStatus}></Navbar>)
            }

            {/* content section */}
            <Outlet></Outlet>

            {/* footer section */}
            <Footer></Footer>

            {/* toast notifications section */}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;