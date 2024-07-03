import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="container mx-auto lg:px-20 lg:py-8">
      <Banner></Banner>
      <About></About>

      <Skills></Skills>

      <Projects></Projects>

      <Education></Education>

      <Contact></Contact>
    </div>
  );
};

export default Home;
