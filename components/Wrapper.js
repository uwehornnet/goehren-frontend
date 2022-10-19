import Header from "../partials/Header";
import Footer from "../partials/Footer";

const Wrapper = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Wrapper;
