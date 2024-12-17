import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <div className="bg-yellow py-10 px-5">
      <div className="max-w-6xl mx-auto  flex md:flex-row flex-col items-center justify-between gap-5">
        <h3 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-light text-center ">
          Please Contact Us to find ideal products
        </h3>
        <Link to="/contact">
          <button className="bg-blackTwo lg:px-12 md:px-10 sm:px-8 px-6 lg:py-4 md:py-3 py-2   text-white font-light uppercase hover:bg-megenta transition-all duration-150 ease-linear rounded md:text-base text-sm">
            Contact Now !!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactBanner;
