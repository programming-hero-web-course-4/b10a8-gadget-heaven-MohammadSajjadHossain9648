import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Header = ({children}) => {
    return (
        <div className="pt-4">
            {/* banner section */}
            <Banner children={children}></Banner>

            {/* products section */}
            <Products></Products>
        </div>
    );
};

export default Header;