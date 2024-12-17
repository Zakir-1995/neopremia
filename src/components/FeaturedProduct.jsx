import Slider from "react-slick";
import { featuredData } from "../data/featuredData";

const FeaturedProduct = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-blackTwo pb-10 px-5">
      <div className="max-w-6xl mx-auto ">
        <h3 className="lg:text-3xl md:text-2xl text-xl  font-semibold text-white">
          <span className="border-b-2 border-yellow  ">Featured </span>
          Products
        </h3>
        <Slider {...settings} className="py-10 w-full  mx-auto featured">
          {featuredData.length > 0 &&
            featuredData.map((item) => (
              <div key={item.id} className="w-full h-full ">
                <img
                  src={item.imgUrl}
                  alt="/"
                  className="w-full h-full min-h-[200px] object-cover"
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedProduct;
