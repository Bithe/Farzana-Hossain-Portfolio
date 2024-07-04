import portfolio from "../../assets/images/portfolio1.webp";

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-blue-500 p-4 container mx-auto lg:px-20 lg:py-8">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-2xl font-bold">
            <img className="h-8 w-auto mr-2" src={portfolio}></img>
          </a>
          <div>
            <a href="#about" className="text-white mr-4">
              About
            </a>
            <a href="#skills" className="text-white mr-4">
              Skills
            </a>
            <a href="#projects" className="text-white mr-4">
              Projects
            </a>
            <a href="#education" className="text-white mr-4">
              Education
            </a>
            <a href="#contact" className="text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

    
    </div>
  );
};

export default Navbar;
