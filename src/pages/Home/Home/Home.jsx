import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <div className="lg:container mx-auto">
                <Banner></Banner>
                <About></About>
            </div>
        </div>
    );
};

export default Home;