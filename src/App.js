import Contact from "./Contact";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";





function App() {
  return (
    <div>
     <NavBar />
     <Home />
     <About />
     <SocialLinks />
     <Portfolio />
    <Skills />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
