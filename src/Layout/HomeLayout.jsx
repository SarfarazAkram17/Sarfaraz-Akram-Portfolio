import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Showcase from "../Components/Showcase/Showcase";
import Contact from "../Components/Contact/Contact";
import Navbar from "../Components/Navbar/Navbar";
import { IoArrowUpOutline } from "react-icons/io5";
import { Link } from "react-scroll";

const HomeLayout = () => {
  return (
    <div className="xl:container mx-auto px-4">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Showcase></Showcase>
      <Contact></Contact>

      <Link
        to="home"
        smooth={true}
        className="fixed bottom-4 animate-bounce right-1 h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full  text-white border-0 bg-gradient-to-l from-blue-400 via-cyan-600 to-green-600"
      >
        <IoArrowUpOutline className="text-lg sm:text-xl" />
      </Link>
    </div>
  );
};

export default HomeLayout;
