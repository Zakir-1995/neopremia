import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className=" bg-white shadow-lg rounded-lg  ">
        <div className="overflow-hidden rounded-lg">
          <img
            src={product.imgUrl}
            alt={product.title}
            className="rounded-t h-[160px] w-full object-cover object-center transform hover:scale-105 transition duration-300"
          />
        </div>
        <div className="flex items-center justify-between mt-2 p-3 ">
          {" "}
          <h3 className="text-sm font-medium text-blackTwo">{product.title}</h3>
          <p className="text-xl font-semibold text-yellow">${product.price}</p>
        </div>
        <div className="p-3">
          <p className="text-sm font-light text-gray-700 line-clamp-2">
            {product.desc}
          </p>
          <button className="text-sm uppercase bg-yellow border border-megenta rounded px-4 py-1 w-full mt-2 hover:bg-megenta transition-all duration-150 ease-linear hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
