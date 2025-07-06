import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Showcase from "../Components/Showcase/Showcase";
import Contact from "../Components/Contact/Contact";
import Navbar from "../Components/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div className="xl:container mx-auto px-4">
        <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Showcase></Showcase>
      <Contact></Contact>
    </div>
  );
};

export default HomeLayout;
