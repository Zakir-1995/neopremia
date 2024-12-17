import Slider from "react-slick";
import { brandData } from "../data/brandData";

const Brand = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    speed: 1000,
    pauseOnHover: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-blackTwo py-10  ">
      <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold text-white max-w-6xl mx-auto  pb-2 mb-10">
        <span className="border-b-2 border-yellow">Our</span> Clients
      </h3>
      <div className=" border-t border-gray-100/10 border-b px-5 py-10">
        <Slider
          {...settings}
          className="  max-w-6xl mx-auto w-full h-[80px] "
        >
          {brandData.length > 0 &&
            brandData.map((item) => (
              <div
                key={item.id}
                className=" max-w-[100px] w-full  h-[80px] flex justify-center "
              >
                <img
                  src={item.imgUrl}
                  alt="/"
                  className="w-full  h-full rounded-md"
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brand;
