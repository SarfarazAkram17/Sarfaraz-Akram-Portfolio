import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Showcase from "../Components/Showcase/Showcase";
import Contact from "../Components/Contact/Contact";

const HomeLayout = () => {
  return (
    <div className="xl:container mx-auto px-4">
      <Home></Home>
      <About></About>
      <Showcase></Showcase>
      <Contact></Contact>
    </div>
  );
};

export default HomeLayout;
