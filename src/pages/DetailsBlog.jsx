import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getSingleBlog = async () => {
      const BASE_URL = "/data";
      try {
        const response = await axios.get(`${BASE_URL}/blogsData.json`);
        const blogs = response?.data;
        const singleBlog = blogs?.find((b) => b?.id == id);
        setBlog(singleBlog);
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    };
    getSingleBlog();
  }, [id]);

  return (
    <div className="bg-blackTwo">
      <div className="max-w-7xl mx-auto p-6  shadow-md rounded-lg py-40">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="flex-1   rounded-md">
            <img
              src={blog?.imageUrl}
              alt={blog?.title}
              className="w-full min-h-[300px] rounded-lg shadow-md object-cover"
            />
          </div>

          {/* blog Info */}
          <div className="flex-1">
            <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-white mb-4">
              {blog?.title}
            </h1>
            <p className="text-gray-100/80 text-sm mb-4">{blog?.description}</p>
            <div className="flex items-center justify-between text-gray-500 text-sm">
              <span>By {blog?.author}</span>
              <span>{blog?.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBlog;
