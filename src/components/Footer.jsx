import { FaFacebook, FaLinkedin, FaSquarePhone, FaSquareXTwitter } from "react-icons/fa6";
import { LiaFaxSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className="bg-blackTwo py-10 px-5 ">
      <div className=" max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
        <div className="flex flex-col gap-5">
          <img src="/logo_n.jpg" alt="/" className="w-20 h-20 rounded-full border border-megenta/50" />

          <span className="text-white text-sm font-light flex items-center gap-2">
            <FaSquarePhone size={28} /> +44 (0)1737-233890
          </span>
          <span className="text-white text-sm font-light flex items-center gap-2">
            <LiaFaxSolid size={28} /> +44 (0)1737 233600
          </span>
          <span className="text-white text-sm font-light flex items-center gap-2">
            <MdEmail size={28} /> info@neopremia.co.uk
          </span>
        </div>
        <div className="space-y-5">
          <h6 className="text-xl font-medium text-white">Useful Links</h6>
          <ul className="flex flex-col gap-5">
            <li className="text-sm font-light text-white hover:translate-x-1 hover:text-yellow transition-all cursor-pointer ease-linear w-fit">
              Home
            </li>
            <li className="text-sm font-light text-white hover:translate-x-1 hover:text-yellow transition-all cursor-pointer ease-linear w-fit">
              ABout
            </li>
            <li className="text-sm font-light text-white hover:translate-x-1 hover:text-yellow transition-all cursor-pointer ease-linear w-fit">
              Product
            </li>
            <li className="text-sm font-light text-white hover:translate-x-1 hover:text-yellow transition-all cursor-pointer ease-linear w-fit">
              blogs
            </li>
            <li className="text-sm font-light text-white hover:translate-x-1 hover:text-yellow transition-all cursor-pointer ease-linear w-fit">
              Contact
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          <h6 className="text-xl font-medium text-white">Address</h6>
          <h5 className="text-lg font-light text-white">NEOPREMIA UK</h5>
          <p className="text-white text-sm font-light">
            A division of Mark SG Enterprises Ltd [Import, distribution &
            marketing services for promotional and retail premium products]
          </p>
          <span className="text-white text-sm font-light mt-2">
            The Studio. 7. Margery Hall Reigate Hill Reigate Surrey RH2 9RL
          </span>
        </div>
        <div className="space-y-5">
          <h6 className="text-xl font-medium text-white"> Social Links</h6>
          <ul className="flex items-center gap-5">
            <li>
              <a
                href="https://www.facebook.com/neopremiauk"
                target="_blank"
                className="text-2xl text-white hover:text-yellow transition-all duration-150 ease-linear"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="text-2xl text-white hover:text-yellow transition-all duration-150 ease-linear"
              >
                <FaSquareXTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="text-2xl text-white hover:text-yellow transition-all duration-150 ease-linear"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
