import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Wrapper = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Wrapper;