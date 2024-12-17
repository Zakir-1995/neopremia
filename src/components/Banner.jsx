import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
const Banner = () => {
  var settings = {
    arrows: true,

    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    infinite: true,
    dots: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <div>
      <Slider {...settings} className="w-full  h-full relative">
        <div className="z-10 w-full h-[90vh] bg-[url(/1.jpg)] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center relative before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/0 before:to-white/80">
          <div className="gap-2 w-full max-w-6xl mx-auto px-5  h-full flex flex-col justify-center relative z-20 text-black space-y-2">
            <Fade direction={"left"}>
              <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium text-ash uppercase leading-tight w-fit">
                UK Custom <br /> Neoprene Products
              </h1>
            </Fade>
            <Fade direction={"right"}>
              <span className="lg:text-2xl md:text-xl sm:text-lg text-base font-mulish  text-black font-light leading-tight">
                Fast delivery and unbeatable prices
              </span>
            </Fade>
          </div>
        </div>
        <div className="z-10 w-full h-[90vh] bg-[url(/3.jpg)] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center relative before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/0 before:to-white/80">
          <div className="gap-2 w-full max-w-6xl mx-auto px-5  h-full flex flex-col justify-center relative z-20 text-black">
            <Fade cascade damping={0.1} direction={"left"}>
              <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium text-ash uppercase leading-tight w-fit">
                Neoprene Rubber <br /> Promotional Products
              </h1>
            </Fade>
            <Fade cascade damping={0.1} direction={"right"}>
              <span className="lg:text-2xl md:text-xl sm:text-lg text-base font-mulish  text-black font-light leading-3">
                A UK Company Supplying to Global Customers
              </span>
            </Fade>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
