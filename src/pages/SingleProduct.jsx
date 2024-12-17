import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getSingleProduct = async () => {
      const BASE_URL = "/data";
      try {
        // Fetch all products
        const response = await axios.get(`${BASE_URL}/productData.json`);
        const products = response?.data;
        const product = products?.find((product) => product?.id === id);
        setProduct(product);
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    };
    getSingleProduct();
  }, [id]);

  return (
    <div className="bg-blackTwo">
      <div className="max-w-7xl mx-auto p-6  shadow-md rounded-lg py-40">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="flex-1 border-2 border-gray-100/20  rounded-md">
            <img
              src={product?.imgUrl}
              alt={product?.title}
              className="w-full min-h-[300px] rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-white mb-4">
              {product?.title}
            </h1>
            <p className="text-gray-100/80 text-sm mb-4">{product?.desc}</p>
            <p className="text-2xl font-semibold text-yellow mb-4">
              ${product?.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );;
};

export default SingleProduct;
