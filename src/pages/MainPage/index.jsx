import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Skill from "../../components/Skill";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
const MainPage = () => {
    return ( 
        <div>
            <Navbar />
            <Hero/>
            <Skill/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
     );
}
 
export default MainPage;