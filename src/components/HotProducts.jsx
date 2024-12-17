
const HotProducts = () => {
  return (
    <div className="bg-blackTwo py-10 px-5">
      <div className="max-w-6xl mx-auto ">
        <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold text-white">
          <span className="border-b-2 border-yellow">Hot</span> Product
        </h3>
        <div className="max-w-6xl mx-auto  mt-10 space-y-10">
          <div className="flex md:flex-row flex-col  gap-5 border-b md:border-b-0 border-gray-700 pb-5 md:pb-0">
            <div className="w-full md:max-w-[350px] md:h-[250px] h-full">
              <img
                src="/h_1.jpg"
                alt="/"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-2">
              <h5 className="text-xl font-semibold text-white">Can Cooler</h5>
              <p className="text-sm font-medium text-gray-300">
                Our top-quality neoprene can coolers with{" "}
                <strong>sharkskin</strong> non slip base and fully glued 5mm
                panels. Standard sizes to fit either 330ml pop can or 440ml beer
                can. However, we can also make to any size required. Screen
                printed or sublimated with your logo - no colour limit, all over
                printing, neon inks, special coatings including plush, turf,
                lycra.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col  gap-5">
            <div className="w-full md:max-w-[350px] md:h-[250px] h-full">
              <img
                src="/h_3.jpg"
                alt="/"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-2">
              <h5 className="text-xl font-semibold text-white">General Bags</h5>
              <p className="text-sm font-medium text-gray-300">
                We can make you protective travel and storage bags for a vast
                range of commercial products. This list covers product areas we
                have made bags for in the past: Medical devices, Sunglasses,
                PDAs, Cameras, Binoculars, BackPacks, Bumbags, and many more.
                Please contact us with your brief for further information
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotProducts;
