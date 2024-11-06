import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';

const Header = ({children}) => {
    return (
        <div className="pt-4">
            {/* banner section */}
            <Banner children={children}></Banner>

            {/* gadgets section */}
            <Gadgets></Gadgets>
        </div>
    );
};

export default Header;