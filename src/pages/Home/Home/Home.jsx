import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <div className="lg:container mx-auto">
                <Banner></Banner>
                <About></About>
                <Services></Services>
                <Contact></Contact>
                <Features></Features>
            </div>
        </div>
    );
};

export default Home;