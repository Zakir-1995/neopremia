import Banner from "../components/Banner";
import FeaturedProduct from "../components/FeaturedProduct";
import NeopreneDesc from "../components/NeopreneDesc";
import HotProducts from "../components/HotProducts";
import Brand from "../components/Brand";
import NeopreneAdd from "../components/NeopreneAdd";
import BreakingNews from "../components/breakingNews/BreakingNews";

const Home = () => {
  return (
    <div>
      <Banner />
      <BreakingNews message="We use many different grades of rubber according to quality/price requirements. We also offer some great product idea. roduct ideas. Call 01737-233890 for more information..." />
      <NeopreneDesc />
      <FeaturedProduct />
      <NeopreneAdd />
      <HotProducts />
      <Brand />
    </div>
  );
};

export default Home;
