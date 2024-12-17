import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-blackTwo min-h-screen w-full ">
      <div className=" bg-[url(/n_add.jpg)] bg-cover bg-center bg-no-repeat min-h-[300px] relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-blackTwo/90 before:to-blackTwo/20 ">
        <div className="absolute bottom-5 left-[50%] -translate-x-[50%] z-30 flex flex-col gap-10">
          <h3 className="text-4xl font-semibold text-gray-100 ">About Us</h3>
          <ul className="flex items-center gap-[2px]">
            <li className="text-white text-sm font-light">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white text-sm font-light">/</li>
            <li className="text-yellow text-sm font-medium">About Us</li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-20 max-w-6xl mx-auto border-b border-gray-100/20 pb-5">
        <div className="md:order-1 order-2 px-5">
          <p className="lg:text-2xl md:text-xl text-lg text-yellow ">
            35 years in business supplying products and assembly parts to
            industry. We are the UK{"'"}s No 1 neoprene product team.35 years in
            business supplying products and assembly parts to industry. We are
            the UK{"'"}s No 1 neoprene product team.
          </p>
        </div>
        <div className="w-full group overflow-hidden md:order-2 order-1 px-5">
          <img
            src="/featured/f_4.jpg"
            alt="/"
            className="w-full group-hover:scale-110 transition-all duration-500 ease-linear cursor-pointer"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-5 px-5">
        <p className="text-gray-100/85 ">
          The partners in this business offer a combined 35 years of experience
          in the neoprene and wetsuit market. Over that time period, we have
          diversified from the watersports industry into promotional product to
          meet an increasing global demand for these items. Our assured product
          quality and short delivery times are further enhanced by a very
          competitive pricing structure across the product range. We strongly
          believe you won{"'"}t find a better service anywhere. This is
          evidenced by the growing number of orders being shipped into the USA
          which are now handled by us. For customers both States-Side and in
          Europe, you could not be placing your business in more secure and
          experienced hands.
        </p>
        <p className="text-white font-medium mt-5">
          We give you more in the following areas:
        </p>
        <ul className="flex flex-col gap-3 ml-10 my-3">
          <li className="list-disc text-gray-100/85 text-sm ">
            The quickest lead times in the business
          </li>
          <li className="list-disc text-gray-100/85 text-sm ">
            Import/export know-how from Asia Pacific to Europe and USA
          </li>
          <li className="list-disc text-gray-100/85 text-sm ">
            Product design services and innovation as a result of our technical
            knowledge of both newly-developed and existing materials and
            assembly methods
          </li>
          <li className="list-disc text-gray-100/85 text-sm ">
            Cost-effective product development and design
          </li>
          <li className="list-disc text-gray-100/85 text-sm ">
            Fast and efficient online marketing and communications
          </li>
          <li className="list-disc text-gray-100/85 text-sm ">
            Acclaimed computer graphics and artwork creation skills
          </li>
          <li className="list-disc text-gray-100/85 text-sm ">
            Fully compliant manufacturing facility
          </li>
          <li className="list-disc text-gray-100/85 text-sm ">
            Customs, quotas and currency exchange expertise to add further value
            your purchase
          </li>
          <li className="list-disc text-gray-100/85 text-sm ">
            Legal and financial leverage UK & China
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
