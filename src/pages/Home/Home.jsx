import People from "../../Components/people";
import Banner from "../Banner/Banner";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <People></People>
            <Footer></Footer>
        </div>
    );
};

export default Home;