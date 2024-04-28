import Blogs from "./Blogs";
import CraftItems from "./CraftItems";
import Faq from "./Faq";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <CraftItems></CraftItems>
      <Blogs></Blogs>
      <Faq></Faq>
    </div>
  );
};

export default Home;
